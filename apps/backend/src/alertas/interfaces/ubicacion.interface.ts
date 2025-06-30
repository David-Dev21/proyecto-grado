export interface GeolocationService {
  getLocation(alertUuid: string): Promise<LocationData>;
}

export interface LocationData {
  latitud: number;
  longitud: number;
  direccion?: string;
  precision?: number;
  timestamp: string;
}
