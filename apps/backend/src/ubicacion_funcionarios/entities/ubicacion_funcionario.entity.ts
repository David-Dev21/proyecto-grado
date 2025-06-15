import { ApiProperty } from '@nestjs/swagger';

export class UbicacionFuncionario {
  @ApiProperty({ description: 'ID único de la ubicación de funcionario' })
  id: bigint;

  @ApiProperty({ description: 'ID de la atención asociada' })
  id_atencion: bigint;

  @ApiProperty({ description: 'Fecha y hora de la ubicación' })
  fecha_hora: Date;

  @ApiProperty({ 
    description: 'Coordenadas de ubicación',
    type: 'object',
    properties: {
      latitud: { type: 'number', description: 'Latitud' },
      longitud: { type: 'number', description: 'Longitud' }
    }
  })
  ubicacion: {
    latitud: number;
    longitud: number;
  };

  @ApiProperty({ description: 'Fecha de creación' })
  created_at: Date;

  @ApiProperty({ description: 'Fecha de última actualización' })
  updated_at: Date;

  @ApiProperty({ description: 'Fecha de eliminación (soft delete)', required: false })
  deleted_at?: Date;

  @ApiProperty({ description: 'Información de la atención asociada', required: false })
  atencion?: any;
}
