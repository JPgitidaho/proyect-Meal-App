import { useEffect, useState } from "react";
import axios from "axios";

export default function useRecetasLista(tipo, valor) {
  const [recetas, setRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tipo || !valor) return;

    const endpoint = tipo === "categoria"
      ? `filter.php?c=${valor}`
      : tipo === "localidad"
      ? `filter.php?a=${valor}`
      : tipo === "listado"
      ? "list.php?a=list"
      : null;

    if (!endpoint) return;

    setCargando(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/${endpoint}`)
      .then((res) => {
        let data = res.data?.meals || [];

        if (tipo === "categoria") {
          data = data.map((receta) => ({
            ...receta,
            strCategory: valor,
            strArea: "Desconocido",
          }));
        } else if (tipo === "localidad") {
          data = data.map((receta) => ({
            ...receta,
            strArea: valor,
            strCategory: "Desconocida",
          }));
        }

        setRecetas(data);
      })
      .catch((err) => setError(err))
      .finally(() => setCargando(false));
  }, [tipo, valor]);

  return { recetas, cargando, error };
}
