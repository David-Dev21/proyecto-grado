import { Module } from '@nestjs/common';
import { UbicacionFuncionariosService } from './ubicacion_funcionarios.service';
import { UbicacionFuncionariosController } from './ubicacion_funcionarios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UbicacionFuncionariosController],
  providers: [UbicacionFuncionariosService],
  imports: [PrismaModule],
  exports: [UbicacionFuncionariosService],
})
export class UbicacionFuncionariosModule {}
