import { Module } from '@nestjs/common';
import { AtencionesService } from './atenciones.service';
import { AtencionesController } from './atenciones.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AtencionesController],
  providers: [AtencionesService],
  imports: [PrismaModule],
  exports: [AtencionesService], // Exportar el servicio
})
export class AtencionesModule {}
