import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useFetch from "../hooks/Usefetch";
import Recipe from "../components/Recipe";
import Button from "../components/Button";
import { Link } from "react-router";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {recipes.length > 0 ? (
          recipes.map((r) => <Recipe key={r._id} recipe={r} />)
        ) : (
          <>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-300  shadow-xl border-sky-500  bg-gradient-to-b from-gray-300 to-gray-100 mx-auto mt-10 p-5 w-fit">
              <h1 className="text-gray-500 text-xl">
                You have no recipes, please add one
              </h1>
              <div className="text-center">
                <Link to="/add-recipe">
                  <Button label={"Add Recipe"} className={"text-white mt-2"} />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyRecipes;
