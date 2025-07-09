import { useEffect, useState } from "react";
import axios from "axios";
import RecipeGrid from "./RecipeGrid";

const RandomRecipes = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
      axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
      axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
      axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
    ]).then((results) => {
      setRecetas(results.map((res) => res.data.meals[0]));
    });
  }, []);

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#586833]">Recetas Aleatorias</h2>
        <RecipeGrid recetas={recetas} />
      </div>
    </div>
  );
};

export default RandomRecipes;
