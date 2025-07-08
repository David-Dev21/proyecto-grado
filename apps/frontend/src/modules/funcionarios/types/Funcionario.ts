export interface FuncionarioBackend {
  id: string;
  grado: string;
  nombres: string;
  ap_paterno: string;
  ap_materno: string;
  ci: string;
  telefono?: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface CreateFuncionarioDto {
  grado: string;
  nombres: string;
  ap_paterno: string;
  ap_materno: string;
}

// Función auxiliar para formatear el nombre completo del funcionario
export function formatFuncionarioName(funcionario: FuncionarioBackend): string {
  return `${funcionario.grado} ${funcionario.nombres} ${funcionario.ap_paterno}`;
}

// Función auxiliar para formatear fecha y hora
export function formatDateTime(dateTime: string): string {
  const date = new Date(dateTime);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}
