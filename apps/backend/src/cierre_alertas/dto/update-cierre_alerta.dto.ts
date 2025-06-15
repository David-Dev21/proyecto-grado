import { PartialType } from '@nestjs/swagger';
import { CreateCierreAlertaDto } from './create-cierre_alerta.dto';

export class UpdateCierreAlertaDto extends PartialType(CreateCierreAlertaDto) {}
