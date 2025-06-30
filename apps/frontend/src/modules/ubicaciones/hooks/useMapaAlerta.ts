import React, { useState, useEffect } from "react";

export function useMapaAlerta() {
  const [isClient, setIsClient] = useState(false);
  const [MapComponent, setMapComponent] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);

    const loadMap = async () => {
      try {
        const L = await import("leaflet");

        // Configurar iconos
        delete (L.default.Icon.Default.prototype as any)._getIconUrl;
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });

        const { MapContainer, TileLayer, Marker, Popup } = await import(
          "react-leaflet"
        );        const MapComponente = ({ 
          coordenadas, 
          nombreVictima 
        }: { 
          coordenadas: string; 
          nombreVictima: string;
        }) => {
          const [lat, lng] = coordenadas.split(", ").map(Number);

          return React.createElement(MapContainer, {
            center: [lat, lng],
            zoom: 15,
            style: { height: "300px", width: "100%" },
            className: "rounded-lg border"
          }, [
            React.createElement(TileLayer, {
              key: "tile",
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }),
            React.createElement(Marker, {
              key: "marker",
              position: [lat, lng]
            }, React.createElement(Popup, {}, 
              React.createElement("div", { className: "text-center" }, [
                React.createElement("p", { 
                  key: "alert", 
                  className: "font-semibold text-red-600" 
                }, "⚠️ ALERTA ACTIVA"),
                React.createElement("p", { 
                  key: "name", 
                  className: "text-sm" 
                }, nombreVictima)
              ])
            ))
          ]);
        };

        setMapComponent(() => MapComponente);
      } catch (error) {
        console.error("Error cargando el mapa:", error);
      }
    };

    loadMap();
  }, []);

  return {
    isClient,
    MapComponent,
  };
}
