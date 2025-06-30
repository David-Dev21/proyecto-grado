import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUbicacionAlertaDto {
  @ApiProperty({
    example: 1,
    description: 'ID de la alerta',
  })
  @IsNotEmpty({ message: 'El ID de alerta es requerido' })
  @IsNumber({}, { message: 'El ID de alerta debe ser un número' })
  id_alerta: number;

  @ApiProperty({
    example: '2025-06-30T10:30:00Z',
    description: 'Fecha y hora de la ubicación',
  })
  @IsNotEmpty({ message: 'La fecha y hora es requerida' })
  @IsDateString({}, { message: 'La fecha y hora debe ser una fecha válida' })
  fecha_hora: string;

  @ApiProperty({
    example: -16.5,
    description: 'Latitud de la ubicación',
  })
  @IsNotEmpty({ message: 'La latitud es requerida' })
  @IsNumber({}, { message: 'La latitud debe ser un número' })
  latitud: number;

  @ApiProperty({
    example: -68.15,
    description: 'Longitud de la ubicación',
  })
  @IsNotEmpty({ message: 'La longitud es requerida' })
  @IsNumber({}, { message: 'La longitud debe ser un número' })
  longitud: number;
}
