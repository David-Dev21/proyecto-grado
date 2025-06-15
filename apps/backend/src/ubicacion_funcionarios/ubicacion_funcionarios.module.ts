import { Module } from '@nestjs/common';
import { UbicacionFuncionariosService } from './ubicacion_funcionarios.service';
import { UbicacionFuncionariosController } from './ubicacion_funcionarios.controller';

@Module({
  controllers: [UbicacionFuncionariosController],
  providers: [UbicacionFuncionariosService],
})
export class UbicacionFuncionariosModule {}
