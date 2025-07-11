import { Link } from "react-router-dom";
import Button from "../components/base/Button";
import useNavegacionRecetas from "../hooks/useNavegacionRecetas";

const RecipeCard = ({
  receta,
  title,
  image,
  link,
  subtitle,
  showArea = true,
  showCategory = true,
}) => {
  const { navegar } = useNavegacionRecetas();

  const displayTitle = title || receta?.strMeal;
  const displayImage = image || receta?.strMealThumb;
  const displayLink = link || `/receta/${receta?.idMeal}`;
  const displaySubtitle =
    subtitle ||
    (showArea && showCategory
      ? `${receta?.strArea} - ${receta?.strCategory}`
      : showArea
      ? receta?.strArea
      : showCategory
      ? receta?.strCategory
      : null);

  return (
    <div className="bg-[#FEFCF3] shadow-md hover:scale-105 transition-transform flex flex-col rounded min-h-[360px] overflow-hidden">
      <Link to={displayLink}>
        <img
          src={displayImage}
          alt={displayTitle}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4 flex flex-col gap-2 text-[#333333] flex-grow">
        <h3 className="font-bold text-lg">{displayTitle}</h3>
        {displaySubtitle && (
          <p className="text-sm text-[#5A3E36]">{displaySubtitle}</p>
        )}
        <div className="mt-auto">
          <Button
            onClick={() => navegar(receta || { strCategory: title })}
            variant="olive-outline"
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
