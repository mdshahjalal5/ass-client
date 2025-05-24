import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Button from "./Button";
import Swal from "sweetalert2";
import UpdateRecipe from "../pages/UpdateRecipe";

const Recipe = ({ recipe, setRecipes = () => {}, recipes = [] }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { image, title, cuisine, likeCount } = recipe;
  const [isImageValid, setIsImageValid] = useState(true);

  const hanldeDelete = async (id) => {
    // const res = await fetch(`http://localhost:5000/api/v1/recipe/${id}`, {
    const res = await fetch(
      `https://worlds-recipes-sharing-server.vercel.app/api/v1/recipe/${id}`,
      {
        method: "DELETE",
      },
    );
    if (!res.ok) {
      throw new Error(
        `Failed to delete recipe, status:${res.status}, ${res.statusText}`,
      );
    }

    const result = await res.json();
    if (result?.data?.deletedCount) {
      if (setRecipes && typeof setRecipes === "function") {
        setRecipes(recipes.filter((r) => r._id !== id));
      }

      Swal.fire({
        title: "Success",
        text: "Recipe deleted successfully",
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  };
  return (
    <>
      <div className="rounded-lg shadow hover:shadow-md transition duration-300 max-w-[350px] shadow-xl bg-gradient-to-b from-gray-300 to-gray-100 max-sm:min-w-[300px]">
        <img
          src={image || "https://via.placeholder.com/400x250?text=No+Image"}
          // alt={title}
          onError={() => setIsImageValid(false)}
          className="w-[200px] object-cover rounded-xl shadow-xl mx-auto mt-2 max-h-[200px]"
        />

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold dark:text-sky-400">{title}</h3>
          <p className="text-sm text-gray-600">Cuisine: {cuisine}</p>
          <p className="text-sm text-gray-600">Likes: {likeCount}</p>
          {pathname == "/my-recipes" && (
            <div className="flex gap-3 flex-col">
              <div
                className="flex-1 text-white"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <Link to={`/update/${recipe._id}`}>
                  <Button label={"Update "} className={"w-full"} />
                </Link>
              </div>
              <div
                onClick={() => hanldeDelete(recipe?._id)}
                className="flex-1  text-white "
              >
                <Button label={"Delete"} className={"flex-1 w-full"} />
              </div>
            </div>
          )}
          <button
            className="w-full btn btn-outline btn-primary 500   rounded hover:bg-purple-700 text-sm rounded-full"
            onClick={() => navigate(`/recipes/${recipe._id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Recipe;
