const API_BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new ApiError(`Error ${response.status}: ${response.statusText}`, response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Error de red o conexión
    throw new ApiError('Error de conexión con el servidor', 0);
  }
}

export interface UbicacionAlerta {
  id: string;
  id_alerta: string;
  latitud: number;
  longitud: number;
  fecha_hora: string;
  created_at: string;
  updated_at: string;
}

export const ubicacionAlertaService = {
  /**
   * Obtiene todas las ubicaciones de una alerta específica
   */
  getByAlertaId: (idAlerta: string) => fetchApi<UbicacionAlerta[]>(`/ubicacion-alertas/alerta/${idAlerta}`),
};
