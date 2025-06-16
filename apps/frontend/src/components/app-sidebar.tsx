"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Ruben David",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Policía Nacional",
      logo: GalleryVerticalEnd,
      plan: "Institutional",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navMain: [
    {
      title: "Monitoreo",
      icon: Bot,
      isActive: true,
      items: [
        {
          title: "Mapa de Incidentes",
          url: "/monitoreo/mapa-incidentes",
        },
        {
          title: "Incidentes Activos",
          url: "/monitoreo/incidentes-activos",
        },
        {
          title: "Eventos",
          url: "/monitoreo/eventos",
        },
      ],
    },
    {
      title: "Predicción de Incidentes",
      icon: BookOpen,
      items: [
        {
          title: "Mapa de Predicción",
          url: "/prediccion/mapa-prediccion",
        },
      ],
    },
    {
      title: "Gestión de Incidentes",
      icon: GalleryVerticalEnd,
      items: [
        {
          title: "Lista de Incidentes",
          url: "/incidentes/lista",
        },
        {
          title: "Historial de Incidentes",
          url: "/incidentes/historial",
        },
      ],
    },
    {
      title: "Reporte y Estadísticas",
      icon: PieChart,
      items: [
        {
          title: "Estadísticas",
          url: "/reportes/estadisticas",
        },
        {
          title: "Informes",
          url: "/reportes/informes",
        },
      ],
    },
    {
      title: "Settings",
      url: "/configuracion",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/configuracion/general",
        },
        {
          title: "Copias de Seguridad",
          url: "/configuracion/copias-seguridad",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
