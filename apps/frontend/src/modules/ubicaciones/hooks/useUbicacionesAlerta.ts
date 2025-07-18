import { useState, useEffect } from 'react';
import { ubicacionAlertaService, UbicacionAlerta, ApiError } from '../services/ubicacionAlertaService';

export function useUbicacionesAlerta(idAlerta: string) {
  const [ubicaciones, setUbicaciones] = useState<UbicacionAlerta[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUbicaciones = async () => {
    try {
      setLoading(true);
      setError(null);
      const ubicacionesData = await ubicacionAlertaService.getByAlertaId(idAlerta);
      setUbicaciones(ubicacionesData);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(`Error ${err.status}: ${err.message}`);
      } else {
        setError('Error inesperado al cargar las ubicaciones');
      }
      console.error('Error al obtener ubicaciones de alerta:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const idAlertaStr = String(idAlerta ?? '');
    if (idAlertaStr.trim() !== '') {
      fetchUbicaciones();
    } else {
      setLoading(false);
      setUbicaciones([]);
    }
  }, [idAlerta]);

  const refetch = () => {
    fetchUbicaciones();
  };

  return {
    ubicaciones,
    loading,
    error,
    refetch,
  };
}
