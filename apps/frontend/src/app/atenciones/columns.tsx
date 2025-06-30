import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal, User, Truck, Radio, CheckCircle } from 'lucide-react';
import { AtencionBackend, formatDateTime } from '@/modules/atenciones/types/Atencion';
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
    header: 'Número de Caso',
    cell: ({ row }) => {
      const alerta = row.original.alerta;
      if (!alerta || !alerta.nro_caso) {
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
            <div className="font-medium">Caso: {alerta.nro_caso}</div>
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
    header: 'Funcionarios',
    cell: ({ row }) => {
      const funcionarios = row.original.atencion_funcionario || [];
      const encargado = funcionarios.find((f) => f.encargado);
      const totalFuncionarios = funcionarios.length;

      return (
        <div className="space-y-1">
          <div className="text-sm font-medium">Total: {totalFuncionarios}</div>
          {encargado && (
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3 text-green-600" />
              <span className="text-xs text-muted-foreground">Encargado asignado</span>
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Fecha Creación
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const fecha = row.getValue('created_at') as string;
      return <div className="text-sm">{formatDateTime(fecha)}</div>;
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
            <DropdownMenuLabel> Acciones</DropdownMenuLabel>
            {atencion.uuid && (
              <DropdownMenuItem asChild>
                <Link href={`/alertas/${atencion.uuid}`}>Ver alerta relacionada</Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
