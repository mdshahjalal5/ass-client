import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddRecipe = () => {
  const { user } = useContext(AuthContext);

  const naviaget = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    prepTime: "",
    categories: [],
    userEmail: user?.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    const newCategories = checked
      ? [...formData.categories, value]
      : formData.categories.filter((c) => c !== value);
    setFormData({ ...formData, categories: newCategories });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert ingredients string to array
    const newRecipe = {
      ...formData,
      likeCount: 0,

      ingredients: formData.ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    console.log("Recipe submitted:", newRecipe);

    const response = await fetch(`http://localhost:5000/api/v1/create-recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });

    const data = await response.json();
    console.log(data, "AddRecipe.jsx", 212);
    if (data.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Recipe submitted!",
        text: "Your recipe has been added successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
      setTimeout(() => {
        naviaget("/my-recipes");
      }, 2500);
    }
    // Optionally reset form
    /*  setFormData({
      image: "",
      title: "",
      ingredients: "",
      instructions: "",
      cuisine: "",
      prepTime: "",
      categories: [],
      userEmail: user?.email,
    }); */
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Helmet>
        <title>Add Recipe</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-6">Add a Recipe</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 shadow rounded"
      >
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <label className="block font-medium">
          Ingredients (separate with commas)
        </label>
        <textarea
          name="ingredients"
          placeholder="e.g. eggs, flour, milk"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          rows="2"
          required
        />

        <textarea
          name="instructions"
          placeholder="Instructions"
          value={formData.instructions}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          rows="2"
          required
        />

        <select
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded bg-white"
          required
        >
          <option value="">Select Cuisine</option>
          <option>Bangladeshi</option>
          <option>Italian</option>
          <option>Mexican</option>
          <option>Indian</option>
          <option>Chinese</option>
          <option>Others</option>
        </select>

        <input
          type="number"
          name="prepTime"
          placeholder="Preparation Time (minutes)"
          value={formData.prepTime}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <div>
          <p className="font-medium mb-1">Categories:</p>
          <div className="flex flex-wrap gap-4">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={cat}
                  checked={formData.categories.includes(cat)}
                  onChange={handleCheckbox}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
