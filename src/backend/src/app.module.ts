import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResearchModule } from './research/research.module';
import { PrismaModule } from './prisma/prisma.module';
import { DistributionModule } from './distribution/distribution.module';

@Module({
  imports: [ResearchModule, DistributionModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
