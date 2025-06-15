import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsDateString, IsNumber } from 'class-validator';

class UbicacionDto {
  @ApiProperty({ example: -16.5 })
  @IsNumber({}, { message: 'latitud debe ser un número' })
  @IsNotEmpty({ message: 'latitud no debe estar vacío' })
  latitud: number;

  @ApiProperty({ example: -68.15 })
  @IsNumber({}, { message: 'longitud debe ser un número' })
  @IsNotEmpty({ message: 'longitud no debe estar vacío' })
  longitud: number;
}

export class CreateEventoDto {
  @ApiProperty({ example: '29a0c554-7456-4ee6-ae8f-65778d84a838' })
  @IsString({ message: 'id_alerta debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'id_alerta no debe estar vacío' })
  id_alerta: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsString({ message: 'id_funcionario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'id_funcionario no debe estar vacío' })
  id_funcionario: string;

  @ApiProperty({ 
    example: 'SEG-001',
    required: false 
  })
  @IsString({ message: 'id_seguimiento debe ser una cadena de texto' })
  @IsOptional()
  id_seguimiento?: string;

  @ApiProperty({ example: '2025-06-15T10:30:00Z' })
  @IsDateString({}, { message: 'fecha_hora debe ser una fecha válida' })
  @IsNotEmpty({ message: 'fecha_hora no debe estar vacío' })
  fecha_hora: string;

  @ApiProperty({ type: UbicacionDto })
  @IsNotEmpty({ message: 'ubicacion no debe estar vacío' })
  ubicacion: UbicacionDto;

  @ApiProperty({ example: 'Funcionario arribó al lugar de los hechos' })
  @IsString({ message: 'comentario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'comentario no debe estar vacío' })
  comentario: string;
}
