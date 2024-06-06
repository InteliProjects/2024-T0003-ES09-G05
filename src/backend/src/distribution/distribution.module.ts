import { Module } from '@nestjs/common';
import { DistributionService } from './distribution.service';
import { DistributionController } from './distribution.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [DistributionController],
  providers: [DistributionService, PrismaService],
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
})
export class DistributionModule {}
