import Recipes from "../../components/Recipes";
import About from "../../pages/About";
import RecipeDetails from "../../pages/RecipeDetails";
import UpdateRecipe from "../../pages/UpdateRecipe";
import PrivateRoute from "../../Routes/PrivateRoute";
import Blogs from "../blogs/Blogs";
import MyRecipes from "../../pages/MyRecipes";
import AddRecipe from "../../pages/AddRecipe";

const recipeRoutes = [
  {
    path: "/add-recipe",
    element: (
      <PrivateRoute>
        <AddRecipe />
      </PrivateRoute>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "blogs", // This will be nested under a layout (if applicable)
    element: <Blogs />,
  },
  {
    path: "/all-recipes",
    loader: () =>
      fetch(
        "https://worlds-recipes-sharing-server.vercel.app/api/v1/recipes?limit=0",
      ),
    element: <Recipes />,
  },
  {
    path: "/my-recipes",
    element: (
      <PrivateRoute>
        <MyRecipes />
      </PrivateRoute>
    ),
  },
  {
    path: "update/:id",
    element: (
      <PrivateRoute>
        <UpdateRecipe />
      </PrivateRoute>
    ),
  },
  {
    path: "/recipes/:id",
    loader: ({ params }) =>
      fetch(
        `https://worlds-recipes-sharing-server.vercel.app/api/v1/recipe/${params.id}`,
      ),
    element: (
      <PrivateRoute>
        <RecipeDetails />
      </PrivateRoute>
    ),
  },
];

export default recipeRoutes;
