import { useEffect, useState } from "react";
import axios from "axios";
import RecipeGrid from "./RecipeGrid";

const RandomRecipes = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchUniqueRecipes = async () => {
      const recetasUnicas = new Map();
      while (recetasUnicas.size < 4) {
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        const receta = res.data.meals[0];
        recetasUnicas.set(receta.idMeal, receta);
      }
      setRecetas(Array.from(recetasUnicas.values()));
    };
    fetchUniqueRecipes();
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
