import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UploadDto } from './dto/upload.dto';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import * as nodemailer from 'nodemailer';
import { generateEmail } from 'src/utils/generate-email';
import { httpRequestDurationMicroseconds } from 'src/metrics/request-duration-metric';
import { errorCounters } from 'src/metrics/counter-error-metrics';
import { reqCounters } from 'src/metrics/counter-req-metrics';
const { performance } = require("perf_hooks");

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'grupo5trackcointeli@gmail.com',
    pass: 'fswalytaisvscpal',
  },
});

@Injectable()
export class DistributionService {
  constructor(private prisma: PrismaService) { }

  async parseCsv(filePath: string, body: UploadDto) {
    const JSON = await new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(
          csvParser({
            separator: ';',
          }),
        )
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => reject(error));
    });

    let distribution

    if(!body.distributionId) {
      distribution = await this.prisma.distribution.create({
        data: {
          channel: body.channel,
          researchId: body.researchId,
        },
      });
    } else {
      distribution = await this.prisma.distribution.findUnique({
        where: {
          id: body.distributionId
        }
      })

      this.prisma.distribution.update({
        where: {
          id: body.distributionId
        },
        data: {
          channel: body.channel,
          researchId: body.researchId,
        }
      })
    }
    

    (JSON as any).forEach(async (element) => {
      await this.prisma.usersDistribution.create({
        data: {
          name: element.name,
          contact: element.contact,
          distributionId: distribution.id,
        },
      });
    });

    return {
      message: 'Arquivo processado com sucesso e pesquisa criada!',
      id: distribution.id,
    };
  }

  async findAll() {
    return this.prisma.distribution.findMany();
  }

  async findOne(id: string) {
    return this.prisma.distribution.findUnique({
      where: {
        id,
      },
    });
  }

  async distribute(id: string) {
    const start = performance.now();

    try {
      const distribution = await this.prisma.distribution.findUnique({
        where: {
          id,
        },
        include: {
          users: true,
        },
      });

      const research = await this.prisma.researchs.findUnique({
        where: {
          id: distribution.researchId,
        },
      });

      for (let i = 0; i < distribution.users.length; i++) {
        const mailOptions = {
          to: distribution.users[i].contact,
          from: 'grupo5trackcointeli@gmail.com',
          subject: `${research.title}`,
          html: generateEmail(distribution.users[i].id, research),
        };
        await transporter.sendMail(mailOptions, (err, info) => {
          if (err) console.log(err);
          else console.log(info);
        });
        setTimeout(() => {
          console.log('Enviando email para: ', distribution.users[i]);
        }, 5000);
      }

      try {
        await this.prisma.distribution.update({
          where: {
            id,
          },
          data: {
            status: true,
          },
        });
        reqCounters.distribute.inc()

        const end = performance.now()
        httpRequestDurationMicroseconds.observe({ route: '/distribute', status: 'ok' }, end - start)
        return { message: 'Pesquisas distribuídas com sucesso!' };
      } catch (error) {
        console.error('Erro ao enviar emails: ', error);
        
        const end = performance.now()
        httpRequestDurationMicroseconds.observe({ route: '/distribute/id', method:'GET', status: 'error' }, end - start)

        errorCounters.distribute.inc()
        return { error: 'Erro ao enviar as pesquisas: ' + error.message };
      }
    } catch (error) {
      const end = performance.now()
      httpRequestDurationMicroseconds.observe({ route: '/distribute/id', method:'GET', status: 'error' }, end - start)
      errorCounters.distribute.inc()
    }
  }
}
