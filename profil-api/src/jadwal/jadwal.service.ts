import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJadwalDto } from './dto/create-jadwal.dto.js';

export interface Jadwal {
  hari: string;
  mataKuliah: string;
  jam: string;
}

@Injectable()
export class JadwalService {
  private readonly jadwal: Jadwal[] = [
    { hari: 'Senin', mataKuliah: 'Pemrograman Web', jam: '08.00' },
    { hari: 'Senin', mataKuliah: 'Basis Data', jam: '10.00' },
    { hari: 'Rabu', mataKuliah: 'Jaringan Komputer', jam: '13.00' },
  ];

  findAll(): Jadwal[] {
    return this.jadwal;
  }

  findByHari(hari: string): Jadwal[] {
    const hasil = this.jadwal.filter(
      (item) => item.hari.toLowerCase() === hari.toLowerCase(),
    );

    if (hasil.length === 0) {
      throw new NotFoundException(`Jadwal hari ${hari} tidak ditemukan.`);
    }

    return hasil;
  }

  create(createJadwalDto: CreateJadwalDto): Jadwal {
    this.jadwal.push(createJadwalDto);
    return createJadwalDto;
  }
}
