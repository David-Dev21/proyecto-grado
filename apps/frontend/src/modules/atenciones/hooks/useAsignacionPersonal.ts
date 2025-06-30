import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import personalPolicialData from '@/data/personalPolicial.json';

interface PersonalPolicial {
  uuid: string;
  nombre: string;
  grado: string;
}

// Nueva interfaz para el backend
export interface AsignacionBackendData {
  id_alerta: number;
  usuario_despachador: number;
  id_vehiculo: string;
  sigla_radio: string;
  funcionarios: Array<{
    id_funcionario: string;
    encargado: boolean;
  }>;
}

// Schema de validación con Zod para el formulario
const personalPolicialSchema = z.object({
  funcionario_principal: z.string().min(1, 'Seleccione un funcionario'),
  funcionarios_apoyo: z.array(z.string()),
  id_vehiculo: z.string().min(1, 'Campo requerido'),
  sigla_radio: z.string().min(1, 'Campo requerido'),
});

type PersonalPolicialFormData = z.infer<typeof personalPolicialSchema>;

export interface UseAsignacionPersonalProps {
  isDialogOpen: boolean;
  idAlerta: number;
  usuarioDespachador: number;
  onAsignar: (datos: AsignacionBackendData) => void;
  onCloseDialog: () => void;
}

export function useAsignacionPersonal({
  isDialogOpen,
  idAlerta,
  usuarioDespachador,
  onAsignar,
  onCloseDialog,
}: UseAsignacionPersonalProps) {
  // React Hook Form setup
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

  const [personalPolicial, setPersonalPolicial] = useState<PersonalPolicial[]>([]);
  const [isLoadingPersonal, setIsLoadingPersonal] = useState(false);
  const [errorPersonal, setErrorPersonal] = useState<string>('');

  // Función para obtener la lista de personal policial (simulada con datos locales)
  const fetchPersonalPolicial = async () => {
    setIsLoadingPersonal(true);
    setErrorPersonal('');
    try {
      // Simular delay de red
      await new Promise((resolve) => setTimeout(resolve, 500));
      setPersonalPolicial(personalPolicialData);
    } catch (error: any) {
      console.error('Error al cargar el personal policial:', error);
      setPersonalPolicial([]);
      setErrorPersonal('Error al cargar el personal policial');
    } finally {
      setIsLoadingPersonal(false);
    }
  };

  // Obtener la lista de personal cuando se abre el diálogo
  useEffect(() => {
    if (isDialogOpen) {
      fetchPersonalPolicial();
    }
  }, [isDialogOpen]);

  // Función para encontrar un funcionario por uuid a partir de su nombre
  const findFuncionarioByName = (nombreCompleto: string): string | null => {
    const funcionario = personalPolicial.find((p) => `${p.grado} ${p.nombre}` === nombreCompleto);
    return funcionario ? funcionario.uuid : null;
  };

  // Funciones para manejar el formulario
  const onSubmit = (data: PersonalPolicialFormData) => {
    // Transformar los datos del formulario al formato del backend
    const backendData: AsignacionBackendData = {
      id_alerta: idAlerta,
      usuario_despachador: usuarioDespachador,
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
    onAsignar(backendData);
  };

  const handleCancel = () => {
    // Limpiar formulario al cancelar
    form.reset({
      funcionario_principal: '',
      funcionarios_apoyo: [],
      id_vehiculo: '',
      sigla_radio: '',
    });
    onCloseDialog();
  };

  return {
    form,
    personalPolicial,
    isLoadingPersonal,
    errorPersonal,
    onSubmit,
    handleCancel,
  };
}

// Exportar tipos para usar en el componente
export type { PersonalPolicialFormData };
