import { Injectable, Logger } from '@nestjs/common';
import { ServicioSistemaExterno, DatosRuta } from '../interfaces/att-ruta.interface';

@Injectable()
export class ServicioSistemaExternoAtt implements ServicioSistemaExterno {
  private readonly logger = new Logger(ServicioSistemaExternoAtt.name);
  private readonly urlBase = process.env.ATT_BASE_URL || 'https://test.att.gob.bo/acompaname/index.php';
  private readonly tokenAuth = process.env.ATT_AUTH_TOKEN || 'Bearer Token';

  async obtenerRuta(uuidAlerta: string): Promise<DatosRuta[] | null> {
    try {
      this.logger.log(`Obteniendo ruta para alerta: ${uuidAlerta}`);

      const urlServicio = `${this.urlBase}/api/caso/${uuidAlerta}/ruta`;
      const authHeader = this.tokenAuth.startsWith('JWT ') ? this.tokenAuth : `JWT ${this.tokenAuth}`;

      const respuesta = await fetch(urlServicio, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
        },
      });

      if (!respuesta.ok) {
        throw new Error(`Error del servicio externo: ${respuesta.status} - ${respuesta.statusText}`);
      }

      const responseData = await respuesta.json();

      // Verificar que la respuesta tenga la estructura esperada
      if (
        !responseData.finalizado ||
        !responseData.datos ||
        !Array.isArray(responseData.datos) ||
        responseData.datos.length === 0
      ) {
        this.logger.warn(`Respuesta de ATT no contiene datos válidos para alerta ${uuidAlerta}`);
        return null;
      }

      // Transformar todos los elementos del array al formato esperado por la interface DatosRuta
      const datosRuta: DatosRuta[] = responseData.datos.map((dato: any) => ({
        latitud: dato.latitud,
        longitud: dato.longitud,
        fecha: dato.fecha,
      }));

      this.logger.log(`${datosRuta.length} ubicaciones obtenidas para alerta ${uuidAlerta}`);
      return datosRuta;
    } catch (error) {
      this.logger.error(`Error al obtener ruta para alerta ${uuidAlerta}:`, error);
      return null;
    }
  }
}
