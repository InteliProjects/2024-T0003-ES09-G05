import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateResearchDto } from './dto/create.dto';
import { UploadDto } from './dto/upload.dto';
import { ResearchService } from './research.service';

@Controller('research')
export class ResearchController {
  constructor(private readonly researchService: ResearchService) {}

  @Post('')
  async createResearch(@Body() body: CreateResearchDto) {
    return this.researchService.create(body);

  }

  @Put('')
  async updateResearch(@Body() body: CreateResearchDto) {
    return this.researchService.update(body);

  }

  @Get('')
  async getResearch() {
    return this.researchService.getResearchs();
  }

  @Get(':id')
  async getResearchById(@Param('id') id: string) {
    return this.researchService.getResearchById(id);
  }

  @Get('vote/:id/:grade')
  async vote(@Param('id') id: string, @Param('grade') grade: number){
    return this.researchService.vote(id, grade);
  }

  @Get('calculate/:id')
  async distribute(@Param('id') id: string) {
    return this.researchService.calculateNPS(id);
  }
}
