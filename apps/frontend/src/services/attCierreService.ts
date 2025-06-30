import { CierreAlertaBackend } from '@/modules/cierre-alertas/types/CierreAlerta';
import personalPolicial from '@/data/personalPolicial.json';

/**
 * Servicio para enviar cierres de caso al sistema ATT
 */
export class ATTCierreService {
  static async enviarCierre(cierre: CierreAlertaBackend): Promise<boolean> {
    try {
      // Buscar el funcionario en el archivo JSON
      const funcionario = personalPolicial.find((p) => p.uuid === cierre.id_funcionario);

      if (!funcionario) {
        throw new Error('No se encontró información del funcionario');
      }

      // Obtener el UUID de la alerta
      const alertaUUID = cierre.alerta?.uuid;
      if (!alertaUUID) {
        throw new Error('No se encontró el UUID de la alerta');
      }

      // Preparar datos para enviar según el formato requerido por ATT
      const datosCierre = {
        estado: 'FINALIZADO', // Estado final del caso
        fecha: cierre.fecha_hora,
        nombre: funcionario.nombre,
        grado: funcionario.grado,
        comentario: cierre.comentario,
      };

      // Obtener la URL base del ATT desde variables de entorno
      const attBaseUrl = process.env.NEXT_PUBLIC_ATT_API_URL || 'http://localhost:3000';
      const attToken = process.env.NEXT_PUBLIC_ATT_API_TOKEN || 'Bearer Token';
      const fullUrl = `${attBaseUrl}/api/caso/${alertaUUID}/cerrar`;

      // Log para ver los datos que se van a enviar
      console.log('Datos de cierre a enviar a ATT:', {
        url: fullUrl,
        datos: datosCierre,
        alertaUUID: alertaUUID,
        // tipoCierre: cierre.tipo_alerta
      });

      // Hacer POST al endpoint ATT para cerrar caso
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: attToken,
        },
        body: JSON.stringify(datosCierre),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Error al enviar cierre a ATT:', error);
      throw error;
    }
  }
}
