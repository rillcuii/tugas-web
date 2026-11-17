import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { JadwalModule } from './jadwal/jadwal.module.js';

@Module({
  imports: [JadwalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
