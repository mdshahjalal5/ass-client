import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const RecipeDetails = ({ currentUser }) => {
  const { id } = useParams();
  const [likeCount, setLikeCount] = useState(0);

  const { data } = useLoaderData();
  const [recipe, setRecipe] = useState(data);

  const handleLike = () => {
    if (currentUser?.email === recipe?.authorEmail) {
      alert("You can't like your own recipe.");
      return;
    }

    // Ideally you'd POST or PATCH to server here
    setLikeCount((prev) => prev + 1);
  };

  if (!recipe) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 border-[1px] rounded-xl shadow-2xl border-sky-400 mt-10">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>

      <img
        src={
          recipe.image || "https://via.placeholder.com/600x300?text=No+Image"
        }
        alt={recipe.title}
        className="w-[450px] h- object-cover rounded-xl mb-4 shadow-xl"
      />

      <p className="text-lg mb-2 text-gray-700">
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
        <ul className="bg-gray-100 p-2 rounded mt-1 space-y-1">
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
        <p className="bg-gray-100 p-2 rounded mt-1">{recipe.instructions}</p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <p className="text-lg text-gray-800">
          {likeCount} people interested in this recipe
        </p>

        <button
          onClick={handleLike}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          ❤️ Like
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
