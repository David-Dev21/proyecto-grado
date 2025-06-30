'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Calendar, Clock, CheckCircle, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAlertSocket } from '../hooks/useAlertaSocket';
import { AlertaWebSocket } from '@/modules/alertas/types/Alerta';

export default function AlertaNotificaciones() {
  const router = useRouter();
  const { alertasPendientes } = useAlertSocket();

  // Debug log
  // console.log('AlertaNotificaciones - alertasPendientes:', alertasPendientes);
  // console.log('AlertaNotificaciones - length:', alertasPendientes.length);

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

  const handleAtenderAlert = (alerta: AlertaWebSocket) => {
    // Navegar a la página de detalle de la alerta
    router.push(`/alertas/${alerta.uuid}`);
  };

  if (alertasPendientes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
        <p className="text-muted-foreground">No hay alertas pendientes</p>
        <p className="text-xs text-muted-foreground mt-1">Todas las alertas han sido atendidas</p>
      </div>
    );
  }
  return (
    <div className="h-[calc(100vh-12rem)] overflow-y-auto">
      <div className="space-y-3 p-4">
        {alertasPendientes.map((alerta) => (
          <div key={alerta.uuid} className="border rounded-lg p-4 space-y-3 bg-card hover:bg-muted/50 transition-colors">
            {/* Header con estado */}
            <div className="flex items-center justify-between">
              <Badge variant="destructive" className="flex items-center gap-1 h-6">
                <AlertTriangle className="w-3 h-3" />
                {formatEstado(alerta.estado)}
              </Badge>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="flex items-center gap-1 h-6">
                  <Calendar className="w-3 h-3" />
                  {formatDate(alerta.fecha_hora)}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1 h-6">
                  <Clock className="w-3 h-3" />
                  {formatTime(alerta.fecha_hora)}
                </Badge>
              </div>
            </div>

            {/* Información de la persona */}
            <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950 rounded-md">
              <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{alerta.persona.nombres}</p>
                <p className="text-xs text-muted-foreground">
                  CI: {alerta.persona.ci} | Tel: {alerta.persona.celular}
                </p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex gap-2">
              <Button size="sm" onClick={() => handleAtenderAlert(alerta)} className="flex-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                Atender
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
