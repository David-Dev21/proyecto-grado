export interface ServicioSistemaExterno {
  obtenerRuta(uuidAlerta: string): Promise<DatosRuta[] | null>;
}

export interface DatosRuta {
  latitud: string;
  longitud: string;
  fecha?: string;
  // ...otros campos si son necesarios...
}
