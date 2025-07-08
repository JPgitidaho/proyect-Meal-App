
import React from "react";
const heroImg = "public/assets/hero.jpg";


export default function Hero() {
    
  return (
    <div className="heroContainer w-full pt-[7vh]">
      <div
        className="relative w-full justify-center h-[500px] bg-cover bg-center"
         style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-[#586833]">
          <div className="heroSearch flex flex-col bg-white/70 w-[65%] h-[30%] items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">
              ¿Qué te gustaria cocinar hoy?
            </h1>
            <input
              type="text"
              placeholder="Buscar..."
              className=" border border-[#51612a] p-3 rounded w-3/4 max-w-md text-[#586833]"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}