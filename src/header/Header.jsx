import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="fixed p-4 w-full h-[7vh] z-50 bg-white shadow">
      <nav className="flex flex-row w-full justify-between items-center">
        <img src="/assets/logo.svg" alt="Logo" className="w-60 h-8" />
        <div className="NavBar flex flex-row gap-4">
          <Link to="/">Inicio</Link>
          <Link to="/categoria/Desayuno">Categorías</Link>
          <Link to="/localidad/Argentina">Región</Link>
        </div>
      </nav>
    </div>
  );
}
