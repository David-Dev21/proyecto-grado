'use client';

import * as React from 'react';
import { GalleryVerticalEnd, Home, Settings2 } from 'lucide-react';
import { NavSections } from '@/components/nav-sections';
import { NavUser } from '@/components/nav-user';
import { Team } from '@/components/team';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { useAuth } from '@/hooks/useAuth';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, system, isAuthenticated, isHydrated } = useAuth();

  // Mostrar loading mientras se hidrata
  if (!isHydrated) {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <div className="p-4">Cargando...</div>
        </SidebarHeader>
        <SidebarContent>
          <div className="p-4">Cargando datos...</div>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    );
  }

  // Datos dinámicos basados en la autenticación
  const sidebarData = {
    user: {
      name: user.fullName || user.name || 'Usuario',
      email: user.email || 'usuario@ejemplo.com',
      avatar: user.imageUser || '',
    },
    team: {
      name: user.unidadName || 'Sin Unidad Asignada',
      logo: GalleryVerticalEnd,
      plan: 'Unidad',
    },
    modules: system.modules.map((module) => ({
      name: module.name,
      url: module.path,
      icon: Home, // Se puede mapear diferentes iconos según el módulo
    })),
    sections: [
      // Solo mostrar si tiene rol de administrador
      ...(system.roles.some((role) => role.name === 'Administrador')
        ? [
            {
              name: 'Configuración',
              url: '/configuracion',
              icon: Settings2,
            },
          ]
        : []),
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Team team={sidebarData.team} />
      </SidebarHeader>
      <SidebarContent>
        {/* Módulos del sistema */}
        {sidebarData.modules.length > 0 && <NavSections sections={sidebarData.modules} />}

        {/* Secciones administrativas */}
        {sidebarData.sections.length > 0 && <NavSections sections={sidebarData.sections} />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
