import { useLoaderData, useLocation } from "react-router";
import Recipe from "./Recipe";

const Recipes = () => {
  const initialRecipes = useLoaderData().data;

  const location = useLocation();
  console.log(location, "Recipes.jsx", 9);
  return (
    <div>
      {location.pathname === "/all-recipes" ? (
        <h1>Total Recipes: {initialRecipes.length}</h1>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {initialRecipes.map((r) => (
          <Recipe key={r._id} recipe={r} />
        ))}
      </div>{" "}
    </div>
  );
};

export default Recipes;
