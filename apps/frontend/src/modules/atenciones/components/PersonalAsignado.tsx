import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Shield, User, Phone, Calendar, Clock, Car, Radio } from 'lucide-react';
import { FuncionarioBackend, formatDateTime } from '../../funcionarios/types/Funcionario';
import { AsignacionModal } from './AsignacionModal';
import { useAtencionPorAlertaId } from '../hooks/useAtencionPorAlerta';
import { useFuncionarios } from '../../funcionarios/hooks/useFuncionarios';

interface PersonalAsignadoProps {
  alertaUuid: string;
  idAlerta: number;
  estado: string;
}

export function PersonalAsignado({ alertaUuid, idAlerta, estado }: PersonalAsignadoProps) {
  // Hook propio para manejar los datos de atención
  const { atencion, loading, error, refetch } = useAtencionPorAlertaId(idAlerta, estado);

  const { funcionarios } = useFuncionarios();

  if (loading) {
    return (
      <Card className="col-span-1">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="size-5 text-orange-600" />
            <CardTitle className="text-lg">PERSONAL QUE VA A ATENDER</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-8">
            <div className="animate-pulse">
              <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Cargando información de la atención...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="col-span-1">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="size-5 text-orange-600" />
            <CardTitle className="text-lg">PERSONAL QUE VA A ATENDER</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-8">
            <Shield className="h-12 w-12 text-red-500 mx-auto mb-2" />
            <p className="text-red-500 mb-4">Error al cargar la información</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!atencion || !atencion.atencion_funcionario || atencion.atencion_funcionario.length === 0) {
    return (
      <Card className="col-span-1">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="size-5 text-orange-600" />
            <CardTitle className="text-lg">PERSONAL QUE VA A ATENDER</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Shield className="size-14 text-muted-foreground mx-auto mt-10" />
          <p className="text-muted-foreground text-center mb-4">No hay personal asignado a esta alerta</p>
          <div className="w-max mx-auto py-8">
            <AsignacionModal idAlerta={idAlerta} alertaUuid={alertaUuid} estado={estado} onAsignacionCompleta={refetch} />
          </div>
        </CardContent>
      </Card>
    );
  }

  // Obtener los funcionarios asignados de la atención
  const funcionariosAsignados = atencion.atencion_funcionario
    .map((af) => {
      const funcionario = funcionarios.find((f) => f.id === af.id_funcionario);
      return funcionario ? { funcionario, atencionFuncionario: af } : null;
    })
    .filter(Boolean) as { funcionario: FuncionarioBackend; atencionFuncionario: any }[];

  const funcionarioEncargado = funcionariosAsignados.find((f) => f.atencionFuncionario.encargado);
  const otrosFuncionarios = funcionariosAsignados.filter((f) => !f.atencionFuncionario.encargado);

  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Shield className="size-5 text-primary" />
          <CardTitle className="text-lg">PERSONAL DE AVANCE</CardTitle>
          {/* Fecha de asignación */}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Asignado el {formatDateTime(atencion.created_at.toString())}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Funcionario encargado */}
        {funcionarioEncargado && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium text-muted-foreground">Funcionario</h4>
              <Badge variant="default" className="bg-primary text-primary-foreground">
                Encargado
              </Badge>
            </div>
            <div className="flex items-center gap-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg">
              <Avatar className="h-12 w-12">
                <AvatarImage src="" alt="Funcionario" />
                <AvatarFallback className="bg-primary/20 dark:bg-primary/30 text-primary dark:text-primary text-sm font-semibold">
                  {funcionarioEncargado.funcionario.nombres?.charAt(0) || 'F'}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  {funcionarioEncargado.funcionario.grado} {funcionarioEncargado.funcionario.nombres}{' '}
                  {funcionarioEncargado.funcionario.ap_paterno}
                </h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{funcionarioEncargado.funcionario.ci}</span>
                  </div>
                  {funcionarioEncargado.funcionario.telefono && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{funcionarioEncargado.funcionario.telefono}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Otros funcionarios */}
        {otrosFuncionarios.length > 0 && (
          <>
            {funcionarioEncargado && <Separator />}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">Personal de Apoyo ({otrosFuncionarios.length})</h4>
              <div className="space-y-2">
                {otrosFuncionarios.map((item) => (
                  <div key={item.atencionFuncionario.id} className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" alt="Funcionario" />
                      <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs">
                        {item.funcionario.nombres?.charAt(0) || 'F'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {item.funcionario.grado} {item.funcionario.nombres} {item.funcionario.ap_paterno}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">{item.funcionario.ci}</span>
                        {item.funcionario.telefono && (
                          <span className="text-xs text-muted-foreground">{item.funcionario.telefono}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        <Separator />
        <h4 className="text-sm font-medium text-muted-foreground">Recursos</h4>
        {/* Información de recursos asignados */}
        <div className="grid grid-cols-2 gap-4 p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Car className="h-4 w-4 text-blue-600" />
            <div>
              <p className="text-xs text-muted-foreground">Vehículo</p>
              <p className="text-sm font-medium">{atencion.id_vehiculo}</p>
            </div>
          </div>
          {atencion.sigla_radio && (
            <div className="flex items-center gap-2">
              <Radio className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-xs text-muted-foreground">Radio</p>
                <p className="text-sm font-medium">{atencion.sigla_radio}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
