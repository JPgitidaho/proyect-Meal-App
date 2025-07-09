import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeGrid from "../cards/RecipeGrid";

const CategoriesPage = () => {
  const { nombre } = useParams();
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nombre}`)
      .then((res) => setRecetas(res.data.meals || []));
  }, [nombre]);

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Recetas de {nombre}
      </h2>
      <RecipeGrid recetas={recetas} />
    </div>
  );
};

export default CategoriesPage;
