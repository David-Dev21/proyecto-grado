// Importar tipos de Prisma desde el paquete compartido
import type { CierreAlerta as PrismaCierreAlerta, Alerta as PrismaAlerta, TipoAlertaType } from '@alertas/types';
import { TipoAlerta } from '@alertas/types';

// Re-exportar enums
export { TipoAlerta };
export type { TipoAlertaType };

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

export interface CierreAlertaBackend extends Omit<PrismaCierreAlerta, 'id' | 'id_alerta'> {
  id: string;
  id_alerta: string;
  alerta?: AlertaResumen;
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

// Función auxiliar para obtener la etiqueta del tipo de alerta
export function getTipoAlertaLabel(tipo: TipoAlertaType): string {
  const labels: Record<TipoAlertaType, string> = {
    EMERGENCIA: 'Emergencia',
    INCIDENTE: 'Incidente',
    MANTENIMIENTO: 'Mantenimiento',
    INFORMATIVO: 'Informativo',
    ROBO: 'Robo',
    VIOLENCIA: 'Violencia',
    ACCIDENTE: 'Accidente',
    OTRO: 'Otro',
  };
  return labels[tipo] || tipo;
}

// Función auxiliar para obtener el color del badge según el tipo de alerta
export function getTipoAlertaVariant(tipo: TipoAlertaType): 'default' | 'secondary' | 'destructive' | 'outline' {
  switch (tipo) {
    case TipoAlerta.EMERGENCIA:
    case TipoAlerta.VIOLENCIA:
      return 'destructive';
    case TipoAlerta.ROBO:
    case TipoAlerta.ACCIDENTE:
      return 'default';
    case TipoAlerta.INCIDENTE:
      return 'outline';
    case TipoAlerta.MANTENIMIENTO:
    case TipoAlerta.INFORMATIVO:
      return 'secondary';
    default:
      return 'secondary';
  }
}

// Función auxiliar para calcular tiempo transcurrido desde el cierre
export function getTimeElapsed(fechaHora: string): string {
  const now = new Date();
  const cierreDate = new Date(fechaHora);
  const diffMs = now.getTime() - cierreDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  if (diffHours > 0) {
    return `${diffHours}h ${diffMinutes}m`;
  } else {
    return `${diffMinutes}m`;
  }
}
