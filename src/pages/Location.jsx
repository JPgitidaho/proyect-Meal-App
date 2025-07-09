import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Location() {
  const { pais } = useParams();
  const [recetas, setRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerPorPais = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${pais}`);
        const data = await res.json();
        setRecetas(data.meals);
      } catch (error) {
        console.error("Error al cargar recetas por país:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerPorPais();
  }, [pais]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-[#586833] capitalize">
        Recetas de: {pais}
      </h1>

      {cargando ? (
        <p>Cargando recetas...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recetas?.map((receta) => (
            <div key={receta.idMeal} className="border p-4 rounded shadow">
              <img src={receta.strMealThumb} alt={receta.strMeal} className="w-full h-48 object-cover rounded" />
              <h2 className="text-xl mt-2 font-semibold">{receta.strMeal}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
