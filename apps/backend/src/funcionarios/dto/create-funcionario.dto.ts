import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFuncionarioDto {
  @ApiProperty({
    example: 'Coronel',
    description: 'Grado del funcionario policial',
  })
  @IsString({ message: 'grado debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'grado no debe estar vacío' })
  grado: string;

  @ApiProperty({
    example: 'Juan Carlos',
    description: 'Nombres del funcionario',
  })
  @IsString({ message: 'nombres debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'nombres no debe estar vacío' })
  nombres: string;

  @ApiProperty({
    example: 'Pérez',
    description: 'Apellido paterno del funcionario',
  })
  @IsString({ message: 'apPaterno debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'apPaterno no debe estar vacío' })
  apPaterno: string;

  @ApiProperty({
    example: 'López',
    description: 'Apellido materno del funcionario',
  })
  @IsString({ message: 'apMaterno debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'apMaterno no debe estar vacío' })
  apMaterno: string;
}
