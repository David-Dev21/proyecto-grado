import { AsignacionPersonalPolicial } from '@/modules/atenciones/components/AsignacionPersonalPolicial';
import { AsignacionBackendData } from '@/modules/atenciones/hooks/useAsignacionPersonal';
import { AlertTriangle, Clock } from 'lucide-react';

interface AlertaHeaderProps {
  fechaHora: string;
  estado: string;
  isDialogOpen: boolean;
  isAssigning: boolean;
  onOpenDialog: () => void;
  onCloseDialog: () => void;
  onAsignar: (datos: AsignacionBackendData) => void;
  idAlerta: number;
  usuarioDespachador: number;
}

export function AlertaHeader({
  fechaHora,
  estado,
  isDialogOpen,
  isAssigning,
  onOpenDialog,
  onCloseDialog,
  onAsignar,
  idAlerta,
  usuarioDespachador,
}: AlertaHeaderProps) {
  return (
    <div className="mb-2">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <h1 className="flex gap-2 items-center text-2xl font-bold text-foreground">
            <AlertTriangle className="h-7 w-7 text-red-500" />
            ALERTA DEL BOTÓN DE PÁNICO
          </h1>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Última actualización: {new Date(fechaHora).toLocaleDateString()} a las {new Date(fechaHora).toLocaleTimeString()}
          </span>
        </div>
        <AsignacionPersonalPolicial
          isDialogOpen={isDialogOpen}
          isAssigning={isAssigning}
          onOpenDialog={onOpenDialog}
          onCloseDialog={onCloseDialog}
          onAsignar={onAsignar}
          idAlerta={idAlerta}
          usuarioDespachador={usuarioDespachador}
          estado={estado}
        />
      </div>
    </div>
  );
}
