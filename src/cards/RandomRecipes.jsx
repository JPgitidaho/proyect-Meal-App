import { useState, useEffect } from "react";
import axios from "axios";
import RecipeGrid from "./RecipeGrid";

const RandomRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const count = 4;

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const unique = new Map();

        while (unique.size < count) {
          const needed = count - unique.size;
          const requests = Array.from({ length: needed }, () =>
            axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
          );

          const responses = await Promise.all(requests);
          responses.forEach((res) => {
            const meal = res.data.meals?.[0];
            if (meal) unique.set(meal.idMeal, meal);
          });
        }

        setRecipes(Array.from(unique.values()));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
        <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl ml-10 font-bold mb-6 text-[#586833] ">Random Recipes</h2>

      {loading && <p className="text-gray-600 px-4">Loading recipes...</p>}
      {error && (
        <p className="text-red-500 px-4">
          Error al cargar recetas: {error.message}
        </p>
      )}

      {!loading && !error && <RecipeGrid recetas={recipes} />}
    </div>

    </div>
  );
};

export default RandomRecipes;
