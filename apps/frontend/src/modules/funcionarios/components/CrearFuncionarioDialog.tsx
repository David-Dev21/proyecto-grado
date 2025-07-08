import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, UserPlus } from 'lucide-react';
import { funcionariosService } from '../services/funcionarioService';
import { CreateFuncionarioDto, FuncionarioBackend } from '../types/Funcionario';

const createFuncionarioSchema = z.object({
  grado: z.string().min(1, 'Seleccione un grado'),
  nombres: z.string().min(1, 'Ingrese los nombres'),
  ap_paterno: z.string().min(1, 'Ingrese el apellido paterno'),
  ap_materno: z.string().min(1, 'Ingrese el apellido materno'),
});

type CreateFuncionarioFormData = z.infer<typeof createFuncionarioSchema>;

interface CrearFuncionarioDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onFuncionarioCreado: (funcionario: FuncionarioBackend) => void;
}

const gradosDisponibles = ['Gral.', 'Crl.', 'Tcrl.', 'My.', 'Cap.', 'Tte.', 'Subtte.', 'Sgto.'];

export function CrearFuncionarioDialog({ isOpen, onClose, onFuncionarioCreado }: CrearFuncionarioDialogProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string>('');

  const form = useForm<CreateFuncionarioFormData>({
    resolver: zodResolver(createFuncionarioSchema),
    defaultValues: {
      grado: '',
      nombres: '',
      ap_paterno: '',
      ap_materno: '',
    },
  });

  const onSubmit = async (data: CreateFuncionarioFormData) => {
    setIsCreating(true);
    setError('');

    try {
      const createData: CreateFuncionarioDto = {
        grado: data.grado,
        nombres: data.nombres,
        ap_paterno: data.ap_paterno,
        ap_materno: data.ap_materno,
      };

      const response = await funcionariosService.create(createData);

      // Notificar al componente padre del nuevo funcionario
      onFuncionarioCreado(response.data);

      // Resetear formulario y cerrar dialog
      form.reset();
      onClose();
    } catch (error: any) {
      console.error('Error al crear funcionario:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error desconocido al crear el funcionario');
      }
    } finally {
      setIsCreating(false);
    }
  };

  const handleClose = () => {
    form.reset();
    setError('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Crear Nuevo Funcionario
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Grado */}
            <FormField
              control={form.control}
              name="grado"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grado *</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione un grado" />
                      </SelectTrigger>
                      <SelectContent>
                        {gradosDisponibles.map((grado) => (
                          <SelectItem key={grado} value={grado}>
                            {grado}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nombres */}
            <FormField
              control={form.control}
              name="nombres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombres *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ingrese los nombres" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Apellido Paterno */}
            <FormField
              control={form.control}
              name="ap_paterno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellido Paterno *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ingrese el apellido paterno" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Apellido Materno */}
            <FormField
              control={form.control}
              name="ap_materno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellido Materno *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ingrese el apellido materno" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && <div className="text-sm text-destructive bg-destructive/10 p-3 rounded">{error}</div>}

            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isCreating}>
                {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Crear Funcionario
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
