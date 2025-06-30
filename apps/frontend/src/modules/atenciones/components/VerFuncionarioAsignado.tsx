import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, User, Car, Radio, Loader2, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FuncionarioAsignado {
  id: number;
  id_atencion: number;
  id_funcionario: string;
  encargado: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface AsignacionData {
  id: number;
  usuario_despachador: number;
  id_vehiculo: string;
  sigla_radio: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  atencion_funcionario: FuncionarioAsignado[];
}

interface VerFuncionarioAsignadoProps {
  isOpen: boolean;
  onClose: () => void;
  idAlerta: number;
}

export function VerFuncionarioAsignado({ isOpen, onClose, idAlerta }: VerFuncionarioAsignadoProps) {
  const [asignacion, setAsignacion] = useState<AsignacionData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  // Función para obtener la atención por ID de alerta
  const fetchAsignacion = async () => {
    setIsLoading(true);
    setError('');
    try {
      // Limpiar el ID de la alerta (extraer solo el número antes de los dos puntos si existe)
      const cleanIdAlerta = String(idAlerta).split(':')[0];
      console.log('ID Alerta original:', idAlerta);
      console.log('ID Alerta limpio:', cleanIdAlerta); // Endpoint corregido para usar ID en lugar de UUID - usando variable de entorno
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/alertas/${cleanIdAlerta}/atencion`);

      if (!response.ok) {
        throw new Error('Error al obtener la asignación');
      }

      const data = await response.json();
      console.log('Datos recibidos:', data);
      setAsignacion(data);
    } catch (error: any) {
      console.error('Error al cargar la asignación:', error);
      setError(error.message || 'Error al cargar los datos');
      setAsignacion(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Cargar datos cuando se abre el modal
  useEffect(() => {
    if (isOpen && idAlerta) {
      fetchAsignacion();
    }
  }, [isOpen, idAlerta]);

  // Obtener funcionario principal
  const funcionarioPrincipal = asignacion?.atencion_funcionario?.find((f) => f.encargado);
  const funcionariosApoyo = asignacion?.atencion_funcionario?.filter((f) => !f.encargado) || [];
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Personal Policial Asignado
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {isLoading && (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-6 w-6 animate-spin mr-2" />
              <span>Cargando información...</span>
            </div>
          )}

          {error && (
            <Card>
              <CardContent className="flex items-center gap-2 p-4">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <span className="text-destructive">{error}</span>
              </CardContent>
            </Card>
          )}

          {asignacion && !isLoading && (
            <>
              {/* Funcionario Principal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Funcionario Principal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-medium">{funcionarioPrincipal ? funcionarioPrincipal.id_funcionario : 'No asignado'}</div>
                  <Badge variant="secondary" className="mt-2">
                    Responsable principal del caso
                  </Badge>
                </CardContent>
              </Card>

              {/* Funcionarios de Apoyo */}
              <Card>
                <CardHeader>
                  <CardTitle>Funcionarios de Apoyo</CardTitle>
                </CardHeader>
                <CardContent>
                  {funcionariosApoyo.length > 0 ? (
                    <div className="space-y-2">
                      {funcionariosApoyo.map((funcionario) => (
                        <div key={funcionario.id} className="p-3 border rounded">
                          <div className="font-medium">{funcionario.id_funcionario}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No hay funcionarios de apoyo asignados</p>
                  )}
                </CardContent>
              </Card>

              <Separator />

              {/* Información del Vehículo y Radio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="h-4 w-4" />
                      Vehículo Asignado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium">{asignacion.id_vehiculo || 'No asignado'}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Radio className="h-4 w-4" />
                      Sigla de Radio
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium">{asignacion.sigla_radio || 'No asignado'}</div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-end pt-4">
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
