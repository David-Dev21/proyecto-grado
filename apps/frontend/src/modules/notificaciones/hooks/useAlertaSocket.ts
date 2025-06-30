import { useAlertaStore } from '@/modules/alertas/stores/alertaStore';
import { useEffect } from 'react';

export function useAlertSocket() {
  const store = useAlertaStore();
  useEffect(() => {
    // Inicializar socket al montar el componente
    store.inicializarSocket();

    // Cleanup al desmontar
    return () => {
      // No hacer cleanup aquí porque otros componentes pueden estar usando el socket
      // El cleanup se hará cuando sea necesario
    };
  }, [store.inicializarSocket]);

  // Cleanup cuando la ventana se cierre
  useEffect(() => {
    const handleBeforeUnload = () => {
      store.limpiarRecursos();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [store.limpiarRecursos]);

  return {
    socket: store.socket,
    isConnected: store.isConnected,
    alertaActiva: store.alertaActiva,
    alertasPendientes: store.alertasPendientes,
    cerrarAlerta: store.cerrarAlerta,
    descartarAlerta: store.descartarAlerta,
    establecerAlertaActiva: store.establecerAlertaActiva,
  };
}
