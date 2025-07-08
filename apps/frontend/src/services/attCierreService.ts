import { CierreAlertaBackend } from '@/modules/cierre-alertas/types/CierreAlerta';
import { funcionariosService } from '@/modules/funcionarios/services/funcionarioService';

/**
 * Servicio para enviar cierres de caso al sistema ATT
 */
export class ATTCierreService {
  static async enviarCierre(cierre: CierreAlertaBackend): Promise<boolean> {
    try {
      // Buscar el funcionario en el endpoint de funcionarios
      const funcionario = await funcionariosService.getById(cierre.id_funcionario);

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
        nombre: `${funcionario.nombres} ${funcionario.ap_paterno}`,
        grado: funcionario.grado,
        comentario: cierre.comentario,
      };

      // Obtener la URL base del ATT desde variables de entorno
      const attBaseUrl = process.env.NEXT_PUBLIC_ATT_API_URL || 'https://test.att.gob.bo/acompaname/index.php';
      const attToken = process.env.NEXT_PUBLIC_ATT_API_TOKEN || '';
      const fullUrl = `${attBaseUrl}/api/caso/${alertaUUID}/cerrar`;

      // Asegurar que el token tenga el formato JWT correcto
      const authHeader = attToken.startsWith('JWT ') ? attToken : `JWT ${attToken}`;

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
          Authorization: authHeader,
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
