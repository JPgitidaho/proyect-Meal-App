import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => setCategories(res.data.categories.slice(0, 4)));
  }, []);

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-[#586833]">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-12">
          {categories.map(category => (
            <CategoryCard key={category.idCategory} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
