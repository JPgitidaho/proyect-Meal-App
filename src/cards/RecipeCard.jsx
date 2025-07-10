import { Link } from "react-router-dom";

const RecipeCard = ({ receta }) => {
  return (
    <Link
      to={`/receta/${receta.idMeal}`}
      className="bg-white shadow-md  overflow-hidden hover:scale-105 transition-transform flex flex-col"
    >
      <img
        src={receta.strMealThumb}
        alt={receta.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{receta.strMeal}</h3>
        <p className="text-sm text-gray-500">{receta.strArea} - {receta.strCategory}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
