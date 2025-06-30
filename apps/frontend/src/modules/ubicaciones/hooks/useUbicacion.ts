import { useState } from "react";

export function useUbicacion() {
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const obtenerUbicacion = async (uuid: string) => {
    setIsLoadingLocation(true);
    try {
      const response = await fetch(`/api/ubicacion/${uuid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Ubicación obtenida:", data);
        return data;
      } else {
        console.error("Error al obtener ubicación");
        throw new Error("Error al obtener ubicación");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      throw error;
    } finally {
      setIsLoadingLocation(false);
    }
  };

  return {
    obtenerUbicacion,
    isLoadingLocation,
  };
}
