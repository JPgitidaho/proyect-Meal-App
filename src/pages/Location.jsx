
import { useParams } from "react-router-dom";
import useRecetasLista from "../hooks/useRecetasLista";
import RecipeCard from "../cards/RecipeCard";
import GridLayout from "../components/GridLayout";

export default function Location() {
  const { pais } = useParams();
  const { recetas, cargando } = useRecetasLista("localidad", pais);

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#586833] capitalize">
          Recetas de {pais}
        </h1>

        {cargando ? (
          <p className="text-gray-600 text-center">Cargando recetas...</p>
        ) : (
          <GridLayout>
            {recetas?.map((receta) => (
              <RecipeCard
                key={receta.idMeal}
                receta={receta}
                showArea={true}
                showCategory={false}
              />
            ))}
          </GridLayout>
        )}
      </div>
    </div>
  );
}
