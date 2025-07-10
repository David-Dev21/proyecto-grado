import { AlertaBackend } from '../types/Alerta';

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

export const alertasService = {
  /**
   * Obtiene todas las alertas de la base de datos
   */
  getAll: () => fetchApi<AlertaBackend[]>('/alertas'),
  /**
   * Obtiene una alerta específica por UUID
   */
  getById: (uuid: string) => fetchApi<AlertaBackend>(`/alertas/${uuid}`),
  /**
   * Crea una nueva alerta
   */
  create: (data: any) =>
    fetchApi<AlertaBackend>('/alertas', {
      method: 'POST',
      headers: {
        api_key_gateway: 'mi_clave_secreta_123',
      },
      body: JSON.stringify(data),
    }),

  /**
   * Actualiza una alerta existente
   */
  update: (uuid: string, data: any) =>
    fetchApi<AlertaBackend>(`/alertas/${uuid}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),

  /**
   * Elimina una alerta (soft delete)
   */
  delete: (uuid: string) =>
    fetchApi<any>(`/alertas/${uuid}`, {
      method: 'DELETE',
    }),
};
