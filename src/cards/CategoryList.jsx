import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GridLayout from "../components/GridLayout";
import RecipeCard from "./RecipeCard";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories.slice(0, 4));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="ml-10 text-2xl font-bold mb-6 text-[#586833]">Categorías</h2>

        {loading && <p className="text-gray-600">Cargando categorías...</p>}
        {error && (
          <p className="text-red-500">
            Error al cargar categorías: {error.message}
          </p>
        )}

        {!loading && !error && (
          <>
            <GridLayout>
              {categories.map((categoria) => (
                <RecipeCard
                  key={categoria.idCategory}
                  title={categoria.strCategory}
                  image={categoria.strCategoryThumb}
                  link={`/categoria/${categoria.strCategory}`}
                  subtitle={
                    categoria.strCategoryDescription?.slice(0, 50) + "..."
                  }
                />
              ))}
                          <div className="mt-6 text-center">
              <Link
                to="/todas-categorias"
                className="text-xl font-semibold text-[#586833] hover:text-[#3f4f28] transition"
              >
                Ver todas las categorías →
              </Link>
            </div>
            </GridLayout>


          </>
        )}
      </div>
    </div>
  );
}
