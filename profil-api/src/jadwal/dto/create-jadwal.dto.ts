import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJadwalDto {
  @IsString()
  @IsNotEmpty()
  hari: string;

  @IsString()
  @IsNotEmpty()
  mataKuliah: string;

  @IsString()
  @IsNotEmpty()
  jam: string;
}
