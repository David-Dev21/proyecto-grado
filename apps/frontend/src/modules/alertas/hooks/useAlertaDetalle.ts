import { useState, useEffect } from "react";
import { alertasService, ApiError } from "../services/alertaService";
import { AlertaBackend } from "../types/Alerta";


export function useAlertaDetalle(uuid: string) {
  const [alerta, setAlerta] = useState<AlertaBackend | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlerta = async () => {
    try {
      setLoading(true);
      setError(null);
      const alertaData = await alertasService.getById(uuid);
      setAlerta(alertaData);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(`Error ${err.status}: ${err.message}`);
      } else {
        setError("Error inesperado al cargar la alerta");
      }
      console.error("Error al obtener alerta:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (uuid) {
      fetchAlerta();
    }
  }, [uuid]);

  const refetch = () => {
    fetchAlerta();
  };

  return {
    alerta,
    loading,
    error,
    refetch,
  };
}
