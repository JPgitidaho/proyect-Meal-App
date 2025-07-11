
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        texto: '#586833',        // verde oliva suave (texto base)
        secundario: '#5A3E36',   // vino tinto elegante
        primario: '#7A9E7E',     // verde suave (acciones)
        acento: '#D4A373',       // amarillo mostaza
        fondo: '#FAF3E0',        // fondo general
        tarjeta: '#FEFCF3',      // fondo tarjetas
      },
    },
  },
  plugins: [],
}
