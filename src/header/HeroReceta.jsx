export default function HeroReceta({ titulo, descripcion, imagen }) {
  return (
    <div className="flex flex-col md:flex-row w-full h-[300px] bg-white rounded-xs overflow-hidden shadow-md mb-4">
      <div className="bg-[#1D4035] text-[#D4A373] flex items-center justify-center text-center w-full md:w-1/2">
        <div className="py-6 md:py-8 px-4 md:px-6">
          <h2 className="text-2xl font-bold mt-10 py-2">{titulo}</h2>
          <p className="text-sm md:text-base text-[#FEFCF3] leading-snug py-5">
            {descripcion}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-48 md:h-auto">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

