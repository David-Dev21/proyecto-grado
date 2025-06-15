import { PartialType } from '@nestjs/swagger';
import { CreateUbicacionAlertaDto } from './create-ubicacion_alerta.dto';

export class UpdateUbicacionAlertaDto extends PartialType(CreateUbicacionAlertaDto) {}
