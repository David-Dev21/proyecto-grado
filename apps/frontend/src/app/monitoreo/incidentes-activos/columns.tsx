"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  MoreHorizontal,
  MapPin,
  Clock,
  Phone,
  User,
} from "lucide-react";
import { Incidente } from "@/types/Incidente";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Función para obtener el color del badge según el estado
const getEstadoVariant = (estado: string) => {
  switch (estado) {
    case "EN_PELIGRO":
      return "destructive";
    case "EN_CAMINO":
      return "default";
    case "ATENDIDO":
      return "secondary";
    case "CERRADO":
      return "outline";
    default:
      return "secondary";
  }
};

// Función para obtener el color del badge según la prioridad
const getPrioridadVariant = (prioridad: string) => {
  switch (prioridad) {
    case "ALTA":
      return "destructive";
    case "MEDIA":
      return "default";
    case "BAJA":
      return "secondary";
    default:
      return "secondary";
  }
};

export const columns: ColumnDef<Incidente>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Seleccionar todas"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Seleccionar fila"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nro_caso",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nº Caso
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("nro_caso")}</div>
    ),
  },
  {
    accessorKey: "persona",
    header: "Persona",
    cell: ({ row }) => {
      const persona = row.original.persona;
      return (
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="font-medium">
              {persona.nombres} {persona.ap_paterno} {persona.ap_materno}
            </div>
            <div className="text-sm text-muted-foreground">
              CI: {persona.ci}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "fecha_hora",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha/Hora
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const fechaHora = new Date(row.getValue("fecha_hora"));
      return (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="font-medium">
              {fechaHora.toLocaleDateString("es-ES")}
            </div>
            <div className="text-sm text-muted-foreground">
              {fechaHora.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      const estado = row.getValue("estado") as string;
      return (
        <Badge variant={getEstadoVariant(estado)}>
          {estado.replace("_", " ")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "prioridad",
    header: "Prioridad",
    cell: ({ row }) => {
      const prioridad = row.getValue("prioridad") as string;
      return (
        <Badge variant={getPrioridadVariant(prioridad)}>{prioridad}</Badge>
      );
    },
  },
  {
    accessorKey: "tiempo_transcurrido",
    header: "Tiempo",
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        {row.getValue("tiempo_transcurrido")}
      </div>
    ),
  },
  {
    accessorKey: "persona.celular",
    header: "Contacto",
    cell: ({ row }) => {
      const persona = row.original.persona;
      return (
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="font-medium">{persona.celular}</div>
            <div className="text-sm text-muted-foreground">
              {persona.empresa_telefonica}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "ubicacion",
    header: "Ubicación",
    cell: ({ row }) => {
      const ubicacion = row.original.ubicacion;
      if (!ubicacion) return <div className="text-muted-foreground">N/A</div>;

      return (
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <div className="text-sm">
            <div>{ubicacion.latitud.toFixed(4)}</div>
            <div>{ubicacion.longitud.toFixed(4)}</div>
          </div>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const incidente = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(incidente.id)}
            >
              Copiar ID del incidente
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
            <DropdownMenuItem>Ver ubicación</DropdownMenuItem>
            <DropdownMenuItem>Historial</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Asignar funcionario</DropdownMenuItem>
            <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
