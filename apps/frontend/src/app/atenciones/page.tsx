'use client';

import { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { atencionesService } from '@/modules/atenciones/services/atencionService';
import { AtencionBackend } from '@/modules/atenciones/types/Atencion';

export default function AtencionesPage() {
  const [atenciones, setAtenciones] = useState<AtencionBackend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAtenciones = async () => {
      try {
        const data = await atencionesService.getAllWithAlertas();
        setAtenciones(data);
      } catch (error) {
        console.error('Error fetching atenciones:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAtenciones();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Atenciones</h1>
          <p className="text-muted-foreground">Cargando atenciones...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Atenciones</h1>
          <p className="text-muted-foreground">Gestiona las asignaciones de personal policial a las alertas.</p>
        </div>
        <DataTable columns={columns} data={atenciones} />
      </div>
    </div>
  );
}
