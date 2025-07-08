import { FuncionarioBackend, CreateFuncionarioDto } from '../types/Funcionario';

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

export const funcionariosService = {
  /**
   * Obtiene todos los funcionarios de la base de datos
   */
  async getAll(): Promise<FuncionarioBackend[]> {
    return fetchApi<FuncionarioBackend[]>('/funcionarios');
  },

  /**
   * Obtiene un funcionario específico por ID
   */
  async getById(id: string): Promise<FuncionarioBackend> {
    return fetchApi<FuncionarioBackend>(`/funcionarios/${id}`);
  },

  /**
   * Crea un nuevo funcionario
   */
  async create(data: CreateFuncionarioDto): Promise<{ message: string; data: FuncionarioBackend }> {
    return fetchApi<{ message: string; data: FuncionarioBackend }>('/funcionarios', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Actualiza un funcionario existente
   */
  async update(id: string, data: Partial<CreateFuncionarioDto>): Promise<{ message: string; data: FuncionarioBackend }> {
    return fetchApi<{ message: string; data: FuncionarioBackend }>(`/funcionarios/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  /**
   * Elimina un funcionario (soft delete)
   */
  async delete(id: string): Promise<{ message: string }> {
    return fetchApi<{ message: string }>(`/funcionarios/${id}`, {
      method: 'DELETE',
    });
  },

  /**
   * Busca funcionarios por grado
   */
  async getByGrado(grado: string): Promise<FuncionarioBackend[]> {
    const allFuncionarios = await this.getAll();
    return allFuncionarios.filter((funcionario) => funcionario.grado.toLowerCase().includes(grado.toLowerCase()));
  },

  /**
   * Busca funcionarios por nombre
   */
  async getByNombre(nombre: string): Promise<FuncionarioBackend[]> {
    const allFuncionarios = await this.getAll();
    return allFuncionarios.filter((funcionario) =>
      `${funcionario.nombres} ${funcionario.ap_paterno} ${funcionario.ap_materno}`.toLowerCase().includes(nombre.toLowerCase()),
    );
  },
};
