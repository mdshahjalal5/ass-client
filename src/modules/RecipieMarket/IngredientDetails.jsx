import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { ingredients } from "./ingredient.constant";

const IngredientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    const found = ingredients.find((item) => item.id === parseInt(id));
    setIngredient(found);
  }, [id]);

  if (!ingredient) {
    return <div className="text-center text-lg p-10">Loading...</div>;
  }

  const handleAddToCart = () => {
    toast.success(`${ingredient.name} added to cart 🛒`, { duration: 2000 });
    // Add to cart logic is coming here
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 mt-3">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:underline mb-6"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <img
          src={ingredient.image}
          alt={ingredient.name}
          className="w-full h-72 object-cover rounded-md shadow"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {ingredient.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {ingredient.description}
          </p>

          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-200">
            <li>
              💰 <strong>Price:</strong> ${ingredient.price}
            </li>
            <li>
              📦 <strong>Quantity:</strong> {ingredient.quantity}
            </li>
            <li>
              📍 <strong>Origin:</strong> {ingredient.origin}
            </li>
            <li>
              📧 <strong>Seller:</strong> {ingredient.seller}
            </li>
          </ul>

          <button
            onClick={handleAddToCart}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
          >
            ➕ Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
