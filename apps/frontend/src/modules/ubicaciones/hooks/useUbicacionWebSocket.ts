// DEPRECATED: Este hook ha sido reemplazado por el manejo global de WebSocket en useAlertaStore
// Para manejar ubicaciones de alertas, usar directamente el socket global desde useAlertaStore

// ⚠️ NO USAR ESTE HOOK - Solo se mantiene temporalmente para referencia
// Toda la funcionalidad se ha movido al store global de alertas

export function useUbicacionWebSocket() {
  console.warn('useUbicacionWebSocket está deprecated. Usar useAlertaStore en su lugar.');

  return {
    socket: null,
    isConnected: false,
    ubicacionActualizada: null,
    clearUbicacionActualizada: () => {},
  };
}
