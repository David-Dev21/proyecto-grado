import { Point } from 'geojson';

export class CreateUbicacionAlertaDto {
  id_alerta: number;
  fecha_hora: Date;
  ubicacion: Point;
  direccion?: string;
}
