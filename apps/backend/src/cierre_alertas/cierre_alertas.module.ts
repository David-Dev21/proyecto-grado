import { Module } from '@nestjs/common';
import { CierreAlertasService } from './cierre_alertas.service';
import { CierreAlertasController } from './cierre_alertas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CierreAlertasController],
  providers: [CierreAlertasService],
})
export class CierreAlertasModule {}
