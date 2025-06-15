import { IsNotEmpty, IsString, IsDateString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class UbicacionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'La latitud es requerida' })
  latitud: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'La longitud es requerida' })
  longitud: number;
}

export class CreateUbicacionAlertaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El ID de alerta es requerido' })
  @IsString({ message: 'El ID de alerta debe ser una cadena' })
  id_alerta: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'La fecha y hora es requerida' })
  @IsDateString({}, { message: 'La fecha y hora debe ser una fecha válida' })
  fecha_hora: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'La ubicación es requerida' })
  @ValidateNested({ message: 'La ubicación debe ser válida' })
  @Type(() => UbicacionDto)
  ubicacion: UbicacionDto;
}
