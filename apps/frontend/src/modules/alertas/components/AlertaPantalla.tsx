'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, AlertTriangle, CheckCircle, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useAlertSocket } from '@/modules/notificaciones/hooks/useAlertaSocket';

export default function AlertaPantalla() {
  const router = useRouter();
  const { isConnected, alertaActiva, descartarAlerta } = useAlertSocket();
  const formatDateTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatEstado = (estado: string) => {
    return estado.replace(/_/g, ' ');
  };
  const handleAtenderAlert = (uuid: string) => {
    // Navegar a la página de detalle de la alerta
    router.push(`/alertas/${uuid}`);
    descartarAlerta();
  };

  return (
    <>
      {/* Indicador de conexión */}
      <div className="fixed top-4 right-4 z-50">
        <Badge variant={isConnected ? 'default' : 'destructive'} className="flex items-center gap-2 h-6">
          <div className={cn('size-2 rounded-full', isConnected ? 'bg-green-800' : 'bg-red-500')} />
          {isConnected ? 'Conectado' : 'Desconectado'}
        </Badge>
      </div>

      {/* Modal de alerta simplificado */}
      <Dialog open={!!alertaActiva} onOpenChange={() => descartarAlerta()}>
        <DialogContent className="max-w-md">
          <DialogHeader className="flex flex-col items-center justify-between space-y-2">
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <AlertTriangle className="size-6 text-red-500" />
              ALERTA DE EMERGENCIA
            </DialogTitle>
            <DialogDescription>Se ha recibido una nueva alerta de emergencia que requiere atención inmediata.</DialogDescription>
          </DialogHeader>
          {alertaActiva && (
            <div className="space-y-4">
              {/* Información esencial */}
              <div className="space-y-3">
                <div className="flex flex-row items-center justify-center gap-4">
                  {/* Estado */}
                  <div className="flex-col justify-center items-center space-y-2">
                    <Badge variant="destructive" className="flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {formatEstado(alertaActiva.estado)}
                    </Badge>
                    {/* Fecha y hora */}
                    <Badge variant="secondary" className="flex items-center gap-1 h-6">
                      <Calendar className="w-3 h-3" />
                      {formatDate(alertaActiva.fecha_hora)}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1 h-6">
                      <Clock className="w-3 h-3" />
                      {formatTime(alertaActiva.fecha_hora)}
                    </Badge>
                  </div>
                  {/* Información de la persona */}
                  <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <p className="font-bold text-md">{alertaActiva.persona.nombres}</p>
                    <p className="text-sm text-muted-foreground">CI: {alertaActiva.persona.ci}</p>
                    <p className="text-sm text-muted-foreground">Tel: {alertaActiva.persona.celular}</p>
                  </div>
                </div>
                {/* Botón de acción principal */}
                <div className="pt-4">
                  <Button onClick={() => handleAtenderAlert(alertaActiva.uuid)} size="lg" className="w-full">
                    <CheckCircle className="size-5 mr-2" />
                    Atender Alerta
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
