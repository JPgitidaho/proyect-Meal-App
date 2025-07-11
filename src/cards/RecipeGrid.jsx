import RecipeCard from "./RecipeCard";
import GridLayout from "../components/GridLayout";


const RecipeGrid = ({ recetas, renderItem }) => {
  return (
    <GridLayout>
      {recetas.map((receta) =>
        renderItem ? renderItem(receta) : <RecipeCard key={receta.idMeal} receta={receta} />
      )}
    </GridLayout>
  );
};

export default RecipeGrid;
