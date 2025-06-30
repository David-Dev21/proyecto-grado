import { Module } from '@nestjs/common';
import { UbicacionAlertasService } from './ubicacion_alertas.service';
import { UbicacionAlertasController } from './ubicacion_alertas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UbicacionAlertasController],
  providers: [UbicacionAlertasService],
  imports: [PrismaModule],
  exports: [UbicacionAlertasService], // Exportar el servicio para que pueda ser usado por otros módulos
})
export class UbicacionAlertasModule {}
