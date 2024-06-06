import { IsString, IsNotEmpty } from 'class-validator';

export class UploadDto {
  @IsString()
  @IsNotEmpty()
  channel: string;

  @IsString()
  @IsNotEmpty()
  researchId: string;

  @IsString()
  distributionId: string;
}
