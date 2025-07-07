const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export async function searchMealsByName(name) {
  const res = await fetch(`${BASE_URL}search.php?s=${name}`);
  const data = await res.json();
  return data.meals || [];
}

export async function getMealById(id) {
  const res = await fetch(`${BASE_URL}lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals[0];
}
