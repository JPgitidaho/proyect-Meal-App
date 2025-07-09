import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../components/Footer";
import Hero from "../header/Hero";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Layout() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");

  const [heroImg, setHeroImg] = useState("");
  const [mostrarBuscador, setMostrarBuscador] = useState(false);

  useEffect(() => {
    const base = pathParts[2]?.toLowerCase();

    if (location.pathname === "/") {
      setMostrarBuscador(true);
      setHeroImg("/assets/hero.jpg");
    } else if (pathParts[1] === "categoria") {
      setMostrarBuscador(false);
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${base}`)
        .then((res) => {
          const receta = res.data.meals?.[0];
          if (receta) setHeroImg(receta.strMealThumb);
        })
        .catch(() => setHeroImg("/assets/hero.jpg"));
    } else if (pathParts[1] === "localidad") {
      setMostrarBuscador(false);
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${base}`)
        .then((res) => {
          const receta = res.data.meals?.[0];
          if (receta) setHeroImg(receta.strMealThumb);
        })
        .catch(() => setHeroImg("/assets/hero.jpg"));
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero imagen={heroImg} mostrarBuscador={mostrarBuscador} />
      <main className="flex-grow px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
