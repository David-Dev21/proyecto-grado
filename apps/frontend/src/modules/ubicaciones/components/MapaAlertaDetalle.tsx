interface MapaAlertaProps {
  coordenadas: string;
  nombreVictima: string;
  isClient: boolean;
  MapComponent: any;
}

export function MapaAlerta({
  coordenadas,
  nombreVictima,
  isClient,
  MapComponent,
}: MapaAlertaProps) {
  if (!isClient || !MapComponent) {
    return (
      <div className="h-[300px] w-full bg-muted rounded-lg border flex items-center justify-center">
        <p className="text-muted-foreground">Cargando mapa...</p>
      </div>
    );
  }

  return (
    <MapComponent coordenadas={coordenadas} nombreVictima={nombreVictima} />
  );
}
