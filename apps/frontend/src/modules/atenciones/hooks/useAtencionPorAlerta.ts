import { useState, useEffect } from 'react';
import { atencionesService } from '../services/atencionService';
import { AtencionBackend } from '../types/Atencion';

// Hook que usa ID de alerta
export function useAtencionPorAlertaId(alertaId: number, estadoAlerta?: string) {
  const [atencion, setAtencion] = useState<AtencionBackend | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAtencion = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await atencionesService.getByAlertaId(alertaId);
      setAtencion(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      // No loggeamos errores 404 que son esperados
      if (!(err instanceof Error && err.message.includes('404'))) {
        console.error('Error al obtener atención:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // No hacemos la petición si:
    // 1. No hay ID de alerta o es inválido
    if (!alertaId || alertaId <= 0) {
      setAtencion(null);
      setLoading(false);
      setError(null);
      return;
    }

    // 2. La alerta está en estado EN_PELIGRO (muy probable que no tenga atención aún)
    if (estadoAlerta === 'EN_PELIGRO') {
      setAtencion(null);
      setLoading(false);
      setError(null);
      return;
    }

    // Solo hacer la petición si el estado sugiere que puede tener atención asignada
    fetchAtencion();
  }, [alertaId, estadoAlerta]);

  return {
    atencion,
    loading,
    error,
    refetch: fetchAtencion,
  };
}
