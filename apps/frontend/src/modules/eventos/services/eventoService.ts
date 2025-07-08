import { EventoBackend } from '../types/Evento';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Interface que coincide exactamente con el DTO del backend
export interface CreateEventoDto {
  id_alerta: number;
  id_funcionario: string;
  id_seguimiento?: string;
  fecha_hora: string;
  comentario: string;
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

export const eventosService = {
  /**
   * Obtiene todos los eventos de la base de datos
   */
  async getAll(): Promise<EventoBackend[]> {
    return fetchApi<EventoBackend[]>('/eventos');
  },

  /**
   * Obtiene un evento específico por ID
   */
  async getById(id: string): Promise<EventoBackend> {
    return fetchApi<EventoBackend>(`/eventos/${id}`);
  },

  /**
   * Crea un nuevo evento
   */
  async create(data: CreateEventoDto): Promise<{ message: string }> {
    return fetchApi<{ message: string }>('/eventos', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Actualiza un evento existente
   */
  async update(id: string, data: Partial<EventoBackend>): Promise<{ message: string }> {
    return fetchApi<{ message: string }>(`/eventos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  /**
   * Elimina un evento
   */
  async delete(id: string): Promise<{ message: string }> {
    return fetchApi<{ message: string }>(`/eventos/${id}`, {
      method: 'DELETE',
    });
  },

  /**
   * Obtiene eventos por alerta
   */
  async getByAlerta(alertaId: string): Promise<EventoBackend[]> {
    const allEventos = await this.getAll();
    return allEventos.filter((evento) => evento.id_alerta === alertaId);
  },

  /**
   * Obtiene eventos por funcionario
   */
  async getByFuncionario(funcionarioId: string): Promise<EventoBackend[]> {
    const allEventos = await this.getAll();
    return allEventos.filter((evento) => evento.id_funcionario === funcionarioId);
  },

  /**
   * Obtiene eventos recientes (últimas 24 horas)
   */
  async getRecientes(): Promise<EventoBackend[]> {
    const allEventos = await this.getAll();
    const now = new Date();
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    return allEventos.filter((evento) => {
      const eventoDate = new Date(evento.fecha_hora);
      return eventoDate >= yesterday;
    });
  },
};
