import { useState } from "react";

const UpdateRecipe = ({ recipe, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: recipe.title,
    image: recipe.image,
    cuisine: recipe.cuisine,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    preparationTime: recipe.preparationTime,
    categories: recipe.categories,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // callback to parent for update
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Update Recipe</h2>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Recipe Title"
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine Type"
        className="w-full border p-2 rounded"
      />

      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
        className="w-full border p-2 rounded"
      />

      <textarea
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        placeholder="Instructions"
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        name="preparationTime"
        value={formData.preparationTime}
        onChange={handleChange}
        placeholder="Preparation Time (minutes)"
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="categories"
        value={formData.categories}
        onChange={handleChange}
        placeholder="Categories (comma separated)"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
      >
        Update Recipe
      </button>
    </form>
  );
};

export default UpdateRecipe;
