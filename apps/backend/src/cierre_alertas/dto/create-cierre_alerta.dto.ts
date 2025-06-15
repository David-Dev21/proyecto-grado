import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString, IsEnum } from 'class-validator';
import { TipoAlerta } from '@prisma/client';

export class CreateCierreAlertaDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsString({ message: 'id_funcionario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'id_funcionario no debe estar vacío' })
  id_funcionario: string;

  @ApiProperty({ example: '2025-06-15T15:30:00Z' })
  @IsDateString({}, { message: 'fecha_hora debe ser una fecha válida' })
  @IsNotEmpty({ message: 'fecha_hora no debe estar vacío' })
  fecha_hora: string;

  @ApiProperty({ example: 'Alerta cerrada exitosamente, víctima atendida y trasladada a centro médico' })
  @IsString({ message: 'comentario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'comentario no debe estar vacío' })
  comentario: string;
  @ApiProperty({ enum: TipoAlerta, example: TipoAlerta.VIOLENCIA })
  @IsEnum(TipoAlerta, { message: 'tipo_alerta debe ser un tipo de alerta válido' })
  @IsNotEmpty({ message: 'tipo_alerta no debe estar vacío' })
  tipo_alerta: TipoAlerta;

  @ApiProperty({ example: 'Estable, sin lesiones graves' })
  @IsString({ message: 'estado_victima debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'estado_victima no debe estar vacío' })
  estado_victima: string;

  @ApiProperty({ example: 'Juan Carlos Pérez López' })
  @IsString({ message: 'nombre_agresor debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'nombre_agresor no debe estar vacío' })
  nombre_agresor: string;

  @ApiProperty({ example: '12345678' })
  @IsString({ message: 'ci_agresor debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'ci_agresor no debe estar vacío' })
  ci_agresor: string;
}
