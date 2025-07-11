import { useState } from "react";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#586833] focus:outline-none"
        aria-label="Abrir menú"
      >
        {open ? (
         
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
         
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-[#586833] text-xl font-medium gap-6">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 p-2"
            aria-label="Cerrar menú"
          >
         
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Link to="/" onClick={() => setOpen(false)}>
            Inicio
          </Link>
          <Link to="/todas-categorias" onClick={() => setOpen(false)}>
            All Categories
          </Link>
          <Link to="/todas-localizaciones" onClick={() => setOpen(false)}>
            All Localizations
          </Link>
        </div>
      )}
    </div>
  );
}
