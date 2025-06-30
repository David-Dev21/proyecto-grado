'use client';

import { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw, AlertTriangle } from 'lucide-react';
import { eventosService, ApiError } from '@/modules/eventos/services/eventoService';
import { EventoBackend } from '@/modules/eventos/types/Evento';

export default function EventosPage() {
  const [data, setData] = useState<EventoBackend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const eventos = await eventosService.getAll();
      setData(eventos);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(`Error ${err.status}: ${err.message}`);
      } else {
        setError('Error inesperado al cargar los datos');
      }
      console.error('Error al obtener eventos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Eventos de Seguimiento</h1>
            <p className="text-muted-foreground">Registro cronológico de eventos</p>
          </div>
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="h-8 w-8 animate-spin" />
              <p className="text-sm text-muted-foreground">Cargando eventos...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Error al cargar eventos</h1>
            <p className="text-muted-foreground">Registro cronológico de eventos</p>
          </div>
          <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-md">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <p className="text-red-800">{error}</p>
          </div>
          <div className="flex justify-center">
            <Button onClick={fetchData} variant="outline" className="flex items-center space-x-2">
              <RefreshCw className="h-4 w-4" />
              <span>Reintentar</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Eventos de Seguimiento</h1>
            <p className="text-muted-foreground">Registro cronológico de eventos</p>
          </div>
          <Button onClick={fetchData} variant="outline" size="sm" className="flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Actualizar</span>
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
        {data.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No hay eventos registrados</p>
          </div>
        )}
      </div>
    </div>
  );
}
