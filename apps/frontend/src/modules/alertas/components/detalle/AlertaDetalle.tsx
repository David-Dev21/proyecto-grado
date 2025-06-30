import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAlertaDetalle } from '@/modules/alertas/hooks/useAlertaDetalle';
import { useMapaAlerta } from '@/modules/ubicaciones/hooks/useMapaAlerta';
import { useUbicacionWebSocket } from '@/modules/ubicaciones/hooks/useUbicacionWebSocket';

import { useAlertaStore } from '../../stores/alertaStore';
import { AsignacionBackendData } from '@/modules/atenciones/hooks/useAsignacionPersonal';
import { LoadingSpinner } from '../shared/LoadingSpinner';
import { AlertaHeader } from './AlertaHeader';
import { DatosVictima } from './DatosVictima';
import { UbicacionAlerta } from '@/modules/ubicaciones/components/UbicacionAlerta';
import { useAsignacionPersonalPolicial } from '@/modules/atenciones/hooks/useAsignacionPersonalPolicial';
import { ErrorDisplay } from '../shared/ErrorDisplay';

interface AlertaDetalleProps {
  uuid: string;
}

export function AlertaDetalle({ uuid }: AlertaDetalleProps) {
  // Hooks personalizados
  const { alerta, loading, error } = useAlertaDetalle(uuid);
  const { isClient, MapComponent } = useMapaAlerta();
  const { ubicacionActualizada, clearUbicacionActualizada } = useUbicacionWebSocket();
  const { isDialogOpen, isAssigning, asignarPersonalPolicial, abrirDialog, cerrarDialog } = useAsignacionPersonalPolicial();
  const { cerrarAlerta } = useAlertaStore();

  // Estado para manejar la ubicación actualizada específica de esta alerta
  const [ubicacionAlerta, setUbicacionAlerta] = useState<{
    latitud: number;
    longitud: number;
  } | null>(null);

  // Escuchar actualizaciones de ubicación para esta alerta específica
  useEffect(() => {
    if (ubicacionActualizada && ubicacionActualizada.uuid === uuid) {
      setUbicacionAlerta({
        latitud: ubicacionActualizada.ubicacion.latitud,
        longitud: ubicacionActualizada.ubicacion.longitud,
      });
      // Limpiar la ubicación actualizada después de procesarla
      clearUbicacionActualizada();
    }
  }, [ubicacionActualizada, uuid, clearUbicacionActualizada]);
  const handleAsignarPersonalPolicial = async (datos: AsignacionBackendData) => {
    try {
      // Usar el id numérico de la alerta en lugar del uuid
      if (!alerta?.id) {
        throw new Error('ID de la alerta no disponible');
      }
      await asignarPersonalPolicial(alerta.id, datos);
      await cerrarAlerta(uuid, 'EN_CAMINO');
      toast.success('Personal policial asignado correctamente');
    } catch (error) {
      console.error('Error asignando personal policial:', error);
      toast.error('Error al asignar personal policial');
    }
  };

  if (loading) {
    return <LoadingSpinner message="Cargando alerta..." />;
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (!alerta) {
    return <ErrorDisplay error="No se encontró la alerta" />;
  }

  const nombreVictima = `${alerta.persona?.nombres || 'N/A'} ${alerta.persona?.ap_paterno || ''} ${
    alerta.persona?.ap_materno || ''
  }`.trim();

  // Usar la ubicación actualizada por WebSocket si está disponible, sino usar la de la alerta
  const ubicacionFinal = ubicacionAlerta || alerta.ubicacion;

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <AlertaHeader
        fechaHora={alerta.fecha_hora}
        estado={alerta.estado}
        isDialogOpen={isDialogOpen}
        isAssigning={isAssigning}
        onOpenDialog={abrirDialog}
        onCloseDialog={cerrarDialog}
        onAsignar={handleAsignarPersonalPolicial}
        idAlerta={parseInt(alerta.id)}
        usuarioDespachador={1} // TODO: Obtener del estado de autenticación
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {alerta.persona && <DatosVictima persona={alerta.persona} nroCaso={alerta.nro_caso} />}
        <UbicacionAlerta
          estado={alerta.estado}
          ubicacion={ubicacionFinal || null}
          isClient={isClient}
          MapComponent={MapComponent}
          nombreVictima={nombreVictima}
          isLoadingLocation={false} // No se necesita aquí, el backend maneja la ubicación
          onObtenerUbicacion={() => {}} // Función vacía ya que no se usa
        />
      </div>
    </div>
  );
}
