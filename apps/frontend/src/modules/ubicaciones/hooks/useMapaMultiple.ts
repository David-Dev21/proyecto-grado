import { useState, useEffect } from 'react';
import React from 'react';

interface Marcador {
  lat: number;
  lng: number;
  title: string;
  color: string;
  icon: string;
}

interface MapaMultipleProps {
  center: [number, number];
  zoom: number;
  marcadores: Marcador[];
  className?: string;
}

export function useMapaMultiple() {
  const [isClient, setIsClient] = useState(false);
  const [MapComponent, setMapComponent] = useState<React.ComponentType<MapaMultipleProps> | null>(null);

  useEffect(() => {
    setIsClient(true);

    const loadMap = async () => {
      try {
        const L = await import('leaflet');

        // Configurar íconos por defecto de Leaflet
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');

        const MapComponenteMultiple = ({ center, zoom, marcadores, className }: MapaMultipleProps) => {
          // Validar coordenadas del centro
          const validCenter: [number, number] = [
            !isNaN(center[0]) && isFinite(center[0]) ? center[0] : -17.783327,
            !isNaN(center[1]) && isFinite(center[1]) ? center[1] : -63.18214,
          ];

          // Filtrar marcadores con coordenadas válidas
          const validMarcadores = marcadores.filter((m) => !isNaN(m.lat) && !isNaN(m.lng) && isFinite(m.lat) && isFinite(m.lng));

          // Crear íconos personalizados basados en el color
          const crearIcono = (color: string) => {
            const colorHex =
              color === 'red' ? '#ef4444' : color === 'orange' ? '#f97316' : color === 'primary' ? '#3b82f6' : '#6b7280';

            return new L.DivIcon({
              className: 'custom-marker',
              html: `<div style="
                background-color: ${colorHex};
                width: 25px;
                height: 25px;
                border-radius: 50% 50% 50% 0;
                border: 2px solid white;
                transform: rotate(-45deg);
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
              "></div>`,
              iconSize: [25, 25],
              iconAnchor: [12, 24],
            });
          };

          return React.createElement(
            MapContainer,
            {
              center: validCenter,
              zoom,
              style: { height: '100%', width: '100%' },
              className,
            },
            [
              React.createElement(TileLayer, {
                key: 'tile',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              }),
              ...validMarcadores.map((marcador, index) =>
                React.createElement(
                  Marker,
                  {
                    key: `marker-${index}`,
                    position: [marcador.lat, marcador.lng],
                    icon: crearIcono(marcador.color),
                  },
                  React.createElement(Popup, {}, marcador.title),
                ),
              ),
            ],
          );
        };

        setMapComponent(() => MapComponenteMultiple);
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    loadMap();
  }, []);

  return { isClient, MapComponent };
}
