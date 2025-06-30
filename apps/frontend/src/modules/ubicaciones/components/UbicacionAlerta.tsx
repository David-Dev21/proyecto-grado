import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertaBadge } from '@/modules/alertas/components/shared/AlertaBadge';
import { EstadoAlerta } from '@alertas/types';
import { MapPin, Navigation, Loader2 } from 'lucide-react';
import { MapaAlerta } from './MapaAlertaDetalle';

interface Ubicacion {
  latitud: number;
  longitud: number;
}

interface UbicacionAlertaProps {
  estado: EstadoAlerta;
  ubicacion: Ubicacion | null;
  isClient: boolean;
  MapComponent: any;
  nombreVictima: string;
  isLoadingLocation: boolean;
  onObtenerUbicacion: () => void;
}

export function UbicacionAlerta({ estado, ubicacion, isClient, MapComponent, nombreVictima }: UbicacionAlertaProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center gap-3">
          <MapPin className="size-5 text-green-600" />
          <CardTitle className="text-lg">POSICIÓN GEOGRÁFICA DE LA ALERTA</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Estado de la alerta */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">Estado de la alerta</span>
          <AlertaBadge estado={estado} />
        </div>
        <Separator />

        {/* Información de ubicación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Navigation className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Coordenadas</p>
              <p className="text-foreground font-mono">
                {ubicacion ? `${ubicacion.latitud}, ${ubicacion.longitud}` : 'No disponible'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Departamento</p>
              <p className="text-foreground">No disponible</p>
            </div>
          </div>
        </div>
        <Separator />

        {/* Mapa */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Ubicación en el mapa</h4>
          {ubicacion ? (
            <MapaAlerta
              coordenadas={`${ubicacion.latitud}, ${ubicacion.longitud}`}
              nombreVictima={nombreVictima}
              isClient={isClient}
              MapComponent={MapComponent}
            />
          ) : (
            <div className="h-[300px] w-full bg-muted rounded-lg border flex items-center justify-center">
              {' '}
              <p className="text-muted-foreground">Ubicación no disponible</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
