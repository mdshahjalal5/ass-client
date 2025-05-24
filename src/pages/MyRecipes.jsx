import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useFetch from "../hooks/Usefetch";
import Recipe from "../components/Recipe";
import NoRecipe from "./NoRecipe";
import { Helmet } from "react-helmet-async";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);

  const [recipes, setRecipes] = useState([]);

  const { data, loading } = useFetch(
    `https://worlds-recipes-sharing-server.vercel.app/api/v1/recipes?email=${user?.email}&limit=0`,
  );
  useEffect(() => {
    if (data) {
      setRecipes(data.data);
    }
  }, [data]);

  return (
    <div>
      <Helmet>
        <title>My Recipes || FlavorBook</title>
      </Helmet>
      <div className="mt-7">
        {user?.displayName ? (
          <h1 className="font-bold text-sky-400 text-2xl">
            Recipes of{" "}
            <span className="text-pink-300 font-kaushan">
              {user.displayName}
            </span>
          </h1>
        ) : (
          <h1>My Recipes</h1>
        )}
      </div>
      <hr className="border-gray-400 border-[1px] mt-3" />
      {loading && (
        <div className="flex justify-center items-center mt-7">
          <h1 className="text-sky-400 text-2xl">Loading...</h1>
        </div>
      )}
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 max-sm:place-items-center">
          {recipes.map((r) => (
            <Recipe
              key={r._id}
              recipe={r}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          ))}
        </div>
      ) : (
        <NoRecipe />
      )}
    </div>
  );
};

export default MyRecipes;
