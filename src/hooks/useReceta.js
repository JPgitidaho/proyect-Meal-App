import { useEffect, useState } from "react";
import axios from "axios";

export function useReceta(id) {
  const [receta, setReceta] = useState(null);
  const [ingredientes, setIngredientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        const data = res.data.meals?.[0];
        if (data) {
          setReceta(data);
          setIngredientes(extraerIngredientes(data));
        }
      })
      .catch((error) => console.error("Error cargando receta:", error))
      .finally(() => setLoading(false));
  }, [id]);

  function extraerIngredientes(data) {
    const resultado = [];
    for (let i = 1; i <= 20; i++) {
      const nombre = data[`strIngredient${i}`];
      const cantidad = data[`strMeasure${i}`];
      if (nombre && nombre.trim() !== "") {
        resultado.push({ nombre: nombre.trim(), cantidad: cantidad?.trim() || "" });
      }
    }
    return resultado;
  }

  return { receta, ingredientes, loading };
}
