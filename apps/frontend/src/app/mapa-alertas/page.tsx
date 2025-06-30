import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, TrendingUp, Clock, MapPin } from 'lucide-react';
import { alertasService } from '@/modules/alertas/services/alertaService';
import { MapaIncidentesWrapper } from '@/modules/ubicaciones/components/MapaAlerta';

async function getData() {
  // Obtener alertas reales de la API
  try {
    const alertas = await alertasService.getAll();
    return alertas;
  } catch (error) {
    console.error('Error al obtener alertas:', error);
    return [];
  }
}

export default async function MapaIncidentesPage() {
  const data = await getData();

  // Calcular estadísticas basadas en AlertaBackend
  const stats = {
    total: data.length,
    criticos: data.filter((alerta) => alerta.estado === 'EN_PELIGRO').length,
    enCamino: data.filter((alerta) => alerta.estado === 'EN_CAMINO').length,
    atendidos: data.filter((alerta) => alerta.estado === 'ATENDIDO').length,
    tiempoPromedio: '2h 15m', // Esto se calcularía en base a los datos reales
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mapa de Alertas</h1>
        <p className="text-muted-foreground">Visualización geográfica en tiempo real de alertas y zonas críticas</p>
      </div>
      {/* Estadísticas rápidas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Incidentes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">En las últimas 24 horas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incidentes Críticos</CardTitle>
            <TrendingUp className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.criticos}</div>
            <p className="text-xs text-muted-foreground">Requieren atención inmediata</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Camino</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.enCamino}</div>
            <p className="text-xs text-muted-foreground">Atención en proceso</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.tiempoPromedio}</div>
            <p className="text-xs text-muted-foreground">Tiempo de respuesta promedio</p>
          </CardContent>
        </Card>
      </div>
      {/* Mapa principal */}
      <MapaIncidentesWrapper
        alertas={data}
        altura="700px"
        centroInicial={[-16.5, -68.1193]} // La Paz, Bolivia
        zoomInicial={12}
      />
      {/* Información adicional */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Leyenda del Mapa</CardTitle>
            <CardDescription>Significado de los colores de los marcadores</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm">En Peligro - Requiere atención inmediata</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">En Camino - Personal asignado en ruta</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm">Atendido - Situación bajo control</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              <span className="text-sm">Cerrado - Caso resuelto</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
            <CardDescription>Herramientas de análisis y gestión</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Heatmap de Alertas
              </Badge>
              <span className="text-sm text-muted-foreground">- Ver zonas de mayor actividad</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Rutas Optimizadas
              </Badge>
              <span className="text-sm text-muted-foreground">- Calcular mejores rutas de respuesta</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Análisis Temporal
              </Badge>
              <span className="text-sm text-muted-foreground">- Patrones por horarios y días</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Exportar Datos
              </Badge>
              <span className="text-sm text-muted-foreground">- Generar reportes geográficos</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
