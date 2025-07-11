import SearchBar from "./SearchBar";

export default function Hero({ mostrarBuscador = false, imagen }) {
  return (
    <div className="heroContainer w-full pt-[0]">
      <div
        className="relative w-full justify-center h-[500px] bg-cover bg-[80%_center] md:bg-center"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-[#586833]">
          <div className="heroSearch relative flex flex-col bg-white/70 w-[85%] md:w-[65%] lg:w-[40%] h-[35%] md:h-[35%] items-center justify-center px-4 py-2">
            <h1 className="text-md md:text-3xl font-bold mb-4 text-center">
             What would you like to cook today?
            </h1>
            {mostrarBuscador && <SearchBar />}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}
