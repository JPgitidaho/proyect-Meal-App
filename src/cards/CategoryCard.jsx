import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => (
  <Link
    to={`/categoria/${category.strCategory}`}
    className="bg-white rounded-xl shadow-md w-72 mx-auto overflow-hidden hover:scale-105 transition-transform flex flex-col"
  >
    <img
      src={category.strCategoryThumb}
      alt={category.strCategory}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 flex flex-col items-center">
      <h4 className="font-bold text-lg mb-1">{category.strCategory}</h4>
    </div>
  </Link>
);

export default CategoryCard;
