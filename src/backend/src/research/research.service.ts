import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResearchDto } from './dto/create.dto';
import * as nodemailer from 'nodemailer';
import { Counter } from 'prom-client';
import { errorCounters } from 'src/metrics/counter-error-metrics';
import { reqCounters } from 'src/metrics/counter-req-metrics';
import { httpRequestDurationMicroseconds } from 'src/metrics/request-duration-metric';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'grupo5trackcointeli@gmail.com',
    pass: 'fswalytaisvscpal',
  },
});

@Injectable()
export class ResearchService {
  constructor(private prisma: PrismaService) { }

  async create(body: CreateResearchDto) {
    const start = performance.now()
    const research = await this.prisma.researchs.create({
      data: {
        title: body.title,
      }
    });
    reqCounters.create.inc()

    const end = performance.now()
    httpRequestDurationMicroseconds.observe({ route: '/research', method: 'POST', status: 'ok' }, end - start)

    return research;
  }

  async update(body: CreateResearchDto) {
    const start = performance.now()
    const research = await this.prisma.researchs.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
      },
    });
    reqCounters.update.inc()

    const end = performance.now()
    httpRequestDurationMicroseconds.observe({ route: '/research', method: 'PUT', status: 'ok' }, end - start)

    return research;
  }

  async getResearchs() {
    const start = performance.now()
    try {
      reqCounters.getResearchs.inc()

      const end = performance.now()
      httpRequestDurationMicroseconds.observe({ route: '/research', method: 'GET', status: 'ok' }, end - start)

      return this.prisma.researchs.findMany()
    } catch (error) {
      errorCounters.getResearchs.inc();

      const end = performance.now()
      httpRequestDurationMicroseconds.observe({ route: '/research', method: 'GET', status: 'error' }, end - start)

      return {
        message: 'Erro ao buscar pesquisas!',
      };
    }
  }

  async getResearchById(id: string) {
    reqCounters.getResearchById.inc()
    return this.prisma.researchs.findUnique({
      where: {
        id: id,
      },
    });
  }

  async vote(id: string, grade: number) {
    try {
      const user = await this.prisma.usersDistribution.findUnique({
        where: {
          id: id,
        },
      });

      if (user.grade) {
        reqCounters.vote.inc()
        return {
          message: 'Usuário já votou!',
        };
      }
    } catch (error) {
      return {
        message: 'Usuário não encontrado!',
      };
    }

    await this.prisma.usersDistribution.update({
      where: {
        id: id,
      },
      data: {
        grade: grade,
      },
    });
    
    reqCounters.vote.inc()
    return {
      message: 'Voto computado com sucesso!',
    };
  }

  async calculateNPS(id: string) {
    let grades = [];

    const research = await this.prisma.researchs.findUnique({
      where: {
        id: id,
      },
      include: {
        distribution: true,
      },
    });

    for (const distribution of research.distribution) {
      let users = await this.prisma.usersDistribution.findMany({
        where: {
          distributionId: distribution.id,
        },
      });

      users.forEach((user) => {
        if (user.grade) {
          grades.push(user.grade);
        }
      });
    };

    const promoters = grades.filter((grade) => grade >= 9).length;
    const detractors = grades.filter((grade) => grade <= 6).length;
    const total = grades.length;

    const nps = ((promoters - detractors) / total) * 100;

    return {
      nps,
    };
  }
}