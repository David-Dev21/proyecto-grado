import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionFuncionariosController } from './ubicacion_funcionarios.controller';
import { UbicacionFuncionariosService } from './ubicacion_funcionarios.service';
import { UbicacionFuncionario } from './entities/ubicacion-funcionario.entity';
import { UbicacionFuncionariosRepository } from './repositories/ubicacion-funcionarios.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UbicacionFuncionario])],
  controllers: [UbicacionFuncionariosController],
  providers: [
    UbicacionFuncionariosService,
    UbicacionFuncionariosRepository,
    {
      provide: 'IUbicacionFuncionariosRepository',
      useClass: UbicacionFuncionariosRepository,
    },
  ],
  exports: [UbicacionFuncionariosService],
})
export class UbicacionFuncionariosModule {}
