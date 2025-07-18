import { useEffect, useState } from 'react';
import { useAlertaDetalle } from '@/modules/alertas/hooks/useAlertaDetalle';
import { useMapaMultiple } from '@/modules/ubicaciones/hooks/useMapaMultiple';
import { useUbicacionesAlerta } from '@/modules/ubicaciones/hooks/useUbicacionesAlerta';
import { useAlertaStore } from '../../stores/alertaStore';
import { LoadingSpinner } from '../shared/LoadingSpinner';
import { AlertaHeader } from './AlertaHeader';
import { DatosVictima } from './DatosVictima';
import { PersonalAsignado } from '@/modules/atenciones/components/PersonalAsignado';
import { UbicacionesMapa } from '@/modules/ubicaciones/components/UbicacionesMapa';
import { ErrorDisplay } from '../shared/ErrorDisplay';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { FileText, CheckCircle } from 'lucide-react';
import { EventoForm } from '@/modules/eventos/components/EventoForm';
import { CierreAlertaForm } from '@/modules/cierre-alertas/components/CierreAlertaForm';

interface AlertaDetalleProps {
  uuid: string;
}

export function AlertaDetalle({ uuid }: AlertaDetalleProps) {
  // Hooks personalizados
  const { alerta, loading, error } = useAlertaDetalle(uuid);
  const { ubicaciones: ubicacionesAlerta, loading: loadingUbicaciones } = useUbicacionesAlerta(alerta?.id ? alerta.id : '');
  const { isClient, MapComponent } = useMapaMultiple();
  const {
    socket,
    isConnected,
    cerrarAlerta,
    inicializarSocket,
    ubicacionActualizada,
    clearUbicacionActualizada,
    suscribirseAlerta,
    desuscribirseAlerta,
  } = useAlertaStore();

  // Estado para suscripción a la alerta específica
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Estados para modales
  const [showEventoForm, setShowEventoForm] = useState(false);
  const [showCierreForm, setShowCierreForm] = useState(false);

  // Inicializar socket al montar el componente
  useEffect(() => {
    inicializarSocket();
  }, [inicializarSocket]);

  // Estado para manejar la ubicación actualizada específica de esta alerta
  const [nuevaUbicacion, setNuevaUbicacion] = useState<{
    id: string;
    latitud: number;
    longitud: number;
    fecha_hora: string;
  } | null>(null);

  // Suscribirse a la alerta cuando el socket esté conectado
  useEffect(() => {
    if (socket && socket.connected && uuid && !isSubscribed) {
      suscribirseAlerta(uuid);

      // Escuchar confirmación de suscripción
      const handleSuscripcionConfirmada = (data: { uuid: string }) => {
        if (data.uuid === uuid) {
          console.log(`Suscripción confirmada para alerta: ${uuid}`);
          setIsSubscribed(true);
        }
      };

      socket.on('suscripcionConfirmada', handleSuscripcionConfirmada);

      // Cleanup
      return () => {
        socket.off('suscripcionConfirmada', handleSuscripcionConfirmada);
      };
    }
  }, [socket, uuid, isSubscribed, suscribirseAlerta]);

  // Desuscribirse cuando el componente se desmonta o cambia el UUID
  useEffect(() => {
    return () => {
      if (uuid && isSubscribed) {
        desuscribirseAlerta(uuid);
        setIsSubscribed(false);
      }
    };
  }, [uuid, isSubscribed, desuscribirseAlerta]);

  // Escuchar actualizaciones de ubicación para esta alerta específica
  useEffect(() => {
    if (ubicacionActualizada && ubicacionActualizada.uuid === uuid) {
      setNuevaUbicacion({
        id: `ws-${Date.now()}`, // ID temporal para la nueva ubicación
        latitud: ubicacionActualizada.ubicacion.latitud,
        longitud: ubicacionActualizada.ubicacion.longitud,
        fecha_hora: new Date().toISOString(), // Fecha actual de cuando llega la ubicación
      });
      // Limpiar la ubicación actualizada después de procesarla
      clearUbicacionActualizada();
    }
  }, [ubicacionActualizada, uuid, clearUbicacionActualizada]);

  if (loading || loadingUbicaciones) {
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

  // Combinar ubicaciones de la base de datos con la nueva ubicación del WebSocket
  const ubicacionesFinales = [...ubicacionesAlerta];
  if (nuevaUbicacion && alerta?.id) {
    // Crear objeto compatible con UbicacionAlerta
    const nuevaUbicacionCompleta = {
      id: nuevaUbicacion.id,
      id_alerta: alerta.id,
      latitud: nuevaUbicacion.latitud,
      longitud: nuevaUbicacion.longitud,
      fecha_hora: nuevaUbicacion.fecha_hora,
      created_at: nuevaUbicacion.fecha_hora,
      updated_at: nuevaUbicacion.fecha_hora,
    };
    ubicacionesFinales.unshift(nuevaUbicacionCompleta); // Agregar al inicio como la más reciente
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <AlertaHeader fechaHora={alerta.created_at} estado={alerta.estado} />

      {/* Botones de acciones - Solo disponibles cuando la alerta está EN_CAMINO */}
      {alerta.estado === 'EN_CAMINO' && (
        <div className="mb-4 flex gap-2">
          <Button onClick={() => setShowEventoForm(true)} variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Agregar Evento
          </Button>
          <Button onClick={() => setShowCierreForm(true)} variant="outline" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Finalizar Caso
          </Button>
        </div>
      )}

      {/* Indicador de estado de conexión */}
      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <div className={`h-2 w-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-400'}`} />
        <span>
          {isConnected
            ? isSubscribed
              ? 'Conectado - Recibiendo actualizaciones de ubicación'
              : 'Conectado - Configurando suscripción...'
            : 'Desconectado - No se recibirán actualizaciones en tiempo real'}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Primera fila: Datos de la víctima y Personal asignado */}
        {alerta.persona && <DatosVictima persona={alerta.persona} codDenuncia={alerta.nro_caso} />}
        <PersonalAsignado alertaUuid={alerta.uuid} idAlerta={parseInt(alerta.id)} estado={alerta.estado} />

        {/* Segunda fila: Ubicaciones combinadas */}
        <UbicacionesMapa
          estadoAlerta={alerta.estado}
          ubicacionesAlerta={ubicacionesFinales}
          nombreVictima={nombreVictima}
          ubicacionesFuncionario={[]}
          nombreFuncionario=""
          isClient={isClient}
          MapComponent={MapComponent}
        />
      </div>

      {/* Modales usando shadcn/ui Dialog - Solo disponibles cuando la alerta está EN_CAMINO */}
      {alerta.estado === 'EN_CAMINO' && (
        <>
          <Dialog open={showEventoForm} onOpenChange={setShowEventoForm}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Agregar Evento</DialogTitle>
                <DialogDescription>
                  Registra un nuevo evento relacionado con esta alerta. Los eventos documentan las acciones tomadas durante el manejo del
                  caso.
                </DialogDescription>
              </DialogHeader>
              <EventoForm
                alertaId={alerta.id}
                onClose={() => setShowEventoForm(false)}
                onSaved={() => {
                  // Aquí puedes agregar lógica para refrescar datos si es necesario
                  console.log('Evento guardado exitosamente');
                }}
              />
            </DialogContent>
          </Dialog>

          <Dialog open={showCierreForm} onOpenChange={setShowCierreForm}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Finalizar Caso</DialogTitle>
                <DialogDescription>
                  Completa la información para cerrar este caso definitivamente. Asegúrate de proporcionar todos los detalles requeridos.
                </DialogDescription>
              </DialogHeader>
              <CierreAlertaForm
                alertaId={alerta.id}
                onClose={() => setShowCierreForm(false)}
                onSaved={() => {
                  // Aquí puedes agregar lógica para refrescar datos o redirigir
                  console.log('Caso finalizado exitosamente');
                }}
              />
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}
