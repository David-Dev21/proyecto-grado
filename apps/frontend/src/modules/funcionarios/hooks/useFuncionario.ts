import { useState, useEffect } from 'react';
import { useFuncionarios } from './useFuncionarios';
import { FuncionarioBackend } from '../types/Funcionario';

export function useFuncionario(funcionarioId: string | undefined | null) {
  const { funcionarios } = useFuncionarios();
  const [funcionario, setFuncionario] = useState<FuncionarioBackend | null>(null);

  useEffect(() => {
    if (!funcionarioId || !funcionarios.length) {
      setFuncionario(null);
      return;
    }

    const found = funcionarios.find((f) => f.id === funcionarioId);
    setFuncionario(found || null);
  }, [funcionarioId, funcionarios]);

  return {
    funcionario,
    isLoading: !funcionarios.length,
    displayName: funcionario ? `${funcionario.grado || ''} ${funcionario.nombres} ${funcionario.ap_paterno}`.trim() : null,
    shortName: funcionario ? `${funcionario.grado || ''} ${funcionario.nombres}`.trim() : null,
  };
}
