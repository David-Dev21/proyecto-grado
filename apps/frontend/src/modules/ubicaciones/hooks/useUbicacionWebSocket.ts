import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface UbicacionData {
  uuid: string;
  ubicacion: {
    latitud: number;
    longitud: number;
    fecha: string;
  };
  timestamp: string;
}

export function useUbicacionWebSocket() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [ubicacionActualizada, setUbicacionActualizada] = useState<UbicacionData | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Crear conexión WebSocket
    const socketInstance = io(process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001");

    setSocket(socketInstance);

    // Eventos de conexión
    socketInstance.on("connect", () => {
      console.log("Conectado al WebSocket");
      setIsConnected(true);
    });

    socketInstance.on("disconnect", () => {
      console.log("Desconectado del WebSocket");
      setIsConnected(false);
    });

    // Escuchar eventos de ubicación actualizada
    socketInstance.on("alertaUbicacionActualizada", (data: UbicacionData) => {
      console.log("Ubicación de alerta actualizada:", data);
      setUbicacionActualizada(data);
    });

    // Cleanup al desmontar el componente
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const clearUbicacionActualizada = () => {
    setUbicacionActualizada(null);
  };

  return {
    socket,
    isConnected,
    ubicacionActualizada,
    clearUbicacionActualizada,
  };
}
