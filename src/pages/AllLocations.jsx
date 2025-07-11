import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GridLayout from "../components/GridLayout";

export default function AllLocations() {
  const [locaciones, setLocaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(res => res.json())
      .then(data => setLocaciones(data.meals || []))
      .catch(err => console.error("Error al cargar regiones:", err))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) {
    return <div className="p-8 text-center">Cargando regiones...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-[#586833]">
      <h1 className="text-3xl font-bold mb-6 text-center">Explora por Región</h1>
      <GridLayout>
        {locaciones.map((item, i) => (
          <Link
            key={i}
            to={`/localidad/${item.strArea}`}
            className="block text-center border border-[#cfe3c8] bg-white shadow rounded p-6 hover:scale-105 transition"
          >
            {item.strArea}
          </Link>
        ))}
      </GridLayout>
    </div>
  );
}
