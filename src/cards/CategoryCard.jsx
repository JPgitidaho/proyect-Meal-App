import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const CategoryCard = ({ category }) => (
  <Link
    to={`/categoria/${category.strCategory}`}
    className="bg-white shadow-md w-full max-w-xs mx-auto overflow-hidden hover:scale-105 transition-transform flex flex-col relative">
    <img
      src={category.strCategoryThumb}
      alt={category.strCategory}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 flex flex-col">
      <h4 className="font-bold text-lg mb-1">{category.strCategory}</h4>
    </div>
    <FaArrowRight className="w-7 h-7 absolute bottom-4 right-4 text-gray-700" />
  </Link>
);

export default CategoryCard;