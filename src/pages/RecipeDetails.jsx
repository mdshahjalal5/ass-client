import { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const RecipeDetails = ({ currentUser }) => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const { data } = useLoaderData();
  const [recipe, setRecipe] = useState(data);
  const [isImageValid, setIsImageValid] = useState(true);
  const [likeCount, setLikeCount] = useState(recipe?.likeCount);

  const handleLike = () => {
    if (user?.email == recipe?.userEmail) {
      Swal.fire({
        icon: "error",
        title: "You can't like your own recipe.",
        text: "Please try again with another recipe.",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }

    // Ideally you'd POST or PATCH to server here
    if (!likeCount) setLikeCount(0);

    setLikeCount((prev) => prev + 1);
  };

  if (!recipe) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-gray-500 mt-10 text-center">
        <span className="text-sky-500">{likeCount || "No"}</span>
        &nbsp; Foodies love this recipe.
      </h2>
      <div className="max-w-4xl mx-auto p-6  rounded-xl shadow-2xl">
        <Helmet>
          <title> Recipe Details | FlavorBook</title>
        </Helmet>
        <h1 className="capitalize text-2xl font-bold mb-4 font-kaushan text-purple-500">
          {recipe.title}
        </h1>

        <div
          className={`${
            recipe.image && isImageValid
              ? "sm:w-[450px]"
              : "sm:w-[450px] h-[300px] border bg-gray-200 flex items-center justify-center"
          } rounded-xl mb-4 shadow-xl`}
        >
          <img
            src={
              recipe.image && isImageValid
                ? recipe.image
                : "https://via.placeholder.com/600x300?text=No+Image"
            }
            alt={recipe.title}
            onError={() => setIsImageValid(false)}
            className="w-[450px] h-[300px] object-cover rounded-xl"
          />
        </div>

        <p className="text-lg mb-2 text-sky-500">
          <strong>Cuisine Type:</strong> {recipe.cuisine}
        </p>

        <p className="mb-2">
          <strong>Preparation Time:</strong> {recipe.prepTime} mins
        </p>

        <p className="mb-2">
          <strong>Categories:</strong> {recipe.categories?.join(", ")}
        </p>

        <div className="mb-4">
          <strong>Ingredients:</strong>
          <ul className="bg-gray-100 p-2 rounded mt-1 space-y-1 dark:text-sky-400">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="font-medium text-sky-700">{index + 1}.</span>{" "}
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <strong>Instructions:</strong>
          <p className="bg-gray-100 dark:text-sky-400 p-2 rounded mt-1">
            {recipe.instructions}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-lg text-gray-800">
            {likeCount || 0} people interested in this recipe
          </p>

          <button
            onClick={handleLike}
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            ❤️ Like
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
