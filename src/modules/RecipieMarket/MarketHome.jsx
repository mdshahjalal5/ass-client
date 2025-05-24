import IngredientCard from "./IngredientCard";
import { ingredients } from "./ingredient.constant";

const MarketHome = () => {
  // const [ingredients, setIngredients] = useState([]);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        🛒 Marketplace - Recipe Ingredients
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ingredients.map((item) => (
          <IngredientCard key={item.id} ingredient={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketHome;
