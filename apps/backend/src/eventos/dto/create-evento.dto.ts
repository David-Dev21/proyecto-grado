import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateEventoDto {
  @ApiProperty({ example: 1, description: 'ID numérico de la alerta' })
  @IsNumber({}, { message: 'idAlerta debe ser un número' })
  @IsNotEmpty({ message: 'idAlerta no debe estar vacío' })
  idAlerta: number;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsString({ message: 'idFuncionario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'idFuncionario no debe estar vacío' })
  idFuncionario: string;

  @ApiProperty({
    example: 'SEG-001',
    required: false,
  })
  @IsString({ message: 'idSeguimiento debe ser una cadena de texto' })
  @IsOptional()
  idSeguimiento?: string;

  @ApiProperty({ example: '2025-06-15T10:30:00Z' })
  @IsDateString({}, { message: 'fechaHora debe ser una fecha válida' })
  @IsNotEmpty({ message: 'fechaHora no debe estar vacío' })
  fechaHora: string;

  @ApiProperty({ example: 'Llegamos al lugar del incidente' })
  @IsString({ message: 'comentario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'comentario no debe estar vacío' })
  comentario: string;
}
