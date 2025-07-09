import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function DemoButtons() {
  return (
    <div className="p-8 max-w-xl mx-auto flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-[#586833] mb-4">Demostración de Botones</h1>

    
      <div className="flex gap-4 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button disabled>Deshabilitado</Button>
      </div>


      <div>
        <Link to="/categoria/Pollo">
          <Button>Ir a categoría Pollo</Button>
        </Link>
      </div>

     
      <div>
        <Button onClick={() => alert("Receta agregada a favoritos")}>
          Añadir a favoritos
        </Button>
      </div>
    </div>
  );
}
