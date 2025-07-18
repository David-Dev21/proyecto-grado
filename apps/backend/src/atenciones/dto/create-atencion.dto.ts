import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, ValidateNested, IsBoolean, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class FuncionarioAsignadoDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: false,
  })
  @IsString({ message: 'idFuncionario debe ser una cadena de texto' })
  @IsOptional()
  idFuncionario?: string;

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
  @IsNumber({}, { message: 'idAlerta debe ser un número' })
  @IsNotEmpty({ message: 'idAlerta no debe estar vacío' })
  idAlerta: number;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString({ message: 'usuarioDespachador debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'usuarioDespachador no debe estar vacío' })
  usuarioDespachador: string;

  @ApiProperty({
    example: 'VEH-001',
  })
  @IsString({ message: 'codVehiculo debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'codVehiculo no debe estar vacío' })
  codVehiculo: string;

  @ApiProperty({
    example: 'RADIO-01',
    required: false,
  })
  @IsString({ message: 'siglaRadio debe ser una cadena de texto' })
  @IsOptional()
  siglaRadio?: string;

  @ApiProperty({
    type: [FuncionarioAsignadoDto],
  })
  @IsArray({ message: 'funcionarios debe ser un arreglo' })
  @ValidateNested({ each: true })
  @Type(() => FuncionarioAsignadoDto)
  @IsNotEmpty({ message: 'funcionarios no debe estar vacío' })
  funcionarios: FuncionarioAsignadoDto[];
}
