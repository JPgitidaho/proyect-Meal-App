import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../services/api";

export default function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    getMealById(id).then(setMeal);
  }, [id]);

  if (!meal) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} width={300} />
      <p>{meal.strInstructions}</p>
    </div>
  );
}
