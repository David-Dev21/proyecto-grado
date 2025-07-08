import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAtencionPorAlertaId } from '@/modules/atenciones/hooks/useAtencionPorAlerta';
import { useFuncionarios } from '@/modules/funcionarios/hooks/useFuncionarios';
import { eventosService } from '../services/eventoService';

// Schema de validación que coincide con los campos que realmente necesitamos
const eventoSchema = z.object({
  comentario: z.string().min(10, 'El comentario debe tener al menos 10 caracteres'),
  fecha_hora: z.string().min(1, 'La fecha es requerida'),
});

type EventoFormData = z.infer<typeof eventoSchema>;

interface EventoFormProps {
  alertaId: string;
  onClose: () => void;
  onSaved?: () => void;
}

export function EventoForm({ alertaId, onClose, onSaved }: EventoFormProps) {
  const { funcionarios } = useFuncionarios();
  const [funcionarioEncargado, setFuncionarioEncargado] = useState<{
    id: string;
    nombres: string;
    grado: string;
  } | null>(null);

  // Obtener la atención para esta alerta para conseguir el funcionario encargado
  const { atencion } = useAtencionPorAlertaId(parseInt(alertaId), undefined);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EventoFormData>({
    resolver: zodResolver(eventoSchema),
    defaultValues: {
      comentario: '',
      fecha_hora: new Date().toLocaleString('sv-SE').replace(' ', 'T').slice(0, 16),
    },
  });

  // Cargar datos del funcionario encargado cuando se obtiene la atención
  useEffect(() => {
    if (atencion?.atencion_funcionario) {
      const funcionarioEncargadoData = atencion.atencion_funcionario.find((af) => af.encargado);
      if (funcionarioEncargadoData) {
        const funcionario = funcionarios.find((f) => f.id === funcionarioEncargadoData.id_funcionario);
        if (funcionario) {
          setFuncionarioEncargado({
            id: funcionario.id,
            nombres: `${funcionario.nombres} ${funcionario.ap_paterno}`.trim(),
            grado: funcionario.grado || '',
          });
        }
      }
    }
  }, [atencion, funcionarios]);

  const onSubmit = async (data: EventoFormData) => {
    try {
      if (!funcionarioEncargado) {
        alert('Error: No se pudo identificar el funcionario encargado');
        return;
      }

      // Preparar datos para el backend según el DTO esperado
      const eventoData = {
        id_alerta: parseInt(alertaId),
        id_funcionario: funcionarioEncargado.id,
        fecha_hora: new Date(data.fecha_hora).toISOString(),
        comentario: data.comentario,
      };

      console.log('Enviando datos del evento:', eventoData);

      const result = await eventosService.create(eventoData);

      console.log('Respuesta del servidor:', result);
      alert(result.message || 'Evento guardado correctamente');

      onSaved?.();
      onClose();
    } catch (error) {
      console.error('Error al guardar evento:', error);
      alert('Error al guardar el evento. Inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="funcionario_info">Funcionario Encargado</Label>
        <Input
          id="funcionario_info"
          value={funcionarioEncargado ? `${funcionarioEncargado.grado} ${funcionarioEncargado.nombres}` : 'Cargando...'}
          disabled
          className="bg-muted"
        />
        <p className="text-xs text-muted-foreground">Funcionario encargado</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fecha_hora">Fecha y Hora</Label>
        <Input id="fecha_hora" type="datetime-local" {...register('fecha_hora')} disabled className="bg-muted" />
        <p className="text-xs text-muted-foreground">Fecha y hora automática del momento del evento</p>
        {errors.fecha_hora && <p className="text-xs text-red-500">{errors.fecha_hora.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="comentario">Comentario</Label>
        <textarea
          id="comentario"
          {...register('comentario')}
          placeholder="Se ha comunicado con la red de contactos..."
          rows={4}
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        {errors.comentario && <p className="text-xs text-red-500">{errors.comentario.message}</p>}
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting || !funcionarioEncargado}>
          {isSubmitting ? 'Guardando...' : 'Guardar Evento'}
        </Button>
      </div>
    </form>
  );
}
