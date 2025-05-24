import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../hooks/Usefetch";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const predefinedCategories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Vegan",
];

const UpdateRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useFetch(
    `https://worlds-recipes-sharing-server.vercel.app/api/v1/recipe/${id}`,
  );
  const recipe = data?.data;

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    cuisine: "",
    ingredients: "",
    instructions: "",
    prepTime: "",
    categories: [],
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title || "",
        image: recipe.image || "",
        cuisine: recipe.cuisine || "",
        ingredients: recipe.ingredients?.join(", ") || "",
        instructions: recipe.instructions || "",
        prepTime: recipe.prepTime || "",
        categories: recipe.categories || [],
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((cat) => cat !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...formData,
      ingredients: formData.ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    const res = await fetch(
      `https://worlds-recipes-sharing-server.vercel.app/api/v1/recipe/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      },
    );

    const result = await res.json();

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Recipe Updated!",
        text: "Your recipe was successfully updated.",
        timer: 1500,
        showConfirmButton: false,
      });
      setTimeout(() => {
        navigate("/my-recipes");
      }, 2500);
    }
  };

  if (loading)
    return (
      <h2 className="text-center mt-8 text-sky-500 text-xl max-sm:text-xs font-semibold">
        Loading...
      </h2>
    );

  return (
    <>
      <Helmet>
        <title>Update Recipe || FlavorBook</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg space-y-6 text-gray-400 max-sm:[&_*]:text-sm"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Update Recipe
        </h2>

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block font-semibold text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Spaghetti Bolognese"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label
            htmlFor="image"
            className="block font-semibold text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            id="image"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        {/* Cuisine */}
        <div>
          <label
            htmlFor="cuisine"
            className="block font-semibold text-gray-700 mb-1"
          >
            Cuisine
          </label>
          <input
            id="cuisine"
            type="text"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Italian, Indian"
            required
          />
        </div>

        {/* Ingredients */}
        <div>
          <label
            htmlFor="ingredients"
            className="block font-semibold text-gray-700 mb-1"
          >
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
            placeholder="e.g. Tomato, Pasta, Garlic"
            required
          />
        </div>

        {/* Instructions */}
        <div>
          <label
            htmlFor="instructions"
            className="block font-semibold text-gray-700 mb-1"
          >
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Step-by-step cooking instructions"
            required
          />
        </div>

        {/* Preparation Time */}
        <div>
          <label
            htmlFor="prepTime"
            className="block font-semibold text-gray-700 mb-1"
          >
            Preparation Time (minutes)
          </label>
          <input
            id="prepTime"
            type="number"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 30"
            required
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Categories
          </label>
          <div className="flex flex-wrap gap-4">
            {predefinedCategories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <input
                  type="checkbox"
                  value={cat}
                  checked={formData.categories.includes(cat)}
                  onChange={handleCheckbox}
                  className="accent-blue-500"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-md w-full transition duration-200"
        >
          Update Recipe
        </button>
      </form>
    </>
  );
};

export default UpdateRecipe;
