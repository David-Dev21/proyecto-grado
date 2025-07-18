import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { CreateAlertaDto } from './create-alerta.dto';
import { EstadoAlerta } from 'src/common/enums/alerta.enum';

export class UpdateAlertaDto extends PartialType(CreateAlertaDto) {
  @ApiProperty({ description: 'Estado de la alerta', enum: EstadoAlerta, required: false, example: EstadoAlerta.EN_CAMINO })
  @IsEnum(EstadoAlerta, { message: 'estado debe ser un valor válido del enum EstadoAlerta' })
  @IsOptional()
  estado?: EstadoAlerta;
}
