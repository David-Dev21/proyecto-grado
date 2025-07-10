import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionAlertasController } from './ubicacion_alertas.controller';
import { UbicacionAlertasService } from './ubicacion_alertas.service';
import { UbicacionAlerta } from './entities/ubicacion-alerta.entity';
import { UbicacionAlertasRepository } from './repositories/ubicacion-alertas.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UbicacionAlerta])],
  controllers: [UbicacionAlertasController],
  providers: [
    UbicacionAlertasService,
    UbicacionAlertasRepository,
    {
      provide: 'IUbicacionAlertasRepository',
      useClass: UbicacionAlertasRepository,
    },
  ],
  exports: [UbicacionAlertasService],
})
export class UbicacionAlertasModule {}
