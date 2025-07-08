'use client';

import * as React from 'react';
import {
  GalleryVerticalEnd,
  Home,
  Settings2,
  BarChart3,
  MapPin,
  AlertTriangle,
  Shield,
  Calendar,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react';
import { NavSections } from '@/components/nav-sections';
import { NavUser } from '@/components/nav-user';
import { Team } from '@/components/team';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/hooks/useAuth';
import sidebarExampleData from '@/data/sidebar-example.json';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, system, isHydrated } = useAuth();

  // Mostrar loading mientras se hidrata
  if (!isHydrated) {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <div className="p-4">
            <Skeleton className="h-8 w-full" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <div className="p-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </SidebarContent>
        <SidebarFooter>
          <div className="p-4">
            <Skeleton className="h-10 w-full" />
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    );
  }

  // Mapeo de iconos por nombre
  const iconMap: Record<string, LucideIcon> = {
    Home,
    BarChart3,
    MapPin,
    AlertTriangle,
    Shield,
    Calendar,
    CheckCircle,
    Settings2,
  };

  // Función para obtener el icono por nombre
  const getIcon = (iconName?: string): LucideIcon => {
    return iconName && iconMap[iconName] ? iconMap[iconName] : Home;
  };

  // DATOS DE EJEMPLO - Descomenta para usar datos de prueba
  const sidebarData = {
    user: sidebarExampleData.user,
    team: {
      ...sidebarExampleData.team,
      logo: GalleryVerticalEnd,
    },
    modules: sidebarExampleData.modules.map((module) => ({
      ...module,
      icono: getIcon(module.icono),
    })),
    sections: sidebarExampleData.sections.map((section) => ({
      ...section,
      icono: getIcon(section.icono),
    })),
  };

  // DATOS DINÁMICOS - Comenta para usar datos de ejemplo
  // const sidebarData = {
  //   user: {
  //     name: user.fullName || user.name || 'Usuario',
  //     email: user.email || 'usuario@ejemplo.com',
  //     avatar: user.imageUser || '',
  //   },
  //   team: {
  //     name: user.unidadName || 'Sin Unidad Asignada',
  //     logo: GalleryVerticalEnd,
  //     plan: 'Unidad',
  //   },
  //   modules: system.modules.map((module) => ({
  //     nombre: module.name,
  //     url: module.path,
  //     icono: getIcon(module.iconName), // Asumiendo que el sistema tiene iconName
  //   })),
  //   sections: [
  //     // Solo mostrar si tiene rol de administrador
  //     ...(system.roles.some((role) => role.name === 'Administrador')
  //       ? [
  //           {
  //             nombre: 'Configuración',
  //             url: '/configuracion',
  //             icono: getIcon('Settings2'),
  //           },
  //         ]
  //       : []),
  //   ],
  // };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Team team={sidebarData.team} />
      </SidebarHeader>
      <SidebarContent>
        {/* Módulos del sistema */}
        {sidebarData.modules.length > 0 && <NavSections secciones={sidebarData.modules} titulo="Módulos" />}

        {/* Secciones administrativas */}
        {sidebarData.sections.length > 0 && <NavSections secciones={sidebarData.sections} titulo="Administración" />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
