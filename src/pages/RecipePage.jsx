import { useParams } from "react-router-dom";
import { useReceta } from "../hooks/useReceta";
import HeroReceta from "../header/HeroReceta";

export default function RecipePage() {
  const { id } = useParams();
  const { receta, ingredientes, loading } = useReceta(id);

  if (loading) return <div className="p-8 text-center">Cargando receta...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <HeroReceta
        titulo={receta.strMeal}
        descripcion={`Aprende a preparar esta receta de ${receta.strMeal} paso a paso.`}
        imagen={receta.strMealThumb}
      />

      <div className="py-6 flex flex-col lg:flex-row gap-8 text-[#586833]">
        <aside className="w-full lg:w-80 border border-[#d2e3c8] rounded shadow p-4 bg-white mb-6 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
          <ul className="space-y-2">
            {ingredientes.map((item, i) => (
              <li key={i} className="flex justify-between border-b pb-1 text-sm">
                <span>{item.nombre}</span>
                <span className="text-right font-medium">{item.cantidad}</span>
              </li>
            ))}
          </ul>
        </aside>
        <section className="flex-1 lg:pl-10">
          <h1 className="text-3xl font-bold mb-6">{receta.strMeal}</h1>
          <div className="space-y-4 text-sm leading-6 text-justify">
            {receta.strInstructions?.split('\n').map((linea, idx) =>
              linea.trim() ? <p key={idx}>• {linea}</p> : null
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
