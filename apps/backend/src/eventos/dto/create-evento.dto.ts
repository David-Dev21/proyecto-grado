import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateEventoDto {
  @ApiProperty({ example: 1, description: 'ID numérico de la alerta' })
  @IsNumber({}, { message: 'id_alerta debe ser un número' })
  @IsNotEmpty({ message: 'id_alerta no debe estar vacío' })
  id_alerta: number;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsString({ message: 'id_funcionario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'id_funcionario no debe estar vacío' })
  id_funcionario: string;

  @ApiProperty({
    example: 'SEG-001',
    required: false,
  })
  @IsString({ message: 'id_seguimiento debe ser una cadena de texto' })
  @IsOptional()
  id_seguimiento?: string;

  @ApiProperty({ example: '2025-06-15T10:30:00Z' })
  @IsDateString({}, { message: 'fecha_hora debe ser una fecha válida' })
  @IsNotEmpty({ message: 'fecha_hora no debe estar vacío' })
  fecha_hora: string;

  @ApiProperty({ example: 'Llegamos al lugar del incidente' })
  @IsString({ message: 'comentario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'comentario no debe estar vacío' })
  comentario: string;
}
