import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAtencionPorAlertaId } from '@/modules/atenciones/hooks/useAtencionPorAlerta';
import { useFuncionarios } from '@/modules/funcionarios/hooks/useFuncionarios';
import { cierreAlertasService } from '../services/cierreAlertaService';

const cierreAlertaSchema = z.object({
  comentario: z.string().min(10, 'El comentario debe tener al menos 10 caracteres'),
  fecha_hora: z.string().min(1, 'La fecha es requerida'),
  estado_victima: z.string().min(1, 'El estado de la víctima es requerido'),
  nombre_agresor: z.string().min(1, 'El nombre del agresor es requerido'),
  ci_agresor: z.string().min(1, 'El CI del agresor es requerido'),
});

type CierreAlertaFormData = z.infer<typeof cierreAlertaSchema>;

interface CierreAlertaFormProps {
  alertaId: string;
  onClose: () => void;
  onSaved?: () => void;
}

export function CierreAlertaForm({ alertaId, onClose, onSaved }: CierreAlertaFormProps) {
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
  } = useForm<CierreAlertaFormData>({
    resolver: zodResolver(cierreAlertaSchema),
    defaultValues: {
      comentario: '',
      fecha_hora: new Date().toLocaleString('sv-SE').replace(' ', 'T').slice(0, 16),
      estado_victima: '',
      nombre_agresor: '',
      ci_agresor: '',
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

  const onSubmit = async (data: CierreAlertaFormData) => {
    try {
      console.log('Datos del formulario recibidos:', data);

      if (!funcionarioEncargado) {
        alert('Error: No se pudo identificar el funcionario encargado');
        return;
      }

      // Validar que todos los campos requeridos estén presentes
      if (!data.comentario || !data.estado_victima || !data.nombre_agresor || !data.ci_agresor) {
        alert('Error: Todos los campos son requeridos');
        return;
      }

      // Preparar datos para el backend según el DTO esperado
      const cierreData = {
        id_alerta: parseInt(alertaId),
        id_funcionario: funcionarioEncargado.id,
        fecha_hora: new Date(data.fecha_hora).toISOString(),
        comentario: data.comentario,
        tipo_alerta: 'VIOLENCIA' as const, // Por defecto, puede ser modificado según la lógica de negocio
        estado_victima: data.estado_victima,
        nombre_agresor: data.nombre_agresor,
        ci_agresor: data.ci_agresor,
      };

      console.log('Enviando datos del cierre:', cierreData);

      const result = await cierreAlertasService.create(cierreData);

      console.log('Respuesta del servidor:', result);
      alert(result.message || 'Caso finalizado correctamente');

      onSaved?.();
      onClose();
    } catch (error) {
      console.error('Error completo al finalizar caso:', error);

      let errorMessage = 'Error al finalizar el caso. Inténtalo de nuevo.';

      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      }

      alert(errorMessage);
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
        <p className="text-xs text-muted-foreground">Funcionario encargado del caso</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fecha_hora">Fecha y Hora de Cierre</Label>
        <Input id="fecha_hora" type="datetime-local" {...register('fecha_hora')} disabled className="bg-muted" />
        <p className="text-xs text-muted-foreground">Fecha y hora automática del cierre</p>
        {errors.fecha_hora && <p className="text-xs text-red-500">{errors.fecha_hora.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="estado_victima">Estado de la Víctima</Label>
        <Input
          id="estado_victima"
          {...register('estado_victima')}
          placeholder="Estable, sin lesiones graves"
          className="w-full"
        />
        <p className="text-xs text-muted-foreground">Describe el estado actual de la víctima</p>
        {errors.estado_victima && <p className="text-xs text-red-500">{errors.estado_victima.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nombre_agresor">Nombre del Agresor</Label>
          <Input id="nombre_agresor" {...register('nombre_agresor')} placeholder="Juan Carlos Pérez López" className="w-full" />
          {errors.nombre_agresor && <p className="text-xs text-red-500">{errors.nombre_agresor.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ci_agresor">CI del Agresor</Label>
          <Input id="ci_agresor" {...register('ci_agresor')} placeholder="12345678" className="w-full" />
          {errors.ci_agresor && <p className="text-xs text-red-500">{errors.ci_agresor.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comentario">Comentario de Cierre</Label>
        <textarea
          id="comentario"
          {...register('comentario')}
          placeholder="Alerta cerrada exitosamente, víctima atendida y trasladada a centro médico..."
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
          {isSubmitting ? 'Finalizando...' : 'Finalizar Caso'}
        </Button>
      </div>
    </form>
  );
}
