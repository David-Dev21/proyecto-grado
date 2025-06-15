import { ApiProperty } from '@nestjs/swagger';
import { TipoAlerta } from '@prisma/client';

export class CierreAlerta {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  id_funcionario: string;

  @ApiProperty()
  fecha_hora: Date;

  @ApiProperty()
  comentario: string;

  @ApiProperty({ enum: TipoAlerta })
  tipo_alerta: TipoAlerta;

  @ApiProperty()
  estado_victima: string;

  @ApiProperty()
  nombre_agresor: string;

  @ApiProperty()
  ci_agresor: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty({ required: false })
  deleted_at?: Date;

  @ApiProperty({ required: false })
  alerta?: any;
}
