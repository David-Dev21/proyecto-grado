// Importar tipos de Prisma desde el paquete compartido
import type { Evento as PrismaEvento, Alerta as PrismaAlerta } from '@alertas/types';

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

export interface EventoBackend extends Omit<PrismaEvento, 'id' | 'id_alerta'> {
  id: string;
  id_alerta: string;
  alerta?: AlertaResumen;
  ubicacion?: {
    latitud: number;
    longitud: number;
  };
}

// Función auxiliar para formatear fecha y hora
export function formatDateTime(dateTime: string): string {
  const date = new Date(dateTime);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Función auxiliar para obtener el estado del evento basado en el seguimiento
export function getEventoStatus(evento: EventoBackend): 'completado' | 'en_progreso' | 'pendiente' {
  if (evento.id_seguimiento) {
    return 'completado';
  }
  if (evento.alerta?.estado === 'EN_CAMINO') {
    return 'en_progreso';
  }
  return 'pendiente';
}

// Función auxiliar para calcular tiempo transcurrido desde el evento
export function getTimeElapsed(fechaHora: string): string {
  const now = new Date();
  const eventDate = new Date(fechaHora);
  const diffMs = now.getTime() - eventDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (diffHours > 0) {
    return `${diffHours}h ${diffMinutes}m`;
  } else {
    return `${diffMinutes}m`;
  }
}
