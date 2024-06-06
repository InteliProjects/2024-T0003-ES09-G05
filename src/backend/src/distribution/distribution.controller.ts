import { DistributionService } from './distribution.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Post, UploadedFile, UseInterceptors, Body, Get, Param, Inject, Delete, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from 'multer';
import { UploadDto } from './dto/upload.dto';

@Controller('distribution')
export class DistributionController {
  constructor(private readonly distributionService: DistributionService) {
    
  }
  @Post('')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        uploadDto: {
          $ref: '#/components/schemas/UploadDto',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'CSV processado com sucesso',
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: File, @Body() uploadDto: UploadDto) {
    console.log(file.path)
    const results = await this.distributionService.parseCsv(file.path, uploadDto);
    return results;
  }

  @Get()
  async findAll() {
    return this.distributionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.distributionService.findOne(id);
  }

  @Get('distribute/:id')
  async distribute(@Param('id') id: string) {
    return this.distributionService.distribute(id);
  }
}
