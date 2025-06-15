import { PartialType, ApiProperty, OmitType } from '@nestjs/swagger';
import { IsOptional, IsArray, ValidateNested, IsBoolean, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAtencionDto } from './create-atencion.dto';

class ActualizarFuncionarioDto {
  @ApiProperty({ 
    required: false
  })
  @IsString({ message: 'id_funcionario debe ser una cadena de texto' })
  @IsOptional()
  id_funcionario?: string;

  @ApiProperty({ 
    required: false
  })
  @IsBoolean({ message: 'encargado debe ser un valor booleano' })
  @IsOptional()
  encargado?: boolean;
}

export class UpdateAtencionDto extends PartialType(OmitType(CreateAtencionDto, ['funcionarios'] as const)) {
  @ApiProperty({ 
    type: [ActualizarFuncionarioDto],
    required: false
  })
  @IsArray({ message: 'funcionarios debe ser un arreglo' })
  @ValidateNested({ each: true })
  @Type(() => ActualizarFuncionarioDto)
  @IsOptional()
  funcionarios?: ActualizarFuncionarioDto[];
}
