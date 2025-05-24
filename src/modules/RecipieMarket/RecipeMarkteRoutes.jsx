import Recipes from "../../components/Recipes";
import PrivateRoute from "../../Routes/PrivateRoute";
import CreateRecipeIngredient from "./CreateRecipeIngredient";
import IngredientDetails from "./IngredientDetails";
import MarketHome from "./MarketHome";
import RecipeMarketLayout from "./RecipeMarketLayout";

export const RecipeMarkteRoutes = {
  path: "/recipe-market",
  element: <RecipeMarketLayout />,
  children: [
    {
      index: true,
      element: <MarketHome />,
    },
    {
      path: ":id",
      element: (
        <PrivateRoute>
          <IngredientDetails />
        </PrivateRoute>
      ),
    },
    {
      path: "create",
      element: (
        <PrivateRoute>
          <CreateRecipeIngredient />
        </PrivateRoute>
      ),
    },
  ],
};
