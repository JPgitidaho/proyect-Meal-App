import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "./base/Footer";
import Hero from "../header/Hero";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
  const location = useLocation();
  const [mostrarBuscador, setMostrarBuscador] = useState(false);

  useEffect(() => {
    setMostrarBuscador(location.pathname === "/");
  }, [location.pathname]);

 const mostrarHero = !location.pathname.startsWith("/receta");


  return (
    <div className="min-h-screen flex flex-col pt-[7vh]">
      <Header />
      
{mostrarHero && (
  <Hero imagen="/assets/hero.jpg" mostrarBuscador={mostrarBuscador} />
)}


      <main className="flex-grow ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
