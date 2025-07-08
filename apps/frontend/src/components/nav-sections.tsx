'use client';

import { type LucideIcon } from 'lucide-react';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import Link from 'next/link';

export function NavSections({
  secciones,
  titulo = 'Sección',
}: {
  secciones: {
    nombre: string;
    url: string;
    icono: LucideIcon;
  }[];
  titulo?: string;
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>{titulo}</SidebarGroupLabel>
      <SidebarMenu>
        {secciones.map((elemento) => (
          <SidebarMenuItem key={elemento.nombre}>
            <SidebarMenuButton asChild>
              <Link href={elemento.url}>
                <elemento.icono />
                <span>{elemento.nombre}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
