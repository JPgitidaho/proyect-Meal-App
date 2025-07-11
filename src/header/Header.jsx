import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[7vh] z-50 bg-white py-10 px-6 md:px-20">
      <nav className="flex justify-between items-center h-full max-w-7xl mx-auto ">
        <Link to="/">
          <img src="/assets/logo.svg" alt="Logo" className="w-60 h-8" />
        </Link>

        <div className="hidden md:flex gap-6 text-[#586833] font-medium">
          <Link to="/">Inicio</Link>
          <Link to="/todas-categorias">All Categories</Link>
          <Link to="/todas-localizaciones">All Localizations</Link>
        </div>

        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
}
