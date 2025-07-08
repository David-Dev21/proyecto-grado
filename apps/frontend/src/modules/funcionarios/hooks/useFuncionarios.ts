import { useState, useEffect, useCallback } from 'react';
import { funcionariosService } from '../services/funcionarioService';
import { FuncionarioBackend, CreateFuncionarioDto } from '../types/Funcionario';

export function useFuncionarios() {
  const [funcionarios, setFuncionarios] = useState<FuncionarioBackend[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchFuncionarios = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await funcionariosService.getAll();
      setFuncionarios(data);
    } catch (error: any) {
      console.error('Error al cargar funcionarios:', error);
      setError(error.message || 'Error al cargar funcionarios');
      setFuncionarios([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createFuncionario = useCallback(
    async (data: CreateFuncionarioDto) => {
      try {
        const response = await funcionariosService.create(data);
        // Refrescar la lista después de crear
        await fetchFuncionarios();
        return response;
      } catch (error: any) {
        console.error('Error al crear funcionario:', error);
        throw error;
      }
    },
    [fetchFuncionarios],
  );

  const updateFuncionario = useCallback(
    async (id: string, data: Partial<CreateFuncionarioDto>) => {
      try {
        const response = await funcionariosService.update(id, data);
        // Refrescar la lista después de actualizar
        await fetchFuncionarios();
        return response;
      } catch (error: any) {
        console.error('Error al actualizar funcionario:', error);
        throw error;
      }
    },
    [fetchFuncionarios],
  );

  const deleteFuncionario = useCallback(
    async (id: string) => {
      try {
        const response = await funcionariosService.delete(id);
        // Refrescar la lista después de eliminar
        await fetchFuncionarios();
        return response;
      } catch (error: any) {
        console.error('Error al eliminar funcionario:', error);
        throw error;
      }
    },
    [fetchFuncionarios],
  );

  const getFuncionarioById = useCallback(async (id: string) => {
    try {
      return await funcionariosService.getById(id);
    } catch (error: any) {
      console.error('Error al obtener funcionario:', error);
      throw error;
    }
  }, []);

  const searchByNombre = useCallback(
    (nombre: string) => {
      return funcionarios.filter((funcionario) =>
        `${funcionario.nombres} ${funcionario.ap_paterno} ${funcionario.ap_materno}`.toLowerCase().includes(nombre.toLowerCase()),
      );
    },
    [funcionarios],
  );

  const searchByGrado = useCallback(
    (grado: string) => {
      return funcionarios.filter((funcionario) => funcionario.grado.toLowerCase().includes(grado.toLowerCase()));
    },
    [funcionarios],
  );

  useEffect(() => {
    fetchFuncionarios();
  }, [fetchFuncionarios]);

  return {
    funcionarios,
    isLoading,
    error,
    fetchFuncionarios,
    createFuncionario,
    updateFuncionario,
    deleteFuncionario,
    getFuncionarioById,
    searchByNombre,
    searchByGrado,
  };
}
