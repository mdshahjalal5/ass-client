import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisineType: "",
    preparationTime: "",
    categories: [],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe submitted:", formData);
    alert("Recipe submitted!");
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

        <textarea
          name="ingredients"
          placeholder="Ingredients"
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
          name="cuisineType"
          value={formData.cuisineType}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded bg-white"
          required
        >
          <option value="">Select Cuisine</option>
          <option>Italian</option>
          <option>Mexican</option>
          <option>Indian</option>
          <option>Chinese</option>
          <option>Others</option>
        </select>

        <input
          type="number"
          name="preparationTime"
          placeholder="Preparation Time (minutes)"
          value={formData.preparationTime}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <div>
          <p className="font-medium mb-1">Categories:</p>
          <div className="flex flex-wrap gap-4">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input type="checkbox" value={cat} onChange={handleCheckbox} />
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
