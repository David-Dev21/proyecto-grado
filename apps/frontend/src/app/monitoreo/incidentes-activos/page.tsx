import { columns } from "./columns";
import { DataTable } from "./data-table";
import { incidentes, Incidente } from "@/types/Incidente";

async function getData(): Promise<Incidente[]> {
  // En un caso real, aquí harías fetch a tu API
  // Por ejemplo: const response = await fetch('/api/incidentes-activos');
  // return response.json();

  // Por ahora retornamos datos de ejemplo
  return incidentes;
}

export default async function IncidentesActivosPage() {
  const data = await getData();

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Incidentes Activos
          </h1>
          <p className="text-muted-foreground">
            Monitoreo en tiempo real de alertas y incidentes de seguridad
          </p>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
