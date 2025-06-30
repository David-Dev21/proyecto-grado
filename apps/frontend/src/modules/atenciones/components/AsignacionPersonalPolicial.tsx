import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Shield, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { VerFuncionarioAsignado } from './VerFuncionarioAsignado';
import { AsignacionBackendData, PersonalPolicialFormData, useAsignacionPersonal } from '../hooks/useAsignacionPersonal';

interface AsignacionPersonalPolicialProps {
  isDialogOpen: boolean;
  isAssigning: boolean;
  onOpenDialog: () => void;
  onCloseDialog: () => void;
  onAsignar: (datos: AsignacionBackendData) => void;
  idAlerta: number;
  usuarioDespachador: number;
  estado: string;
}

// Mantenemos la interfaz legacy para compatibilidad
export interface PersonalPolicialData extends PersonalPolicialFormData {}

export function AsignacionPersonalPolicial({
  isDialogOpen,
  isAssigning,
  onOpenDialog,
  onCloseDialog,
  onAsignar,
  idAlerta,
  usuarioDespachador,
  estado,
}: AsignacionPersonalPolicialProps) {
  const [isVerFuncionarioOpen, setIsVerFuncionarioOpen] = useState(false);

  // Usar el hook personalizado para toda la lógica de asignación
  const { form, personalPolicial, isLoadingPersonal, errorPersonal, onSubmit, handleCancel } = useAsignacionPersonal({
    isDialogOpen,
    idAlerta,
    usuarioDespachador,
    onAsignar,
    onCloseDialog,
  });

  // Determinar si debe mostrar el modal de ver funcionario o el de asignar
  const isReadOnlyMode = estado === 'EN_CAMINO' || estado === 'ATENDIDO';

  const handleButtonClick = () => {
    if (isReadOnlyMode) {
      setIsVerFuncionarioOpen(true);
    } else {
      onOpenDialog();
    }
  };
  return (
    <>
      <Button onClick={handleButtonClick} size="sm">
        <Shield className="size-4 mr-2" />
        {isReadOnlyMode ? 'Ver Funcionario Asignado' : 'Asignar Personal'}
      </Button>
      {/* Modal para ver funcionario asignado */}
      <VerFuncionarioAsignado isOpen={isVerFuncionarioOpen} onClose={() => setIsVerFuncionarioOpen(false)} idAlerta={idAlerta} />
      {/* Modal para asignar personal (solo cuando no está asignado) */}
      {!isReadOnlyMode && (
        <Dialog open={isDialogOpen} onOpenChange={onCloseDialog}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>
                {estado === 'EN_CAMINO' || estado === 'ATENDIDO' ? 'PERSONAL POLICIAL ASIGNADO' : 'PERSONAL POLICIAL DE AVANCE'}
              </DialogTitle>
              <DialogDescription>
                {estado === 'EN_CAMINO' || estado === 'ATENDIDO'
                  ? 'Información del personal policial ya asignado'
                  : 'Complete la información del personal policial asignado'}
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Columna izquierda - Personal */}
                <div className="space-y-4">
                  {/* Funcionario Principal */}
                  <FormField
                    control={form.control}
                    name="funcionario_principal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Funcionario Principal *</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange} disabled={isLoadingPersonal}>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={
                                  isLoadingPersonal
                                    ? 'Cargando...'
                                    : errorPersonal
                                    ? 'Error al cargar datos'
                                    : 'Seleccione un funcionario principal'
                                }
                              />
                            </SelectTrigger>
                            <SelectContent>
                              {personalPolicial.map((oficial) => (
                                <SelectItem key={oficial.uuid} value={`${oficial.grado} ${oficial.nombre}`}>
                                  {oficial.grado} {oficial.nombre}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                        {errorPersonal && <p className="text-sm text-destructive">{errorPersonal}</p>}
                      </FormItem>
                    )}
                  />
                  {/* Funcionarios de apoyo */}
                  <FormField
                    control={form.control}
                    name="funcionarios_apoyo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Funcionarios de Apoyo</FormLabel>
                        <div className="space-y-2">
                          <FormControl>
                            <Select
                              value=""
                              onValueChange={(value) => {
                                if (value && !field.value.includes(value)) {
                                  field.onChange([...field.value, value]);
                                }
                              }}
                              disabled={isLoadingPersonal}
                            >
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={
                                    isLoadingPersonal
                                      ? 'Cargando...'
                                      : errorPersonal
                                      ? 'Error al cargar datos'
                                      : 'Seleccione funcionarios de apoyo'
                                  }
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {personalPolicial
                                  .filter((oficial) => {
                                    const funcionarioCompleto = `${oficial.grado} ${oficial.nombre}`;
                                    return (
                                      funcionarioCompleto !== form.watch('funcionario_principal') &&
                                      !field.value.includes(funcionarioCompleto)
                                    );
                                  })
                                  .map((oficial) => (
                                    <SelectItem key={`apoyo-${oficial.uuid}`} value={`${oficial.grado} ${oficial.nombre}`}>
                                      {oficial.grado} {oficial.nombre}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          {field.value.length > 0 && (
                            <div>
                              <p className="text-sm font-medium text-foreground mb-2">Funcionarios de apoyo:</p>
                              <div className="space-y-1">
                                {field.value.map((funcionario: string) => (
                                  <div key={funcionario} className="flex justify-between items-center p-2 border rounded text-sm">
                                    <span>{funcionario}</span>
                                    <Button
                                      type="button"
                                      variant="destructive"
                                      size="sm"
                                      onClick={() => {
                                        field.onChange(field.value.filter((f: string) => f !== funcionario));
                                      }}
                                    >
                                      Quitar
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Columna derecha - Vehículo y Radio */}
                <div className="flex justify-between space-y-2 mt-4">
                  {/* ID de vehículo */}
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

                  {/* Sigla de Radio */}
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
              </form>
            </Form>
            <DialogFooter>
              <Button variant="secondary" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button
                onClick={form.handleSubmit(onSubmit)}
                disabled={isAssigning || !form.watch('funcionario_principal')?.trim() || !form.formState.isValid}
              >
                {isAssigning ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Asignando...
                  </>
                ) : (
                  'Aceptar'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
