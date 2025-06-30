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
  @IsString({ message: 'ap_paterno debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'ap_paterno no debe estar vacío' })
  ap_paterno: string;

  @ApiProperty({
    example: 'López',
    description: 'Apellido materno del funcionario',
  })
  @IsString({ message: 'ap_materno debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'ap_materno no debe estar vacío' })
  ap_materno: string;
}
