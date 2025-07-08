import { useState, useEffect } from 'react';
import { FuncionarioBackend } from '../../funcionarios/types/Funcionario';
import { funcionariosService } from '../../funcionarios/services/funcionarioService';
import { AtencionFuncionarioBackend } from '../types/Atencion';

interface FuncionarioConAtencion {
  funcionario: FuncionarioBackend;
  atencionFuncionario: AtencionFuncionarioBackend;
}

export function useFuncionariosDeAtencion(atencionFuncionarios: AtencionFuncionarioBackend[] | undefined) {
  const [funcionarios, setFuncionarios] = useState<FuncionarioConAtencion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!atencionFuncionarios || atencionFuncionarios.length === 0) {
      setFuncionarios([]);
      return;
    }

    const fetchFuncionarios = async () => {
      try {
        setLoading(true);
        setError(null);

        // Obtener todos los funcionarios del backend
        const todosFuncionarios = await funcionariosService.getAll();

        // Filtrar y mapear los funcionarios que están en la atención
        const funcionariosConAtencion: FuncionarioConAtencion[] = atencionFuncionarios
          .map((atencionFunc) => {
            const funcionario = todosFuncionarios.find((f) => f.id === atencionFunc.id_funcionario);
            if (funcionario) {
              return {
                funcionario,
                atencionFuncionario: atencionFunc,
              };
            }
            return null;
          })
          .filter((item): item is FuncionarioConAtencion => item !== null);

        setFuncionarios(funcionariosConAtencion);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al obtener los funcionarios');
        setFuncionarios([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFuncionarios();
  }, [atencionFuncionarios]);

  return {
    funcionarios,
    loading,
    error,
  };
}
