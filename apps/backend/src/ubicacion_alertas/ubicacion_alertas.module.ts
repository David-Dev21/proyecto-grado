import { Module } from '@nestjs/common';
import { UbicacionAlertasService } from './ubicacion_alertas.service';
import { UbicacionAlertasController } from './ubicacion_alertas.controller';

@Module({
  controllers: [UbicacionAlertasController],
  providers: [UbicacionAlertasService],
})
export class UbicacionAlertasModule {}
