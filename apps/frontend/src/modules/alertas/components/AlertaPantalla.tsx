'use client';

import React, { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useAlertSocket } from '@/modules/notificaciones/hooks/useAlertaSocket';
import { toast } from 'sonner';

export default function AlertaPantalla() {
  const router = useRouter();
  const { isConnected, alertaActiva, descartarAlerta } = useAlertSocket();
  const [toastId, setToastId] = React.useState<string | number | null>(null);

  const handleAtenderAlert = (uuid: string) => {
    // Cerrar el toast actual si existe
    if (toastId) {
      toast.dismiss(toastId);
      setToastId(null);
    }
    // Navegar a la página de detalle de la alerta
    router.push(`/alertas/${uuid}`);
    descartarAlerta();
  };

  // Efecto para mostrar el toast cuando hay una alerta activa
  useEffect(() => {
    if (alertaActiva && !toastId) {
      const id = toast.error(`ALERTA DE EMERGENCIA - ${alertaActiva.persona.nombres} (CI: ${alertaActiva.persona.ci})`, {
        duration: Infinity,
        position: 'top-center',
        action: {
          label: 'Atender',
          onClick: () => handleAtenderAlert(alertaActiva.uuid),
        },
      });
      setToastId(id);
    } else if (!alertaActiva && toastId) {
      toast.dismiss(toastId);
      setToastId(null);
    }
  }, [alertaActiva, toastId]);

  return (
    <>
      {/* Indicador de conexión */}
      <div className="fixed top-4 right-4 z-50">
        <Badge variant={isConnected ? 'default' : 'destructive'} className="flex items-center gap-2 h-6">
          <div className={cn('size-2 rounded-full', isConnected ? 'bg-green-800' : 'bg-red-500')} />
          {isConnected ? 'Conectado' : 'Desconectado'}
        </Badge>
      </div>
    </>
  );
}
