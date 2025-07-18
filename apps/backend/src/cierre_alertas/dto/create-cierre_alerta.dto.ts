import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString, IsEnum, IsNumber } from 'class-validator';
import { TipoAlerta } from 'src/common/enums/alerta.enum';

export class CreateCierreAlertaDto {
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'idAlerta debe ser un número' })
  @IsNotEmpty({ message: 'idAlerta no debe estar vacío' })
  idAlerta: number;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsString({ message: 'idFuncionario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'idFuncionario no debe estar vacío' })
  idFuncionario: string;

  @ApiProperty({ example: '2025-06-15T15:30:00Z' })
  @IsDateString({}, { message: 'fechaHora debe ser una fecha válida' })
  @IsNotEmpty({ message: 'fechaHora no debe estar vacío' })
  fechaHora: string;

  @ApiProperty({ example: 'Alerta cerrada exitosamente, víctima atendida y trasladada a centro médico' })
  @IsString({ message: 'comentario debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'comentario no debe estar vacío' })
  comentario: string;
  @ApiProperty({ enum: TipoAlerta, example: TipoAlerta.EMERGENCIA })
  @IsEnum(TipoAlerta, { message: 'tipoAlerta debe ser un tipo de alerta válido' })
  @IsNotEmpty({ message: 'tipoAlerta no debe estar vacío' })
  tipoAlerta: TipoAlerta;

  @ApiProperty({ example: 'Estable, sin lesiones graves' })
  @IsString({ message: 'estadoVictima debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'estadoVictima no debe estar vacío' })
  estadoVictima: string;

  @ApiProperty({ example: 'Juan Carlos Pérez López' })
  @IsString({ message: 'nombreAgresor debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'nombreAgresor no debe estar vacío' })
  nombreAgresor: string;

  @ApiProperty({ example: '12345678' })
  @IsString({ message: 'ciAgresor debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'ciAgresor no debe estar vacío' })
  ciAgresor: string;
}
