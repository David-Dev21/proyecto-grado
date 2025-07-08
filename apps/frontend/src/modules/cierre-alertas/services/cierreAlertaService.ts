import { CierreAlertaBackend } from '../types/CierreAlerta';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Interface que coincide exactamente con el DTO del backend
export interface CreateCierreAlertaDto {
  id_alerta: number;
  id_funcionario: string;
  fecha_hora: string;
  comentario: string;
  tipo_alerta: 'EMERGENCIA' | 'INCIDENTE' | 'MANTENIMIENTO' | 'INFORMATIVO' | 'ROBO' | 'VIOLENCIA' | 'ACCIDENTE' | 'OTRO';
  estado_victima: string;
  nombre_agresor: string;
  ci_agresor: string;
}

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

export const cierreAlertasService = {
  /**
   * Obtiene todos los cierres de alerta de la base de datos
   */
  async getAll(): Promise<CierreAlertaBackend[]> {
    return fetchApi<CierreAlertaBackend[]>('/cierre-alertas');
  },

  /**
   * Obtiene un cierre de alerta específico por ID
   */
  async getById(id: string): Promise<CierreAlertaBackend> {
    return fetchApi<CierreAlertaBackend>(`/cierre-alertas/${id}`);
  },

  /**
   * Crea un nuevo cierre de alerta
   */
  async create(data: CreateCierreAlertaDto): Promise<{ message: string }> {
    return fetchApi<{ message: string }>('/cierre-alertas', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Actualiza un cierre de alerta existente
   */
  async update(id: string, data: Partial<CierreAlertaBackend>): Promise<{ message: string }> {
    return fetchApi<{ message: string }>(`/cierre-alertas/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  /**
   * Elimina un cierre de alerta
   */
  async delete(id: string): Promise<{ message: string }> {
    return fetchApi<{ message: string }>(`/cierre-alertas/${id}`, {
      method: 'DELETE',
    });
  },

  /**
   * Obtiene cierres por tipo de alerta
   */
  async getByTipo(tipo: string): Promise<CierreAlertaBackend[]> {
    const allCierres = await this.getAll();
    return allCierres.filter((cierre) => cierre.tipo_alerta === tipo);
  },

  /**
   * Obtiene cierres por funcionario
   */
  async getByFuncionario(funcionarioId: string): Promise<CierreAlertaBackend[]> {
    const allCierres = await this.getAll();
    return allCierres.filter((cierre) => cierre.id_funcionario === funcionarioId);
  },
};
