const RecipeCard = ({ receta }) => (
  <div className="bg-white rounded-xl shadow-md w-72 mx-auto overflow-hidden hover:scale-105 transition-transform">
    <img
      src={receta.strMealThumb}
      alt={receta.strMeal}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg">{receta.strMeal}</h3>
      <p className="text-gray-500 text-sm mb-2">{receta.strCategory}</p>
    </div>
  </div>
);

export default RecipeCard;
