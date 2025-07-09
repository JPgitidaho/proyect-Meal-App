import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../components/Footer";
import Hero from "../header/Hero";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");

  let heroImg = "/assets/hero.jpg";
  let mostrarBuscador = false;

  if (location.pathname === "/") {
    mostrarBuscador = true;
  } else if (pathParts[1] === "categoria") {
    heroImg = `/assets/${pathParts[2].toLowerCase()}.jpg`;
  } else if (pathParts[1] === "localidad") {
    heroImg = `/assets/${pathParts[2].toLowerCase()}.jpg`;
  }

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
