'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';

export default function InicializaPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState('Iniciando sesión...');
  const [error, setError] = useState<string | null>(null);
  const { setToken, setUserData, setSystemData } = useAuth();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const encodedData = searchParams.get('auth');

        if (!encodedData || !encodedData.length) {
          setError('No se encontraron datos de autenticación');
          return;
        }

        // Decodificar directamente en el cliente
        const authData = JSON.parse(atob(encodedData));
        console.log('Auth data:', authData);

        // Validar que los datos requeridos estén presentes
        if (!authData.access_token || !authData.userData || !authData.systemData) {
          throw new Error('Datos de autenticación incompletos');
        }

        const userData = {
          name: authData.userData.name,
          lastName: authData.userData.lastName,
          fullName: authData.userData.fullName,
          email: authData.userData.email,
          imageUser: authData.userData.imageUser,
          userId: authData.userData.userId,
          username: authData.userData.username,
          active: authData.userData.active,
          verified: authData.userData.verified,
          createdAt: authData.userData.createdAt,
          lastAccess: authData.userData.lastAccess,
          unidad: authData.userData.unidad,
        };

        const systemData = {
          name: authData.systemData.name,
          roles: authData.systemData.roles,
          modules: authData.systemData.modules,
          permissions: authData.systemData.permissions,
        };

        // Actualizar el store de Zustand inmediatamente
        setToken(authData.access_token);
        setUserData(userData);
        setSystemData(systemData);

        setStatus('Autenticación exitosa. Redirigiendo...');

        // Limpiar la URL y redirigir al dashboard
        // window.history.replaceState({}, document.title, window.location.pathname);

        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error decodificando datos de autenticación');
      }
    };

    initializeAuth();
  }, [searchParams, router, setToken, setUserData, setSystemData]);

  if (error) {
    return (
      <div className="absolute min-h-screen min-w-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold">Error de Autenticación</h2>
            <p className="text-muted-foreground">{error}</p>
            <Button onClick={() => router.push('/login')} className="w-full">
              Volver al Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="absolute min-h-screen min-w-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center space-y-6">
          <div className="text-6xl">🔐</div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-primary">FELCV</h1>
            <h2 className="text-xl font-semibold text-primary">Sistema de alertas de incidentes</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-medium">{status}</p>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
            <p className="text-sm text-muted-foreground">Por favor, espere un momento.</p>
            <Badge variant="secondary" className="text-xs">
              Procesando autenticación...
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
