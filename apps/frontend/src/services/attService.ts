import { EventoBackend } from '@/modules/eventos/types/Evento';
import personalPolicial from '@/data/personalPolicial.json';

/**
 * Servicio para enviar eventos al sistema ATT
 */
export class ATTService {
  static async enviarEvento(evento: EventoBackend): Promise<boolean> {
    try {
      // Buscar el funcionario en el archivo JSON
      const funcionario = personalPolicial.find((p) => p.uuid === evento.id_funcionario);

      if (!funcionario) {
        throw new Error('No se encontró información del funcionario');
      }

      // Obtener el UUID de la alerta
      const alertaUUID = evento.alerta?.uuid;
      if (!alertaUUID) {
        throw new Error('No se encontró el UUID de la alerta');
      }

      // Preparar datos para enviar
      const datosATT = {
        nombre: funcionario.nombre,
        grado: funcionario.grado,
        comentario: evento.comentario,
        fecha: evento.fecha_hora,
      };

      // Obtener la URL base del ATT desde variables de entorno
      const attBaseUrl = process.env.NEXT_PUBLIC_ATT_API_URL || 'http://localhost:3000';
      const attToken = process.env.NEXT_PUBLIC_ATT_API_TOKEN || 'Bearer Token';
      const fullUrl = `${attBaseUrl}/api/caso/${alertaUUID}/eventos`;

      // Log para ver los datos que se van a enviar
      console.log('Datos a enviar a ATT:', {
        url: fullUrl,
        datos: datosATT,
        alertaUUID: alertaUUID,
      });

      // Hacer POST al endpoint ATT
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: attToken,
        },
        body: JSON.stringify(datosATT),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Error al enviar evento a ATT:', error);
      throw error;
    }
  }
}
