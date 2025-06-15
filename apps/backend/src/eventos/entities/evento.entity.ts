import { ApiProperty } from '@nestjs/swagger';

export class Evento {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  id_alerta: string;

  @ApiProperty()
  id_funcionario: string;

  @ApiProperty({ required: false })
  id_seguimiento?: string;

  @ApiProperty()
  fecha_hora: Date;

  @ApiProperty()
  ubicacion: any; // geography(POINT)

  @ApiProperty()
  comentario: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty({ required: false })
  deleted_at?: Date;

  @ApiProperty({ required: false })
  alerta?: any;
}
