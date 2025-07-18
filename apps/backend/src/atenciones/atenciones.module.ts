import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionesService } from './atenciones.service';
import { AtencionesController } from './atenciones.controller';
import { Atencion, AtencionFuncionario } from './entities/atencion.entity';
import { AtencionesRepository } from './repositories/atenciones.repository';
import { AlertasModule } from 'src/alertas/alertas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Atencion, AtencionFuncionario]), forwardRef(() => AlertasModule)],
  controllers: [AtencionesController],
  providers: [
    AtencionesService,
    AtencionesRepository,
    {
      provide: 'IAtencionesRepository',
      useClass: AtencionesRepository,
    },
  ],
  exports: [AtencionesService], // Exportar el servicio
})
export class AtencionesModule {}
