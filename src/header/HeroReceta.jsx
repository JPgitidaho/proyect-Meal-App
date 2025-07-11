export default function HeroReceta({ titulo, descripcion, imagen }) {
  return (
    <div className="flex flex-col md:flex-row max-w-full h-[300px] md:mx-20 bg-white rounded-xl overflow-hidden shadow-md">
      
      <div className="bg-[#1D4035] text-[#D4A373] px-6  flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold mb-3">{titulo}</h2>
          <p className="text-sm md:text-base text-[#FEFCF3] leading-snug">
            {descripcion}
          </p>
        </div>
      </div>

      <div className="w-full h-48 md:h-auto">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
