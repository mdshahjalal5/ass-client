import IngredientCard from "./IngredientCard";
import RecipeMarketHeader from "./RecipeMarketHeader";
import { ingredients } from "./ingredient.constant";

const MarketHome = () => {
  // const [ingredients, setIngredients] = useState([]);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <RecipeMarketHeader />
      <div className="grid grid-cols-1  xl:grid-cols-2 gap-6">
        {ingredients.map((item) => (
          <IngredientCard key={item.id} ingredient={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketHome;
