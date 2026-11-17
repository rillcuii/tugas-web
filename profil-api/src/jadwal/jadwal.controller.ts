import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateJadwalDto } from './dto/create-jadwal.dto.js';
import { JadwalService } from './jadwal.service.js';

@Controller('api/jadwal')
export class JadwalController {
  constructor(private readonly jadwalService: JadwalService) {}

  @Get()
  findAll() {
    return this.jadwalService.findAll();
  }

  @Get(':hari')
  findByHari(@Param('hari') hari: string) {
    return this.jadwalService.findByHari(hari);
  }

  @Post()
  create(@Body() createJadwalDto: CreateJadwalDto) {
    return this.jadwalService.create(createJadwalDto);
  }
}
