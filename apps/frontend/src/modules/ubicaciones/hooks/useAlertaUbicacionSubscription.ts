import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

interface UseAlertaUbicacionSubscriptionProps {
  uuid: string | null;
  enabled?: boolean;
}

export function useAlertaUbicacionSubscription({ uuid, enabled = true }: UseAlertaUbicacionSubscriptionProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentUuidRef = useRef<string | null>(null);

  useEffect(() => {
    if (!enabled || !uuid) return;

    // Crear conexión WebSocket si no existe
    const socketInstance = io(SOCKET_SERVER_URL);
    setSocket(socketInstance);

    // Eventos de conexión
    socketInstance.on('connect', () => {
      console.log('Conectado al WebSocket para ubicaciones');
      setIsConnected(true);

      // Suscribirse automáticamente cuando se conecta
      if (uuid && uuid !== currentUuidRef.current) {
        suscribirseAAlerta(socketInstance, uuid);
      }
    });

    socketInstance.on('disconnect', () => {
      console.log('Desconectado del WebSocket');
      setIsConnected(false);
      setIsSubscribed(false);
    });

    // Confirmar suscripción
    socketInstance.on('suscripcionConfirmada', (data: { uuid: string }) => {
      console.log(`Suscripción confirmada para alerta: ${data.uuid}`);
      setIsSubscribed(true);
      currentUuidRef.current = data.uuid;
    });

    // Confirmar desuscripción
    socketInstance.on('desuscripcionConfirmada', (data: { uuid: string }) => {
      console.log(`Desuscripción confirmada para alerta: ${data.uuid}`);
      setIsSubscribed(false);
      currentUuidRef.current = null;
    });

    // Cleanup al desmontar
    return () => {
      if (currentUuidRef.current) {
        socketInstance.emit('desuscribirseAlerta', { uuid: currentUuidRef.current });
      }
      socketInstance.disconnect();
    };
  }, [uuid, enabled]);

  // Función para suscribirse a una alerta específica
  const suscribirseAAlerta = (socketInstance: Socket, alertaUuid: string) => {
    if (socketInstance.connected) {
      // Desuscribirse de la alerta anterior si existe
      if (currentUuidRef.current && currentUuidRef.current !== alertaUuid) {
        socketInstance.emit('desuscribirseAlerta', { uuid: currentUuidRef.current });
      }

      // Suscribirse a la nueva alerta
      socketInstance.emit('suscribirseAlerta', { uuid: alertaUuid });
      console.log(`Solicitando suscripción a alerta: ${alertaUuid}`);
    }
  };

  // Función para desuscribirse manualmente
  const desuscribirse = () => {
    if (socket && currentUuidRef.current) {
      socket.emit('desuscribirseAlerta', { uuid: currentUuidRef.current });
    }
  };

  // Cambiar suscripción cuando cambia el UUID
  useEffect(() => {
    if (socket && socket.connected && uuid && uuid !== currentUuidRef.current) {
      suscribirseAAlerta(socket, uuid);
    }
  }, [uuid, socket]);

  return {
    socket,
    isConnected,
    isSubscribed,
    desuscribirse,
    currentUuid: currentUuidRef.current,
  };
}
