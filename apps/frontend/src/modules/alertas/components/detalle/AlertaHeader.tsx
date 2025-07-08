import { AlertTriangle, Clock } from 'lucide-react';
import { AlertaBadge } from '../shared/AlertaBadge';
import { EstadoAlertaType } from '@alertas/types';

interface AlertaHeaderProps {
  fechaHora: string;
  estado: EstadoAlertaType;
}

export function AlertaHeader({ fechaHora, estado }: AlertaHeaderProps) {
  return (
    <div className="mb-2">
      <div className="flex flex-col justify-center">
        <div className="flex gap-3 items-center mb-1">
          <h1 className="flex gap-2 items-center text-2xl font-bold text-foreground">
            <AlertTriangle className="h-7 w-7 text-red-500" />
            ALERTA DEL BOTÓN DE PÁNICO
          </h1>
          <AlertaBadge estado={estado} />
        </div>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          Fecha de la alerta: {new Date(fechaHora).toLocaleDateString()} a las {new Date(fechaHora).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}
