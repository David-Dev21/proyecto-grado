import { Shield } from 'lucide-react';
import { useFuncionario } from '@/modules/funcionarios/hooks/useFuncionario';

interface FuncionarioDisplayProps {
  funcionarioId: string;
}

export function FuncionarioDisplay({ funcionarioId }: FuncionarioDisplayProps) {
  const { funcionario, isLoading } = useFuncionario(funcionarioId);

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <Shield className="h-4 w-4 text-muted-foreground" />
        <div>
          <div className="text-xs text-muted-foreground">Cargando...</div>
        </div>
      </div>
    );
  }

  if (!funcionario) {
    return (
      <div className="flex items-center space-x-2">
        <Shield className="h-4 w-4 text-muted-foreground" />
        <div>
          <div className="font-medium text-xs">{funcionarioId}</div>
          <div className="text-xs text-muted-foreground">No encontrado</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Shield className="h-4 w-4 text-muted-foreground" />
      <div>
        <div className="font-medium">
          {funcionario.grado} {funcionario.nombres} {funcionario.ap_paterno}
        </div>
      </div>
    </div>
  );
}
