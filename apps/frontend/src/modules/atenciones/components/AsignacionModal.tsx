import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Shield, Plus, UserPlus, Car, Radio, Loader2, Users } from 'lucide-react';
import { toast } from 'sonner';
import { useFuncionarios } from '../../funcionarios/hooks/useFuncionarios';
import { CrearFuncionarioDialog } from '../../funcionarios/components/CrearFuncionarioDialog';
import { atencionesService } from '../services/atencionService';
import { CreateAtencionDto } from '../types/Atencion';
import { useAlertaStore } from '../../alertas/stores/alertaStore';

const asignacionSchema = z.object({
  funcionario_principal: z.string().min(1, 'Seleccione un funcionario principal'),
  funcionarios_apoyo: z.array(z.string()).optional(),
  id_vehiculo: z.string().min(1, 'Ingrese el ID del vehículo'),
  sigla_radio: z.string().min(1, 'Ingrese la sigla de radio'),
});

type AsignacionFormData = z.infer<typeof asignacionSchema>;

interface AsignacionModalProps {
  idAlerta: number;
  alertaUuid: string;
  estado: string;
  onAsignacionCompleta?: () => void | Promise<void>;
}

export function AsignacionModal({ idAlerta, alertaUuid, onAsignacionCompleta }: AsignacionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAssigning, setIsAssigning] = useState(false);
  const [showCrearFuncionario, setShowCrearFuncionario] = useState(false);

  const { funcionarios, isLoading, fetchFuncionarios } = useFuncionarios();
  const { removerAlertaPendiente, establecerAlertaActiva, alertaActiva } = useAlertaStore();

  const form = useForm<AsignacionFormData>({
    resolver: zodResolver(asignacionSchema),
    defaultValues: {
      funcionario_principal: '',
      funcionarios_apoyo: [],
      id_vehiculo: '',
      sigla_radio: '',
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    form.reset();
  };

  const onSubmit = async (data: AsignacionFormData) => {
    try {
      setIsAssigning(true);

      // Preparar datos para el backend
      const asignacionData: CreateAtencionDto = {
        id_alerta: idAlerta,
        usuario_despachador: '1', // TODO: obtener del contexto de usuario autenticado
        id_vehiculo: data.id_vehiculo,
        sigla_radio: data.sigla_radio,
        funcionarios: [
          {
            id_funcionario: data.funcionario_principal,
            encargado: true,
          },
          ...(data.funcionarios_apoyo?.map((id) => ({
            id_funcionario: id,
            encargado: false,
          })) || []),
        ],
      };

      console.log('Creando atención:', asignacionData);

      // Llamada real al backend
      const response = await atencionesService.create(asignacionData);

      console.log('Atención creada exitosamente:', response);

      // Limpiar notificaciones del localStorage
      // Si la alerta activa es la que se está atendiendo, cerrar el modal
      if (alertaActiva?.uuid === alertaUuid) {
        establecerAlertaActiva(null);
      }

      // Remover la alerta de las notificaciones pendientes
      removerAlertaPendiente(alertaUuid);

      // Mostrar mensaje de éxito
      toast.success('Personal asignado correctamente', {
        description: 'La atención ha sido creada, el personal ha sido asignado y la alerta cambió a EN_CAMINO.',
      });

      setIsOpen(false);
      form.reset();

      // Refrescar la lista de funcionarios para mostrar los que fueron asignados
      fetchFuncionarios();

      // Refrescar la atención para mostrar los cambios
      if (onAsignacionCompleta) {
        await onAsignacionCompleta();
      }
    } catch (error) {
      console.error('Error al crear la atención:', error);

      // Mostrar mensaje de error específico
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      toast.error('Error al asignar personal', {
        description: `No se pudo crear la atención: ${errorMessage}`,
      });
    } finally {
      setIsAssigning(false);
    }
  };

  const funcionariosDisponibles = funcionarios.filter((f) => f.id !== form.watch('funcionario_principal'));

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button size="sm" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Asignar Personal
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Asignación de Personal Policial</DialogTitle>
            <p className="text-muted-foreground">Seleccione el personal y recursos para atender esta alerta</p>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Columna Izquierda: Personal */}
                <div className="space-y-4">
                  <h3 className="font-semibold border-b pb-2">Personal</h3>
                  {/* Funcionario Encargado */}
                  <div className="space-y-2">
                    <Label>Funcionario Encargado *</Label>
                    <div className="flex gap-2">
                      <FormField
                        control={form.control}
                        name="funcionario_principal"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccionar funcionario" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {funcionarios.length > 0 ? (
                                  funcionarios.map((funcionario) => (
                                    <SelectItem key={funcionario.id} value={funcionario.id}>
                                      {funcionario.grado} {funcionario.nombres} {funcionario.ap_paterno}
                                    </SelectItem>
                                  ))
                                ) : (
                                  <div className="p-2 text-sm text-muted-foreground">No hay funcionarios disponibles</div>
                                )}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button type="button" size="icon" onClick={() => setShowCrearFuncionario(true)}>
                              <UserPlus className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Crear nuevo funcionario</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  {/* Personal de Apoyo */}
                  <div className="space-y-2">
                    <Label>Personal de Apoyo (opcional)</Label>
                    <FormField
                      control={form.control}
                      name="funcionarios_apoyo"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={(value) => {
                              const current = field.value || [];
                              if (!current.includes(value)) {
                                field.onChange([...current, value]);
                              }
                            }}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Agregar funcionario de apoyo" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {funcionariosDisponibles.length > 0 ? (
                                funcionariosDisponibles.map((funcionario) => (
                                  <SelectItem key={funcionario.id} value={funcionario.id}>
                                    {funcionario.grado} {funcionario.nombres} {funcionario.ap_paterno}
                                  </SelectItem>
                                ))
                              ) : (
                                <div className="p-2 text-sm text-muted-foreground">
                                  No hay funcionarios disponibles para apoyo
                                </div>
                              )}
                            </SelectContent>
                          </Select>

                          {field.value && field.value.length > 0 && (
                            <div className="space-y-2 mt-2">
                              {field.value.map((funcionarioId) => {
                                const funcionario = funcionarios.find((f) => f.id === funcionarioId);
                                return funcionario ? (
                                  <div key={funcionarioId} className="flex items-center justify-between p-2 border rounded">
                                    <span className="text-sm">
                                      {funcionario.grado} {funcionario.nombres} {funcionario.ap_paterno}
                                    </span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => {
                                        field.onChange(field.value?.filter((id) => id !== funcionarioId));
                                      }}
                                    >
                                      ×
                                    </Button>
                                  </div>
                                ) : null;
                              })}
                            </div>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Columna Derecha: Recursos */}
                <div className="space-y-4">
                  <h3 className="font-semibold border-b pb-2">Recursos</h3>

                  {/* Vehículo */}
                  <FormField
                    control={form.control}
                    name="id_vehiculo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ID de Vehículo *</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: VEH-001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Radio */}
                  <FormField
                    control={form.control}
                    name="sigla_radio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sigla de Radio *</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: RADIO-01" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={isAssigning}>
                  {isAssigning ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Asignando...
                    </>
                  ) : (
                    'Asignar Personal'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Modal para crear funcionario */}
      <CrearFuncionarioDialog
        isOpen={showCrearFuncionario}
        onClose={() => setShowCrearFuncionario(false)}
        onFuncionarioCreado={() => {
          fetchFuncionarios();
          setShowCrearFuncionario(false);
          toast.success('Funcionario creado correctamente', {
            description: 'El nuevo funcionario está disponible para asignación.',
          });
        }}
      />
    </>
  );
}
