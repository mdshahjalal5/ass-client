import { Link, useLoaderData, useLocation } from "react-router";

import Recipe from "./Recipe";
import Button from "./Button";

const Recipes = () => {
  const initialRecipes = useLoaderData().data;

  const location = useLocation();
  console.log(location, "Recipes.jsx", 9);
  return (
    <div>
      {location.pathname === "/all-recipes" ? (
        <h1 className="text-gray-500 font-bold text-xl my-5">
          Total Recipes:{" "}
          {initialRecipes.length > 9
            ? initialRecipes.length
            : "0" + initialRecipes.length}
        </h1>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {initialRecipes.map((r) => (
          <Recipe key={r._id} recipe={r} />
        ))}
      </div>
      {location.pathname == "/" && initialRecipes.length > 5 && (
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
