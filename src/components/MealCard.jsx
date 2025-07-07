import { Link } from "react-router-dom";

export default function MealCard({ meal }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: 200 }}>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="100%" />
      <h3>{meal.strMeal}</h3>
      <Link to={`/meal/${meal.idMeal}`}>Ver más</Link>
    </div>
  );
}
