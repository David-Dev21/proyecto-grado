import { Injectable } from '@nestjs/common';
import { CreateUbicacionFuncionarioDto } from './dto/create-ubicacion_funcionario.dto';

@Injectable()
export class UbicacionFuncionariosService {
  create(createUbicacionFuncionarioDto: CreateUbicacionFuncionarioDto) {
    return 'This action adds a new ubicacionFuncionario';
  }

  findAll() {
    return `This action returns all ubicacionFuncionarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ubicacionFuncionario`;
  }
}
