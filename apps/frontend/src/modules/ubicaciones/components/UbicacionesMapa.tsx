import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Clock, AlertTriangle, Shield } from 'lucide-react';
import { EstadoAlerta } from '@alertas/types';
import { UbicacionFuncionarioBackend } from '../../atenciones/types/Atencion';
import { formatDateTime } from '../../funcionarios/types/Funcionario';
import { AlertaBadge } from '@/modules/alertas/components/shared/AlertaBadge';

interface Ubicacion {
  latitud: number;
  longitud: number;
}

interface UbicacionAlertaDetalle extends Ubicacion {
  id: string;
  fecha_hora: string;
}

interface UbicacionesMapaProps {
  // Datos de la alerta
  estadoAlerta: EstadoAlerta;
  ubicacionesAlerta: UbicacionAlertaDetalle[];
  nombreVictima: string;

  // Datos del funcionario
  ubicacionesFuncionario: UbicacionFuncionarioBackend[];
  nombreFuncionario?: string;

  // Datos del mapa
  isClient: boolean;
  MapComponent: any;
}

export function UbicacionesMapa({
  estadoAlerta,
  ubicacionesAlerta,
  nombreVictima,
  ubicacionesFuncionario,
  nombreFuncionario,
  isClient,
  MapComponent,
}: UbicacionesMapaProps) {
  // Obtener la ubicación más reciente del funcionario
  const ubicacionRecienteFuncionario =
    ubicacionesFuncionario && ubicacionesFuncionario.length > 0
      ? ubicacionesFuncionario.sort((a, b) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime())[0]
      : null;

  const ubicacionActualFuncionario = ubicacionRecienteFuncionario?.ubicacion;
  // Crear un componente de mapa que muestre ambas ubicaciones
  const MapaCombinado = () => {
    if (!isClient || !MapComponent) {
      return (
        <div className="h-[400px] w-full bg-muted rounded-lg border flex items-center justify-center">
          <p className="text-muted-foreground">Cargando mapa...</p>
        </div>
      );
    }

    // Configurar marcadores para todas las ubicaciones
    const marcadores = [];

    // Agregar marcadores para todas las ubicaciones de alerta
    if (ubicacionesAlerta && ubicacionesAlerta.length > 0) {
      ubicacionesAlerta.forEach((ubicacion, index) => {
        // Validar que las coordenadas sean números válidos
        const lat = Number(ubicacion.latitud);
        const lng = Number(ubicacion.longitud);

        if (!isNaN(lat) && !isNaN(lng) && isFinite(lat) && isFinite(lng)) {
          marcadores.push({
            lat,
            lng,
            title: `Alerta: ${nombreVictima} - Ubicación ${index + 1}`,
            color: index === 0 ? 'red' : 'orange', // La primera en rojo, el resto en naranja
            icon: 'alert',
          });
        }
      });
    }

    if (ubicacionActualFuncionario) {
      const latFunc = Number(ubicacionActualFuncionario.latitud);
      const lngFunc = Number(ubicacionActualFuncionario.longitud);

      if (!isNaN(latFunc) && !isNaN(lngFunc) && isFinite(latFunc) && isFinite(lngFunc)) {
        marcadores.push({
          lat: latFunc,
          lng: lngFunc,
          title: `Funcionario: ${nombreFuncionario || 'Personal asignado'}`,
          color: 'primary', // Color primario para el funcionario
          icon: 'shield',
        });
      }
    }

    // Si no hay ninguna ubicación, mostrar mensaje
    if (marcadores.length === 0) {
      return (
        <div className="h-[400px] w-full bg-muted rounded-lg border flex items-center justify-center">
          <p className="text-muted-foreground">No hay ubicaciones disponibles</p>
        </div>
      );
    }

    // Calcular centro del mapa basado en las ubicaciones disponibles
    let centroLat = -17.783327; // Santa Cruz, Bolivia por defecto
    let centroLng = -63.18214;

    if (marcadores.length > 0) {
      const validMarcadores = marcadores.filter((m) => !isNaN(m.lat) && !isNaN(m.lng) && isFinite(m.lat) && isFinite(m.lng));

      if (validMarcadores.length > 0) {
        centroLat = validMarcadores.reduce((sum, m) => sum + m.lat, 0) / validMarcadores.length;
        centroLng = validMarcadores.reduce((sum, m) => sum + m.lng, 0) / validMarcadores.length;
      }
    }

    return (
      <div className="h-[400px] w-full rounded-lg overflow-hidden border">
        <MapComponent center={[centroLat, centroLng]} zoom={13} marcadores={marcadores} className="h-full w-full" />
      </div>
    );
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <div className="flex items-center gap-3">
          <MapPin className="size-5 text-green-600" />
          <CardTitle className="text-lg">UBICACIONES EN MAPA</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Información de ubicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ubicación de la Alerta */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <h3 className="text-sm font-semibold">Ubicación de la Alerta</h3>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Navigation className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Coordenadas</p>
                  {ubicacionesAlerta && ubicacionesAlerta.length > 0 ? (
                    <div className="space-y-1">
                      {ubicacionesAlerta.length === 1 ? (
                        <p className="text-sm text-foreground font-mono">
                          {ubicacionesAlerta[0].latitud}, {ubicacionesAlerta[0].longitud}
                        </p>
                      ) : (
                        <div>
                          <p className="text-sm text-foreground font-mono">
                            {ubicacionesAlerta[0].latitud}, {ubicacionesAlerta[0].longitud}
                          </p>
                          <p className="text-xs text-muted-foreground">+{ubicacionesAlerta.length - 1} ubicaciones más</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-foreground">No disponible</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Ubicación del Funcionario */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold">Ubicación del Funcionario</h3>
              <Badge
                variant={ubicacionActualFuncionario ? 'default' : 'secondary'}
                className={ubicacionActualFuncionario ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
              >
                {ubicacionActualFuncionario ? 'Disponible' : 'Sin ubicación'}
              </Badge>
            </div>

            <div className="space-y-2">
              {ubicacionRecienteFuncionario ? (
                <>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Última actualización</p>
                      <p className="text-sm text-foreground">{formatDateTime(ubicacionRecienteFuncionario.fecha_hora)}</p>
                    </div>
                  </div>
                  {ubicacionActualFuncionario && (
                    <div className="flex items-center gap-3">
                      <Navigation className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">Coordenadas</p>
                        <p className="text-sm text-foreground font-mono">
                          {ubicacionActualFuncionario.latitud}, {ubicacionActualFuncionario.longitud}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-muted-foreground">No hay información de ubicación disponible</p>
              )}
            </div>
          </div>
        </div>

        <Separator />

        {/* Mapa combinado */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-muted-foreground">Mapa de ubicaciones</h4>{' '}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-muted-foreground">Alerta (Victima)</span>
              </div>
              {ubicacionesAlerta.length > 1 && (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">Alerta (historial)</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Funcionario</span>
              </div>
            </div>
          </div>
          <MapaCombinado />
        </div>

        {/* Historial de ubicaciones de la alerta si hay más de una */}
        {ubicacionesAlerta.length > 1 && (
          <>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-muted-foreground">Historial de ubicaciones de la alerta</h4>
                <Badge variant="outline">{ubicacionesAlerta.length} registros</Badge>
              </div>
              <div className="max-h-32 overflow-y-auto space-y-2">
                {ubicacionesAlerta
                  .sort((a, b) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime())
                  .slice(1, 4) // Mostrar solo las 3 más recientes después de la actual
                  .map((ubicacion, index) => (
                    <div key={ubicacion.id} className="flex items-center gap-3 p-2 bg-muted/30 rounded text-xs">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{formatDateTime(ubicacion.fecha_hora)}</span>
                      <span className="text-foreground font-mono">
                        {ubicacion.latitud}, {ubicacion.longitud}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}

        {/* Historial de ubicaciones del funcionario si hay más de una */}
        {ubicacionesFuncionario.length > 1 && (
          <>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-muted-foreground">Historial de ubicaciones del funcionario</h4>
                <Badge variant="outline">{ubicacionesFuncionario.length} registros</Badge>
              </div>
              <div className="max-h-32 overflow-y-auto space-y-2">
                {ubicacionesFuncionario
                  .sort((a, b) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime())
                  .slice(1, 4) // Mostrar solo las 3 más recientes después de la actual
                  .map((ubicacion, index) => (
                    <div key={ubicacion.id} className="flex items-center gap-3 p-2 bg-muted/30 rounded text-xs">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{formatDateTime(ubicacion.fecha_hora)}</span>
                      {ubicacion.ubicacion && (
                        <span className="text-foreground font-mono">
                          {ubicacion.ubicacion.latitud}, {ubicacion.ubicacion.longitud}
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
