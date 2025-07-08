import { EventoBackend } from '@/modules/eventos/types/Evento';
import { funcionariosService } from '@/modules/funcionarios/services/funcionarioService';

/**
 * Servicio para enviar eventos al sistema ATT
 */
export class ATTService {
  static async enviarEvento(evento: EventoBackend): Promise<boolean> {
    try {
      // Buscar el funcionario en el endpoint de funcionarios
      const funcionario = await funcionariosService.getById(evento.id_funcionario);

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
        nombre: `${funcionario.nombres} ${funcionario.ap_paterno}`,
        grado: funcionario.grado,
        comentario: evento.comentario,
        fecha: evento.fecha_hora,
      };

      // Obtener la URL base del ATT desde variables de entorno
      const attBaseUrl = process.env.NEXT_PUBLIC_ATT_API_URL || 'https://test.att.gob.bo/acompaname/index.php';
      const attToken = process.env.NEXT_PUBLIC_ATT_API_TOKEN || '';
      const fullUrl = `${attBaseUrl}/api/caso/${alertaUUID}/eventos`;

      // Asegurar que el token tenga el formato JWT correcto
      const authHeader = attToken.startsWith('JWT ') ? attToken : `JWT ${attToken}`;

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
          Authorization: authHeader,
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
