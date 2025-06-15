import { Injectable } from '@nestjs/common';
import { CreateUbicacionAlertaDto } from './dto/create-ubicacion_alerta.dto';

@Injectable()
export class UbicacionAlertasService {
  create(createUbicacionAlertaDto: CreateUbicacionAlertaDto) {
    return 'This action adds a new ubicacionAlerta';
  }

  findAll() {
    return `This action returns all ubicacionAlertas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ubicacionAlerta`;
  }
}
