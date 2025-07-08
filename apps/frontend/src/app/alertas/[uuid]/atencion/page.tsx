'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Shield, Loader2, UserPlus, AlertCircle, ArrowLeft, AlertTriangle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { funcionariosService } from '@/modules/funcionarios/services/funcionarioService';
import { FuncionarioBackend, formatFuncionarioName } from '@/modules/funcionarios/types/Funcionario';
import { CrearFuncionarioDialog } from '@/modules/funcionarios/components/CrearFuncionarioDialog';
import { alertasService } from '@/modules/alertas/services/alertaService';
import { AlertaBackend } from '@/modules/alertas/types/Alerta';

const personalPolicialSchema = z.object({
  funcionario_principal: z.string().min(1, 'Seleccione un funcionario'),
  funcionarios_apoyo: z.array(z.string()),
  id_vehiculo: z.string().min(1, 'Campo requerido'),
  sigla_radio: z.string().min(1, 'Campo requerido'),
});

type PersonalPolicialFormData = z.infer<typeof personalPolicialSchema>;

interface PersonalPolicial {
  id: string;
  nombre: string;
  grado: string;
}

interface AsignacionBackendData {
  id_alerta: number;
  usuario_despachador: number;
  id_vehiculo: string;
  sigla_radio: string;
  funcionarios: Array<{
    id_funcionario: string;
    encargado: boolean;
  }>;
}

export default function AsignacionPersonalPage() {
  const params = useParams();
  const router = useRouter();
  const alertaUuid = params.uuid as string;

  const [alerta, setAlerta] = useState<AlertaBackend | null>(null);
  const [personalPolicial, setPersonalPolicial] = useState<PersonalPolicial[]>([]);
  const [isLoadingPersonal, setIsLoadingPersonal] = useState(false);
  const [isLoadingAlerta, setIsLoadingAlerta] = useState(true);
  const [errorPersonal, setErrorPersonal] = useState<string>('');
  const [errorAlerta, setErrorAlerta] = useState<string>('');
  const [isAssigning, setIsAssigning] = useState(false);
  const [isCrearFuncionarioOpen, setIsCrearFuncionarioOpen] = useState(false);

  const form = useForm<PersonalPolicialFormData>({
    resolver: zodResolver(personalPolicialSchema),
    defaultValues: {
      funcionario_principal: '',
      funcionarios_apoyo: [],
      id_vehiculo: '',
      sigla_radio: '',
    },
    mode: 'onChange',
  });

  // Cargar datos de la alerta
  const fetchAlerta = async () => {
    setIsLoadingAlerta(true);
    setErrorAlerta('');
    try {
      const alertaData = await alertasService.getById(alertaUuid);
      setAlerta(alertaData);
    } catch (error: any) {
      console.error('Error al cargar la alerta:', error);
      setErrorAlerta('Error al cargar la información de la alerta');
    } finally {
      setIsLoadingAlerta(false);
    }
  };

  // Cargar funcionarios
  const fetchPersonalPolicial = async () => {
    setIsLoadingPersonal(true);
    setErrorPersonal('');
    try {
      const funcionarios = await funcionariosService.getAll();

      const personalTransformado: PersonalPolicial[] = funcionarios.map((funcionario) => ({
        id: funcionario.id,
        nombre: formatFuncionarioName(funcionario),
        grado: funcionario.grado,
      }));

      setPersonalPolicial(personalTransformado);
    } catch (error: any) {
      console.error('Error al cargar el personal policial:', error);
      setPersonalPolicial([]);
      setErrorPersonal('Error al cargar el personal policial desde el servidor');
    } finally {
      setIsLoadingPersonal(false);
    }
  };

  useEffect(() => {
    fetchAlerta();
    fetchPersonalPolicial();
  }, [alertaUuid]);

  const findFuncionarioByName = (nombreCompleto: string): string | null => {
    const funcionario = personalPolicial.find((p) => p.nombre === nombreCompleto);
    return funcionario ? funcionario.id : null;
  };

  const onSubmit = async (data: PersonalPolicialFormData) => {
    if (!alerta) return;

    setIsAssigning(true);

    try {
      const backendData: AsignacionBackendData = {
        id_alerta: parseInt(alerta.id),
        usuario_despachador: 1, // TODO: Obtener del contexto de usuario
        id_vehiculo: data.id_vehiculo,
        sigla_radio: data.sigla_radio,
        funcionarios: [],
      };

      // Agregar funcionario principal
      const uuidPrincipal = findFuncionarioByName(data.funcionario_principal);
      if (uuidPrincipal) {
        backendData.funcionarios.push({
          id_funcionario: uuidPrincipal,
          encargado: true,
        });
      }

      // Agregar funcionarios de apoyo
      data.funcionarios_apoyo.forEach((funcionarioApoyo) => {
        const uuidApoyo = findFuncionarioByName(funcionarioApoyo);
        if (uuidApoyo) {
          backendData.funcionarios.push({
            id_funcionario: uuidApoyo,
            encargado: false,
          });
        }
      });

      console.log('Datos a enviar al backend:', backendData);

      // Enviar la asignación
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/atenciones`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendData),
      });

      if (response.ok) {
        console.log('Personal policial asignado exitosamente');
        // Redirigir de vuelta a la página de la alerta con un mensaje de éxito
        router.push(`/alertas/${alertaUuid}?success=asignacion`);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error al asignar personal policial:', errorData);
        throw new Error(`Error al asignar personal policial: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error en la asignación:', error);
      // Aquí podrías mostrar un toast de error
    } finally {
      setIsAssigning(false);
    }
  };

  const handleFuncionarioCreado = (funcionario: FuncionarioBackend) => {
    fetchPersonalPolicial();
  };

  if (isLoadingAlerta) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin mr-2" />
          <span>Cargando información de la alerta...</span>
        </div>
      </div>
    );
  }

  if (errorAlerta || !alerta) {
    return (
      <div className="container mx-auto p-8">
        <Card>
          <CardContent className="flex items-center gap-2 p-8 text-center">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <div>
              <h3 className="text-lg font-semibold">Error al cargar la alerta</h3>
              <p className="text-muted-foreground">{errorAlerta || 'Alerta no encontrada'}</p>
              <Button variant="outline" onClick={() => router.push('/alertas')} className="mt-4">
                Volver a Alertas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 space-y-6">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-muted-foreground">
        <button onClick={() => router.push('/alertas')} className="hover:text-foreground transition-colors">
          Alertas
        </button>
        <span className="mx-2">/</span>
        <button onClick={() => router.push(`/alertas/${alertaUuid}`)} className="hover:text-foreground transition-colors">
          {alerta.nro_caso}
        </button>
        <span className="mx-2">/</span>
        <span className="text-foreground">Asignación de Personal</span>
      </nav>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.push(`/alertas/${alertaUuid}`)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <div>
            <h1 className="flex gap-2 items-center text-2xl font-bold text-foreground">
              <Shield className="h-7 w-7 text-blue-600" />
              Asignación de Personal Policial
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              Alerta: {alerta.nro_caso}
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de asignación */}
      <Card>
        <CardHeader>
          <CardTitle>Detalles de la Asignación</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Columna izquierda - Personal */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Policial</h3>

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
                              {personalPolicial.length === 0 && !isLoadingPersonal && !errorPersonal ? (
                                <div className="p-4 text-center text-muted-foreground">
                                  <AlertCircle className="h-4 w-4 mx-auto mb-2" />
                                  <p>No hay funcionarios registrados</p>
                                </div>
                              ) : (
                                personalPolicial.map((oficial) => (
                                  <SelectItem key={oficial.id} value={oficial.nombre}>
                                    {oficial.nombre}
                                  </SelectItem>
                                ))
                              )}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                        {errorPersonal && <p className="text-sm text-destructive">{errorPersonal}</p>}
                        {personalPolicial.length === 0 && !isLoadingPersonal && !errorPersonal && (
                          <div className="mt-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => setIsCrearFuncionarioOpen(true)}
                              className="w-full"
                            >
                              <UserPlus className="mr-2 h-4 w-4" />
                              Crear Nuevo Funcionario
                            </Button>
                          </div>
                        )}
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
                                    const funcionarioCompleto = oficial.nombre;
                                    return (
                                      funcionarioCompleto !== form.watch('funcionario_principal') &&
                                      !field.value.includes(funcionarioCompleto)
                                    );
                                  })
                                  .map((oficial) => (
                                    <SelectItem key={`apoyo-${oficial.id}`} value={oficial.nombre}>
                                      {oficial.nombre}
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
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Recursos</h3>

                  {/* ID de vehículo */}
                  <FormField
                    control={form.control}
                    name="id_vehiculo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ID del Vehículo *</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Ej: VEH-001" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Sigla de radio */}
                  <FormField
                    control={form.control}
                    name="sigla_radio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sigla de Radio *</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Ej: RAD-001" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Botones */}
              <div className="flex justify-end gap-4 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => router.push(`/alertas/${alertaUuid}`)}>
                  Cancelar
                </Button>

                {personalPolicial.length === 0 && !isLoadingPersonal && (
                  <Button type="button" variant="outline" onClick={() => setIsCrearFuncionarioOpen(true)}>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Crear Funcionario
                  </Button>
                )}

                <Button
                  type="submit"
                  disabled={isAssigning || !form.watch('funcionario_principal')?.trim() || !form.formState.isValid}
                  className="min-w-[120px]"
                >
                  {isAssigning ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Asignando...
                    </>
                  ) : (
                    'Asignar Personal'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Diálogo para crear nuevo funcionario */}
      <CrearFuncionarioDialog
        isOpen={isCrearFuncionarioOpen}
        onClose={() => setIsCrearFuncionarioOpen(false)}
        onFuncionarioCreado={handleFuncionarioCreado}
      />
    </div>
  );
}
