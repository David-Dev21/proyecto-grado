import { Injectable, Logger } from '@nestjs/common';
import { ServicioSistemaExterno, DatosRuta } from '../interfaces/att-ruta.interface';

@Injectable()
export class ServicioSistemaExternoAtt implements ServicioSistemaExterno {
  private readonly logger = new Logger(ServicioSistemaExternoAtt.name);
  private readonly urlBase = 'ws.acompaniame';
  private readonly tokenAuth = 'Bearer Token'; // TODO: Obtener de configuración

  async obtenerRuta(uuidAlerta: string): Promise<DatosRuta | null> {
    try {
      this.logger.log(`Obteniendo ruta para alerta: ${uuidAlerta}`);

      const urlServicio = `http://${this.urlBase}/api/caso/${uuidAlerta}/ruta`;

      const respuesta = await fetch(urlServicio, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.tokenAuth,
        },
      });

      if (!respuesta.ok) {
        throw new Error(`Error del servicio externo: ${respuesta.status} - ${respuesta.statusText}`);
      }

      const datosRuta = await respuesta.json();
      this.logger.log(`Ruta obtenida exitosamente para alerta ${uuidAlerta}:`, datosRuta);

      return datosRuta;
    } catch (error) {
      this.logger.error(`Error al obtener ruta para alerta ${uuidAlerta}:`, error);
      return null;
    }
  }
}
