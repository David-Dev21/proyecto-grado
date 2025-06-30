'use client';

import { useAuthHydration } from '@/hooks/useAuthHydration';

/**
 * Componente que se encarga de hidratar el store de autenticación
 * cuando la aplicación arranca. Este componente debe ser usado
 * en el layout principal para asegurar que se ejecute en todas las páginas.
 */
export function AuthHydrationProvider({ children }: { children: React.ReactNode }) {
  // Este hook se ejecuta automáticamente cuando se monta el componente
  useAuthHydration();

  // No renderiza nada adicional, solo los children
  return <>{children}</>;
}
