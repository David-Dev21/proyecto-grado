import { Point } from 'geojson';

export class CreateUbicacionFuncionarioDto {
  id_atencion: number;
  fecha_hora: Date;
  ubicacion: Point;
}
