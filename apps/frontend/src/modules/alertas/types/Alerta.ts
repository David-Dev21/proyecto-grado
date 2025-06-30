// Importar tipos de Prisma desde el paquete compartido
import type { EstadoAlerta, TipoAlerta, Persona as PrismaPersona, Alerta as PrismaAlerta, ContactoRef as PrismaContactoRef } from '@alertas/types';

// Re-exportar los enums para uso local
export { EstadoAlerta, TipoAlerta };

// Tipos backend que convierten BigInt a string para la API
export interface PersonaBackend extends Omit<PrismaPersona, 'id'> {
  id: string; // BigInt a string
  contactos_ref?: ContactoRefBackend[];
  nombre: string; // El backend envía 'nombre', no 'nombres'
}

export interface ContactoRefBackend extends Omit<PrismaContactoRef, 'id' | 'id_persona'> {
  id: string;
  id_persona: string;
}

export interface AlertaBackend extends Omit<PrismaAlerta, 'id' | 'created_at' | 'updated_at' | 'deleted_at' | 'fecha_hora'> {
  id: string; // BigInt a string
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  fecha_hora: string;
  persona?: PersonaBackend;
  ubicacion?: {
    latitud: number;
    longitud: number;
  };
}

// Tipo específico para los datos que llegan del WebSocket
export interface AlertaWebSocket {
  uuid: string;
  fecha_hora: string;
  estado: string;
  persona: {
    nombres: string;
    ci: string;
    celular: string;
  };
}

// Función auxiliar para calcular tiempo transcurrido
function calculateTimeElapsed(fechaHora: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - fechaHora.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (diffHours > 0) {
    return `${diffHours}h ${diffMinutes}m`;
  } else {
    return `${diffMinutes}m`;
  }
}
