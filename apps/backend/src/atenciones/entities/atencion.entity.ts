import { ApiProperty } from '@nestjs/swagger';

export class AtencionFuncionarioEntity {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  id_atencion: bigint;

  @ApiProperty({ required: false })
  id_funcionario?: string;

  @ApiProperty()
  encargado: boolean;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty({ required: false })
  deleted_at?: Date;
}

export class AlertaCasoEntity {
  @ApiProperty({ description: 'Número de caso de la alerta' })
  nro_caso: string;
}

export class AtencionFuncionarioWithDetailsEntity {
  @ApiProperty({ description: 'ID del funcionario en atención' })
  id: string;

  @ApiProperty({ description: 'ID de la atención' })
  id_atencion: string;

  @ApiProperty({ description: 'ID del funcionario', required: false })
  id_funcionario?: string;

  @ApiProperty({ description: 'Es encargado de la atención' })
  encargado: boolean;

  @ApiProperty({ description: 'Fecha de creación' })
  created_at: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updated_at: Date;

  @ApiProperty({ description: 'Fecha de eliminación', required: false })
  deleted_at?: Date;
}

export class AtencionEntity {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  usuario_despachador: bigint;

  @ApiProperty()
  id_vehiculo: string;

  @ApiProperty({ required: false })
  sigla_radio?: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty({ required: false })
  deleted_at?: Date;

  @ApiProperty({ 
    type: [AtencionFuncionarioEntity],
    required: false
  })
  atencion_funcionario?: AtencionFuncionarioEntity[];
}

export class AtencionAlertaEntity {
  @ApiProperty({ description: 'ID de la atención' })
  id: string;

  @ApiProperty({ description: 'UUID de la atención' })
  uuid: string;

  @ApiProperty({ description: 'ID de la alerta relacionada' })
  id_alerta: string;

  @ApiProperty({ description: 'ID del usuario despachador' })
  usuario_despachador: string;

  @ApiProperty({ description: 'ID del vehículo' })
  id_vehiculo: string;

  @ApiProperty({ description: 'Sigla del radio', required: false })
  sigla_radio?: string;

  @ApiProperty({ description: 'Fecha de creación' })
  created_at: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updated_at: Date;

  @ApiProperty({ description: 'Fecha de eliminación', required: false })
  deleted_at?: Date;

  @ApiProperty({ 
    description: 'Información básica de la alerta',
    type: AlertaCasoEntity
  })
  alerta: AlertaCasoEntity;

  @ApiProperty({ 
    description: 'Funcionarios asignados a la atención',
    type: [AtencionFuncionarioWithDetailsEntity]
  })
  atencion_funcionario: AtencionFuncionarioWithDetailsEntity[];
}
