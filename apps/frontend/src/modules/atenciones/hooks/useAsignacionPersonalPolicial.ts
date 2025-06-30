import { useState } from "react";
import { AsignacionBackendData } from "./useAsignacionPersonal";

export interface PersonalPolicialData {
  despachadorTurno: string;
  policiaAsignado: string;
  apoyo: string;
  turnoServicio: string;
  medioTransporte: string;
  siglaVehiculo: string;
  siglaRadio: string;
  ubicacionInicialAvance: string;
}

export function useAsignacionPersonalPolicial() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAssigning, setIsAssigning] = useState(false);  const asignarPersonalPolicial = async (id: string, datos: AsignacionBackendData) => {
    setIsAssigning(true);
    try {
      // Usamos la URL correcta del backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/atenciones`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Personal policial asignado exitosamente");
        console.log("Datos enviados:", datos);
        console.log("Respuesta del servidor:", result);
        setIsDialogOpen(false);
        // Aquí podrías mostrar una notificación de éxito
        return true;
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error al asignar personal policial:", errorData);
        throw new Error(`Error al asignar personal policial: ${response.status}`);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      throw error;
    } finally {
      setIsAssigning(false);
    }
  };const abrirDialog = () => {
    setIsDialogOpen(true);
  };

  const cerrarDialog = () => {
    setIsDialogOpen(false);
  };

  return {
    isDialogOpen,
    isAssigning,
    asignarPersonalPolicial,
    abrirDialog,
    cerrarDialog,
  };
}
