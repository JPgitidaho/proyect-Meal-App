import { useNavigate } from "react-router-dom";

export default function useNavegacionRecetas() {
  const navigate = useNavigate();


  function navegar({ idMeal, strCategory } = {}) {
    if (idMeal) {
      navigate(`/receta/${idMeal}`);
    } else if (strCategory) {
      navigate(`/categoria/${strCategory}`);
    } else {
      navigate("/todas-categorias");
    }
  }

  return { navegar };
}
