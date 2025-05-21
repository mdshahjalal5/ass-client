import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useFetch from "../hooks/Usefetch";
import Recipe from "../components/Recipe";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email, "MyRecipes.jsx", 6);

  const [recipes, setRecipes] = useState([]);
  console.log(recipes, "MyRecipes.jsx", 10);

  const { data, loading } = useFetch(
    `http://localhost:5000/api/v1/recipes?email=${user?.email}&limit=0`,
  );
  useEffect(() => {
    if (data) {
      setRecipes(data.data);
    }
  }, [data]);

  return (
    <div>
      <div className="mt-7">
        {" "}
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

      {recipes.length > 0 &&
        recipes.map((r) => <Recipe key={r._id} recipe={r} />)}
    </div>
  );
};

export default MyRecipes;
