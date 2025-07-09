import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recetas }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-12 px-2 md:px-8">
    {recetas.map((receta) => (
      <RecipeCard key={receta.idMeal} receta={receta} />
    ))}
  </div>
);

export default RecipeGrid;
