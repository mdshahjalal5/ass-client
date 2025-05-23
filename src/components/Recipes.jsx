import { Link, useLoaderData, useLocation } from "react-router";
import AwesomeReveal from "../animation/AwesomeReveal";

import Recipe from "./Recipe";
import Button from "./Button";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Recipes = () => {
  const initialRecipes = useLoaderData().data;

  const [recipes, setRecipes] = useState(initialRecipes);

  const location = useLocation();
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  // Extract unique cuisines
  const cuisineOptions = [
    "All",
    ...new Set(initialRecipes.map((r) => r.cuisine).filter(Boolean)),
  ];

  useEffect(() => {
    if (selectedCuisine === "All") {
      setRecipes(initialRecipes);
    } else {
      const filtered = initialRecipes.filter(
        (r) => r.cuisine === selectedCuisine,
      );
      setRecipes(filtered);
    }
  }, [selectedCuisine, initialRecipes]);
  return (
    <>
      <AwesomeReveal>
        <div>
          {location.pathname === "/all-recipes" ? (
            <>
              <Helmet>
                <title>All Recipes || FlavorBook</title>
              </Helmet>
              <h1 className="text-gray-500 font-bold text-xl my-5 max-sm:text-center">
                Total Recipes:{" "}
                {recipes.length > 9 ? recipes.length : "0" + recipes.length}
              </h1>
              {/* Filter Dropdown */}
              <div className="mb-4 max-sm:text-center">
                <label className="font-medium text-gray-600 mr-2">
                  Filter by Cuisine:
                </label>
                <select
                  className="border border-gray-300 rounded px-3 py-1 bg-white text-gray-800 shadow"
                  value={selectedCuisine}
                  onChange={(e) => setSelectedCuisine(e.target.value)}
                >
                  {cuisineOptions.map((cuisine, index) => (
                    <option key={index} value={cuisine}>
                      {cuisine}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : null}
          <div className="grid grid-cols-1 max-sm:place-items-center sm:grid-cols-2 md:grid-cols-3 gap-8">
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
            <div className="flex justify-center items-center mt-10 pb-3">
              <Link to="/all-recipes">
                <Button
                  label={"View More Recipes"}
                  className={"text-white scale-x-120 scale-y-120"}
                />
              </Link>
            </div>
          )}
        </div>
      </AwesomeReveal>
    </>
  );
};

export default Recipes;
