import { IsString, IsNotEmpty } from 'class-validator';

export class CreateResearchDto {
  @IsString()
  id: string;
  
  @IsString()
  @IsNotEmpty()
  title: string;
}
