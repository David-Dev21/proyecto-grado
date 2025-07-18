'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal, Clock, Phone, User } from 'lucide-react';

import { type EstadoAlertaType } from '@alertas/types';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertaBadge } from '@/modules/alertas/components/shared/AlertaBadge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { AlertaBackend } from '@/modules/alertas/types/Alerta';

// Función auxiliar para calcular tiempo transcurrido
function getTimeElapsed(fechaHora: string): string {
  const now = new Date();
  const fecha = new Date(fechaHora);
  const diffMs = now.getTime() - fecha.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays} día${diffDays > 1 ? 's' : ''}`;
  } else if (diffHours > 0) {
    return `${diffHours} hora${diffHours > 1 ? 's' : ''}`;
  } else {
    return `${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''}`;
  }
}

export const columns: ColumnDef<AlertaBackend>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Seleccionar todas"
      />
    ),
    cell: ({ row }) => (
      <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Seleccionar fila" />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'persona',
    header: 'Persona',
    cell: ({ row }) => {
      const persona = row.original.persona;
      if (!persona) {
        return (
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Sin información</div>
            </div>
          </div>
        );
      }
      return (
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="font-medium">
              {persona.nombres} {persona.ap_paterno} {persona.ap_materno}
            </div>
            <div className="text-sm text-muted-foreground">CI: {persona.ci}</div>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: 'persona.celular',
    header: 'Contacto',
    cell: ({ row }) => {
      const persona = row.original.persona;
      if (!persona) {
        return (
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Sin información</div>
            </div>
          </div>
        );
      }
      return (
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="font-medium">{persona.celular}</div>
            <div className="text-sm text-muted-foreground">{persona.empresa_telefonica}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'fecha_hora',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Fecha/Hora
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const fechaHora = new Date(row.getValue('fecha_hora'));
      const timeElapsed = getTimeElapsed(row.getValue('fecha_hora'));
      return (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="text-sm">
              {fechaHora.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}{' '}
              {fechaHora.toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
            <div className="text-xs text-muted-foreground">hace {timeElapsed}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'estado',
    header: 'Estado',
    cell: ({ row }) => {
      const estado = row.getValue('estado') as EstadoAlertaType;
      return <AlertaBadge estado={estado} />;
    },
  },
  {
    accessorKey: 'nro_caso',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Nº Caso
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="font-medium">{row.getValue('nro_caso')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const alerta = row.original;

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
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={`/alertas/${alerta.uuid || alerta.id}`}>Ver detalles</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Asignar funcionario</DropdownMenuItem>
            <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // Filtro global para nombre, CI, celular y nro_caso
  {
    id: 'global',
    header: () => null,
    cell: () => null,
    enableHiding: false,
    filterFn: (row, _columnId, filterValue) => {
      if (!filterValue) return true;
      const persona = row.original.persona;
      if (!persona) return false;

      const nombreCompleto = `${persona.nombres} ${persona.ap_paterno} ${persona.ap_materno}`.toLowerCase();
      const ci = persona.ci?.toLowerCase() || '';
      const celular = persona.celular?.toLowerCase() || '';
      const codDenuncia = row.original.nro_caso?.toLowerCase() || '';
      const value = filterValue.toLowerCase();
      return nombreCompleto.includes(value) || ci.includes(value) || celular.includes(value) || codDenuncia.includes(value);
    },
  },
];
