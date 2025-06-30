import { AtencionBackend } from '../types/Atencion';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

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
      throw new ApiError(
        `Error ${response.status}: ${response.statusText}`,
        response.status
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Error de red o conexión
    throw new ApiError(
      'Error de conexión con el servidor',
      0
    );
  }
}

export const atencionesService = {
  /**
   * Obtiene todas las atenciones de la base de datos
   */
  async getAll(): Promise<AtencionBackend[]> {
    return fetchApi<AtencionBackend[]>('/atenciones');
  },

  /**
   * Obtiene todas las atenciones con número de caso de alerta
   */
  async getAllWithAlertas(): Promise<AtencionBackend[]> {
    return fetchApi<AtencionBackend[]>('/atenciones/con-alertas');
  },

  /**
   * Obtiene una atención específica por ID
   */
  async getById(id: string): Promise<AtencionBackend> {
    return fetchApi<AtencionBackend>(`/atenciones/${id}`);
  },

  /**
   * Crea una nueva atención
   */
  async create(data: Partial<AtencionBackend>): Promise<{ message: string }> {
    return fetchApi<{ message: string }>('/atenciones', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Actualiza una atención existente
   */
  async update(id: string, data: Partial<AtencionBackend>): Promise<{ message: string }> {
    return fetchApi<{ message: string }>(`/atenciones/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  /**
   * Elimina una atención
   */
  async delete(id: string): Promise<{ message: string }> {
    return fetchApi<{ message: string }>(`/atenciones/${id}`, {
      method: 'DELETE',
    });
  },

  /**
   * Obtiene atenciones por estado de alerta
   */
  async getByEstado(estado: 'activa' | 'completada' | 'pendiente'): Promise<AtencionBackend[]> {
    const allAtenciones = await this.getAll();
    return allAtenciones.filter(atencion => {
      if (estado === 'completada' && atencion.alerta?.estado === 'ATENDIDO') return true;
      if (estado === 'activa' && atencion.alerta?.estado === 'EN_CAMINO') return true;
      if (estado === 'pendiente' && atencion.alerta?.estado === 'EN_PELIGRO') return true;
      return false;
    });
  }
};
