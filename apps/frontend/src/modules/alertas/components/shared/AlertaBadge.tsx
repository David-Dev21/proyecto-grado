import { Badge } from '@/components/ui/badge';
import { EstadoAlerta, type EstadoAlertaType } from '../../types/alerta.enum';

interface AlertaBadgeProps {
  estado: EstadoAlertaType;
}

export function AlertaBadge({ estado }: AlertaBadgeProps) {
  const getEstadoBadgeColor = (estado: EstadoAlertaType) => {
    switch (estado) {
      case EstadoAlerta.EN_PELIGRO:
        return 'bg-red-500 hover:bg-red-600 text-white';
      case EstadoAlerta.CERRADA:
        return 'bg-green-500 hover:bg-green-600 text-white';
      case EstadoAlerta.EN_CAMINO:
        return 'bg-yellow-700 hover:bg-yellow-600 text-white';
      default:
        return 'bg-gray-500 hover:bg-gray-600 text-white';
    }
  };

  return <Badge className={getEstadoBadgeColor(estado)}>{estado.replace(/_/g, ' ')}</Badge>;
}
