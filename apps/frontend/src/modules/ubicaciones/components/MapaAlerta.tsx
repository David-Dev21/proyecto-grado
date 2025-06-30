'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, AlertTriangle, Navigation, Layers } from 'lucide-react';
import { AlertaBackend } from '@/modules/alertas/types/Alerta';

interface MapaIncidentesWrapperProps {
  alertas: AlertaBackend[];
  altura?: string;
  centroInicial?: [number, number];
  zoomInicial?: number;
}

// Componente wrapper que maneja la carga dinámica
export function MapaIncidentesWrapper({
  alertas,
  altura = '600px',
  centroInicial = [-16.5, -68.1193],
  zoomInicial = 13,
}: MapaIncidentesWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [MapComponent, setMapComponent] = useState<any>(null);

  useEffect(() => {
    // Asegurar que estamos en el cliente
    setIsClient(true);

    // Cargar dinámicamente el mapa solo en el cliente
    const loadMap = async () => {
      try {
        // Importar Leaflet
        const L = await import('leaflet');

        // Configurar iconos predeterminados de Leaflet
        delete (L.default.Icon.Default.prototype as any)._getIconUrl;
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        // Importar React Leaflet
        const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');

        // Crear el componente de mapa interno
        const InternalMapComponent = () => {
          // Función para obtener el color del marcador según el estado
          const getMarkerColor = (estado: string) => {
            switch (estado) {
              case 'EN_PELIGRO':
                return '#ef4444';
              case 'EN_CAMINO':
                return '#f59e0b';
              case 'ATENDIDO':
                return '#10b981';
              case 'CERRADO':
                return '#6b7280';
              default:
                return '#3b82f6';
            }
          };

          // Crear icono personalizado para cada incidente
          const createCustomIcon = (estado: string) => {
            const color = getMarkerColor(estado);
            const svgIcon = `
              <svg width="24" height="24" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            `;

            return L.default.divIcon({
              html: svgIcon,
              className: 'custom-marker',
              iconSize: [24, 24],
              iconAnchor: [12, 24],
              popupAnchor: [0, -24],
            });
          };

          // Filtrar alertas que tienen ubicación (por ahora ninguna ya que no están en el backend)
          const alertasConUbicacion = alertas.filter((alerta) => alerta.ubicacion);

          return (
            <div style={{ height: altura, width: '100%' }}>
              <MapContainer
                center={centroInicial}
                zoom={zoomInicial}
                style={{ height: '100%', width: '100%', borderRadius: '8px' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {alertasConUbicacion.map((alerta) => {
                  if (!alerta.ubicacion) return null;

                  return (
                    <Marker
                      key={alerta.id}
                      position={[alerta.ubicacion.latitud, alerta.ubicacion.longitud]}
                      icon={createCustomIcon(alerta.estado)}
                    >
                      <Popup>
                        <div className="p-2 min-w-[200px]">
                          <div className="font-semibold text-sm mb-2">{alerta.nro_caso}</div>

                          <div className="space-y-1 text-xs">
                            <div>
                              <span className="font-medium">Persona:</span> {alerta.persona?.nombres || 'Sin información'}{' '}
                              {alerta.persona?.ap_paterno || ''}
                            </div>
                            <div>
                              <span className="font-medium">Estado:</span>{' '}
                              <Badge variant={alerta.estado === 'EN_PELIGRO' ? 'destructive' : 'default'} className="text-xs">
                                {alerta.estado.replace('_', ' ')}
                              </Badge>
                            </div>
                            <div>
                              <span className="font-medium">Fecha:</span> {new Date(alerta.fecha_hora).toLocaleString('es-ES')}
                            </div>
                            <div>
                              <span className="font-medium">Contacto:</span> {alerta.persona?.celular || 'Sin información'}
                            </div>
                            <div>
                              <span className="font-medium">Ubicación:</span> {alerta.ubicacion.latitud.toFixed(4)},{' '}
                              {alerta.ubicacion.longitud.toFixed(4)}
                            </div>
                          </div>

                          <div className="flex gap-1 mt-3">
                            <Button size="sm" variant="outline" className="text-xs">
                              Ver Detalles
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs">
                              Asignar
                            </Button>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>
          );
        };

        setMapComponent(() => InternalMapComponent);
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    if (isClient) {
      loadMap();
    }
  }, [isClient, alertas, altura, centroInicial, zoomInicial]);

  // Filtrar alertas que tienen ubicación para estadísticas
  const alertasConUbicacion = alertas.filter((alerta) => alerta.ubicacion);

  // Estadísticas rápidas
  const estadisticas = {
    total: alertasConUbicacion.length,
    enPeligro: alertasConUbicacion.filter((alerta) => alerta.estado === 'EN_PELIGRO').length,
    enCamino: alertasConUbicacion.filter((alerta) => alerta.estado === 'EN_CAMINO').length,
    atendidos: alertasConUbicacion.filter((alerta) => alerta.estado === 'ATENDIDO').length,
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Mapa de Alertas
            </CardTitle>
            <CardDescription>Visualización geográfica de {estadisticas.total} alertas activas</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Layers className="h-4 w-4 mr-2" />
              Capas
            </Button>
            <Button variant="outline" size="sm">
              <Navigation className="h-4 w-4 mr-2" />
              Mi ubicación
            </Button>
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="flex gap-2 mt-4">
          <Badge variant="destructive" className="text-xs">
            <AlertTriangle className="h-3 w-3 mr-1" />
            {estadisticas.enPeligro} En Peligro
          </Badge>
          <Badge variant="default" className="text-xs">
            {estadisticas.enCamino} En Camino
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {estadisticas.atendidos} Atendidos
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        {!isClient || !MapComponent ? (
          <div className="flex items-center justify-center bg-muted rounded-lg" style={{ height: altura }}>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground animate-pulse" />
              <p className="text-muted-foreground">Cargando mapa...</p>
            </div>
          </div>
        ) : (
          <MapComponent />
        )}
      </CardContent>
    </Card>
  );
}
