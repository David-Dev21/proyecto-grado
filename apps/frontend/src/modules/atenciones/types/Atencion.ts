// Importar tipos de Prisma desde el paquete compartido
import type { Atencion as PrismaAtencion, Alerta as PrismaAlerta } from '@alertas/types';

// Tipo para crear una nueva atención (coincide con el DTO del backend)
export interface CreateAtencionDto {
  id_alerta: number;
  usuario_despachador: string;
  id_vehiculo: string;
  sigla_radio?: string;
  funcionarios: Array<{
    id_funcionario?: string;
    encargado: boolean;
  }>;
}

// Tipos backend que convierten BigInt a string para la API
export interface AtencionFuncionarioBackend {
  id: string;
  id_atencion: string;
  id_funcionario?: string;
  encargado: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface UbicacionFuncionarioBackend {
  id: string;
  id_atencion: string;
  fecha_hora: string;
  ubicacion?: {
    latitud: number;
    longitud: number;
  };
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface AlertaResumen extends Omit<PrismaAlerta, 'id' | 'id_persona'> {
  id: string;
  id_persona: string;
  persona?: {
    nombres: string;
    ap_paterno: string;
    ap_materno: string;
    ci: string;
  };
}

export interface AtencionBackend extends Omit<PrismaAtencion, 'id' | 'id_alerta' | 'usuario_despachador'> {
  id: string;
  id_alerta: string;
  usuario_despachador: string;
  alerta?: AlertaResumen;
  atencion_funcionario?: AtencionFuncionarioBackend[];
  ubicaciones_funcionario?: UbicacionFuncionarioBackend[];
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

// Función auxiliar para obtener el estado de una atención
export function getAtencionStatus(atencion: AtencionBackend): 'activa' | 'completada' | 'pendiente' {
  if (atencion.alerta?.estado === 'ATENDIDO') {
    return 'completada';
  }
  if (atencion.alerta?.estado === 'EN_CAMINO') {
    return 'activa';
  }
  return 'pendiente';
}

// Función auxiliar para calcular tiempo transcurrido desde la atención
export function getTimeElapsed(fechaHora: string): string {
  const now = new Date();
  const atencionDate = new Date(fechaHora);
  const diffMs = now.getTime() - atencionDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  if (diffHours > 0) {
    return `${diffHours}h ${diffMinutes}m`;
  } else {
    return `${diffMinutes}m`;
  }
}
