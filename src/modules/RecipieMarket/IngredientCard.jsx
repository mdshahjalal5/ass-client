import { Link } from "react-router-dom";

const IngredientCard = ({ ingredient }) => {
  return (
    <div className="bg-gray-100 ark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-2xl transition-transform ">
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-400 ">
        {ingredient.name}
      </h3>
      <p className="text-sm text-gray-500  mb-2">{ingredient.description}</p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>💰 ${ingredient.price}</span>
        <span>📦 {ingredient.quantity}</span>
      </div>
      <Link
        to={`/recipe-market/${ingredient.id}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default IngredientCard;
