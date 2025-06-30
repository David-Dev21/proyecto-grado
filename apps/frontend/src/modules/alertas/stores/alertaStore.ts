import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import io, { Socket } from 'socket.io-client';
import { AlertaWebSocket } from '../types/Alerta';

const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

interface AlertaStore {
  // State
  socket: Socket | null;
  isConnected: boolean;
  alertaActiva: AlertaWebSocket | null;
  alertasPendientes: AlertaWebSocket[];
  
  establecerConexion: (connected: boolean) => void;
  establecerAlertaActiva: (alerta: AlertaWebSocket | null) => void;
  agregarAlertaPendiente: (alerta: AlertaWebSocket) => void;
  removerAlertaPendiente: (uuid: string) => void;
  inicializarSocket: () => void;
  cerrarAlerta: (uuid: string, estado?: string) => Promise<boolean>;
  descartarAlerta: () => void;
  limpiarRecursos: () => void;
  limpiarAlertasAntiguas: (diasAntiguedad?: number) => void;
}

export const useAlertaStore = create<AlertaStore>()(
  persist(
    (set, get) => ({
      // Estado inicial
      socket: null,
      isConnected: false,
      alertaActiva: null,
      alertasPendientes: [],
      // Acciones
      establecerSocket: (socket: Socket | null) => set({ socket }),
      establecerConexion: (isConnected: boolean) => set({ isConnected }),
      establecerAlertaActiva: (alertaActiva: AlertaWebSocket | null) => set({ alertaActiva }),
      agregarAlertaPendiente: (alerta: AlertaWebSocket) =>
        set((state) => {
          const exists = state.alertasPendientes.some((a) => a.uuid === alerta.uuid);
          if (exists) {
            return state;
          }
          return {
            alertasPendientes: [...state.alertasPendientes, alerta],
          };
        }),
      removerAlertaPendiente: (uuid: string) =>
        set((state) => ({
          alertasPendientes: state.alertasPendientes.filter((a) => a.uuid !== uuid),
        })),

      inicializarSocket: () => {
        const currentSocket = get().socket;
        if (currentSocket?.connected) return; // Ya está conectado

        const newSocket = io(SOCKET_SERVER_URL);
        set({ socket: newSocket });

        newSocket.on('connect', () => {
          console.log('Conectado al servidor WebSocket');
          set({ isConnected: true });
        });

        newSocket.on('disconnect', () => {
          console.log('Desconectado del servidor WebSocket');
          set({ isConnected: false });
        });
        newSocket.on('nuevaAlerta', (data: AlertaWebSocket) => {
          const { establecerAlertaActiva, agregarAlertaPendiente } = get();

          establecerAlertaActiva(data);
          agregarAlertaPendiente(data);
        });

        return newSocket;
      },
      cerrarAlerta: async (uuid: string, estado = 'EN_CAMINO') => {
        try {
          const response = await fetch(`${SOCKET_SERVER_URL}/alertas/${uuid}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              estado,
            }),
          });

          if (response.ok) {
            console.log(`Alerta ${uuid} marcada como ${estado}`);
            const { removerAlertaPendiente, establecerAlertaActiva, alertaActiva } = get();

            // Si la alerta activa es la que se está cerrando, cerrar el modal
            if (alertaActiva?.uuid === uuid) {
              establecerAlertaActiva(null);
            }

            removerAlertaPendiente(uuid);
            return true;
          } else {
            console.error('Error al cerrar alerta:', response.statusText);
            return false;
          }
        } catch (error) {
          console.error('Error de red al cerrar alerta:', error);
          return false;
        }
      },
      descartarAlerta: () => set({ alertaActiva: null }),
      limpiarRecursos: () => {
        const socket = get().socket;
        if (socket) {
          socket.disconnect();
          set({ socket: null, isConnected: false });
        }
      },
      // Función manual para limpiar alertas muy antiguas (solo si el operador lo desea)
      limpiarAlertasAntiguas: (diasAntiguedad = 30) =>
        set((state) => {
          const now = new Date();
          const fechaLimite = new Date(now.getTime() - diasAntiguedad * 24 * 60 * 60 * 1000);

          const alertasActuales = state.alertasPendientes.filter((alerta) => {
            const alertaDate = new Date(alerta.fecha_hora);
            return alertaDate > fechaLimite;
          });

          return {
            alertasPendientes: alertasActuales,
          };
        }),
    }),
    {
      name: 'alert-storage',
      // Solo persistir las alertas pendientes, no el socket ni conexión
      partialize: (state) => ({
        alertasPendientes: state.alertasPendientes,
      }), // Cargar estado desde localStorage
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Las alertas EN_PELIGRO se mantienen hasta ser atendidas manualmente
          state.alertasPendientes.forEach((alerta) => {
            if (alerta.estado === 'EN_PELIGRO') {
              // Mantener alertas de emergencia
            }
          });
        }
      },
      // Configuraciones adicionales para mejorar la persistencia
      version: 1,
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          // Migración si es necesario
          return persistedState;
        }
        return persistedState;
      },
    },
  ),
);
