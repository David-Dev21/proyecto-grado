import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal, User, Truck, Radio, CheckCircle, Clock } from 'lucide-react';
import { AtencionBackend, formatDateTime, getTimeElapsed } from '@/modules/atenciones/types/Atencion';
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

export const columns: ColumnDef<AtencionBackend>[] = [
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
    accessorKey: 'id_vehiculo',
    header: 'Vehículo',
    cell: ({ row }) => {
      const vehiculo = row.getValue('id_vehiculo') as string;
      return (
        <div className="flex items-center space-x-2">
          <Truck className="h-4 w-4 text-muted-foreground" />
          <div className="font-medium">{vehiculo}</div>
        </div>
      );
    },
  },
  {
    accessorKey: 'sigla_radio',
    header: 'Radio',
    cell: ({ row }) => {
      const sigla = row.getValue('sigla_radio') as string;
      if (!sigla) {
        return <span className="text-muted-foreground">Sin asignar</span>;
      }
      return (
        <div className="flex items-center space-x-2">
          <Radio className="h-4 w-4 text-muted-foreground" />
          <div className="font-medium">{sigla}</div>
        </div>
      );
    },
  },
  {
    accessorKey: 'funcionarios',
    header: 'Funcionario Encargado',
    cell: ({ row }) => {
      const funcionarios = row.original.atencion_funcionario || [];
      const encargado = funcionarios.find((f) => f.encargado);

      if (!encargado || !encargado.id_funcionario) {
        return <span className="text-muted-foreground">Sin encargado</span>;
      }

      return <FuncionarioDisplay funcionarioId={encargado.id_funcionario} />;
    },
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Fecha/Hora
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const fecha = row.getValue('created_at') as string;
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
      const atencion = row.original;

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
            {atencion.alerta && atencion.alerta.uuid && (
              <DropdownMenuItem asChild>
                <Link href={`/alertas/${atencion.alerta.uuid}`}>Ver alerta relacionada</Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
