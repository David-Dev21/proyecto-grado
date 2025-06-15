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

export class Atencion {
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
