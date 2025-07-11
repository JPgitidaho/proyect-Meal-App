import { useEffect, useState } from "react";
import RecipeCard from "../cards/RecipeCard";
import GridLayout from "../components/GridLayout";

export default function AllCategories() {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategorias(data.categories || []))
      .catch((err) => console.error("Error al cargar categorías:", err))
      .finally(() => setCargando(false));
  }, []);

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-[#586833] text-center">
          All Categories
        </h1>

        {cargando ? (
          <p className="text-gray-600 text-center">Loading recipes...</p>
        ) : (
          <GridLayout>
            {categorias.map((categoria) => (
              <RecipeCard
                key={categoria.idCategory}
                title={categoria.strCategory}
                image={categoria.strCategoryThumb}
                link={`/categoria/${categoria.strCategory}`}
                subtitle={categoria.strCategoryDescription?.slice(0, 50) + "..."}
              />
            ))}
          </GridLayout>
        )}
      </div>
    </div>
  );
}
