import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, ValidateNested, IsBoolean, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class FuncionarioAsignadoDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: false,
  })
  @IsString({ message: 'id_funcionario debe ser una cadena de texto' })
  @IsOptional()
  id_funcionario?: string;

  @ApiProperty({
    example: true,
  })
  @IsBoolean({ message: 'encargado debe ser un valor booleano' })
  @IsNotEmpty({ message: 'encargado no debe estar vacío' })
  encargado: boolean;
}

export class CreateAtencionDto {
  @ApiProperty({
    example: 1,
  })
  @IsNumber({}, { message: 'id_alerta debe ser un número' })
  @IsNotEmpty({ message: 'id_alerta no debe estar vacío' })
  id_alerta: number;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString({ message: 'usuario_despachador debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'usuario_despachador no debe estar vacío' })
  usuario_despachador: string;

  @ApiProperty({
    example: 'VEH-001',
  })
  @IsString({ message: 'id_vehiculo debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'id_vehiculo no debe estar vacío' })
  id_vehiculo: string;

  @ApiProperty({
    example: 'RADIO-01',
    required: false,
  })
  @IsString({ message: 'sigla_radio debe ser una cadena de texto' })
  @IsOptional()
  sigla_radio?: string;

  @ApiProperty({
    type: [FuncionarioAsignadoDto],
  })
  @IsArray({ message: 'funcionarios debe ser un arreglo' })
  @ValidateNested({ each: true })
  @Type(() => FuncionarioAsignadoDto)
  @IsNotEmpty({ message: 'funcionarios no debe estar vacío' })
  funcionarios: FuncionarioAsignadoDto[];
}
