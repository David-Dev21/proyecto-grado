'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal, User, Clock } from 'lucide-react';
import { EventoBackend, formatDateTime, getTimeElapsed } from '@/modules/eventos/types/Evento';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { FuncionarioDisplay } from '@/components/funcionario/FuncionarioDisplay';
import { toast } from 'sonner';

// Función para enviar evento a ATT
const enviarAATT = async (evento: EventoBackend) => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
    const response = await fetch(`${backendUrl}/eventos/${evento.id}/enviar-att`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const result = await response.json();
    toast.success(result.message || 'Evento enviado a ATT exitosamente');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    toast.error(`Error al enviar evento a ATT: ${errorMessage}`);
  }
};

export const columns: ColumnDef<EventoBackend>[] = [
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
    accessorKey: 'alerta',
    header: 'Caso/Persona',
    cell: ({ row }) => {
      const alerta = row.original.alerta;
      if (!alerta) {
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
            <div className="font-medium">Caso: {alerta.nro_caso || 'Sin número'}</div>
            <div className="text-sm text-muted-foreground">
              {alerta.persona ? `${alerta.persona.nombres} ${alerta.persona.ap_paterno}`.trim() : 'Sin información de persona'}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'id_funcionario',
    header: 'Funcionario',
    cell: ({ row }) => {
      const funcionarioId = row.getValue('id_funcionario') as string;
      return <FuncionarioDisplay funcionarioId={funcionarioId} />;
    },
  },
  {
    accessorKey: 'comentario',
    header: 'Comentario',
    cell: ({ row }) => {
      const comentario = row.getValue('comentario') as string;
      if (!comentario) {
        return <span className="text-muted-foreground">Sin comentario</span>;
      }
      return (
        <div className="max-w-[400px]">
          <div className="text-sm" title={comentario}>
            {comentario}
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
      const fecha = row.getValue('fecha_hora') as string;
      const timeElapsed = getTimeElapsed(fecha);
      return (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="text-sm">{formatDateTime(fecha)}</div>
            <div className="text-xs text-muted-foreground">hace {timeElapsed}</div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const evento = row.original;

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
            {evento.alerta && (
              <DropdownMenuItem asChild>
                <Link href={`/alertas/${evento.alerta.uuid}`}>Ver alerta relacionada</Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => enviarAATT(evento)}>Enviar a ATT</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
