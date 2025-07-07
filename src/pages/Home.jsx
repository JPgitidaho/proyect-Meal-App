import { useEffect, useState } from "react";
import { searchMealsByName } from "../services/api";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    searchMealsByName("chicken").then(setMeals);
  }, []);

  return (
    <div>
      <SearchBar onSearch={setMeals} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {meals?.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}
