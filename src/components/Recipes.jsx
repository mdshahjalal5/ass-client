import { Link, useLoaderData, useLocation } from "react-router";

import Recipe from "./Recipe";
import Button from "./Button";
import { useState } from "react";

const Recipes = () => {
  const initialRecipes = useLoaderData().data;

  const [recipes, setRecipes] = useState(initialRecipes);

  const location = useLocation();
  return (
    <div>
      {location.pathname === "/all-recipes" ? (
        <h1 className="text-gray-500 font-bold text-xl my-5">
          Total Recipes:{" "}
          {recipes.length > 9 ? recipes.length : "0" + recipes.length}
        </h1>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((r) => (
          <Recipe
            key={r._id}
            recipe={r}
            setRecipes={setRecipes}
            recipes={recipes}
          />
        ))}
      </div>
      {location.pathname == "/" && recipes.length > 5 && (
        <div className="flex justify-center items-center mt-7 pb-3">
          <Link to="/all-recipes">
            <Button label={"View More"} className={"text-white"} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Recipes;
