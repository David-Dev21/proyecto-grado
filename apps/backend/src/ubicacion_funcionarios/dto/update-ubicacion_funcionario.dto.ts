import { PartialType } from '@nestjs/swagger';
import { CreateUbicacionFuncionarioDto } from './create-ubicacion_funcionario.dto';

export class UpdateUbicacionFuncionarioDto extends PartialType(CreateUbicacionFuncionarioDto) {}
