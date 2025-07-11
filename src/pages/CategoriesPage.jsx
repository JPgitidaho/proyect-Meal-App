import { useParams } from "react-router-dom";
import useRecetasLista from "../hooks/useRecetasLista";
import RecipeCard from "../cards/RecipeCard";
import GridLayout from "../components/GridLayout";

const CategoriesPage = () => {
  const { nombre } = useParams();
  const { recetas, cargando } = useRecetasLista("categoria", nombre);

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-[#586833]">
          Recetas de {nombre}
        </h2>

        {cargando ? (
          <p className="text-gray-600 text-center">Cargando recetas...</p>
        ) : (
          <GridLayout>
            {recetas.map((receta) => (
              <RecipeCard
                key={receta.idMeal}
                receta={receta}
                showArea={false}
                showCategory={true}
              />
            ))}
          </GridLayout>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
