/* import { useContext, useState } from "react";
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

    const response = await fetch(
      `https://worlds-recipes-sharing-server.vercel.app/api/v1/create-recipe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      },
    );

    const data = await response.json();
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
    setFormData({
      image: "",
      title: "",
      ingredients: "",
      instructions: "",
      cuisine: "",
      prepTime: "",
      categories: [],
      // userEmail: user?.email,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-white dark:text-sky-700 ">
      <Helmet>
        <title>Add Recipe || FlavorBook</title>
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
          className="bg-blue-600 text-white  py-2 px-4 rounded w-full hover:bg-blue-700"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe; */

import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import LottieAnimation from "../animation/Walking";
import { male_cooking } from "../animation";

const AddRecipe = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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

    const errors = [];

    if (!formData.title || formData.title.length < 6) {
      errors.push("📌 Title must be at least 6 characters long.");
    }

    const ingredientsArray = formData.ingredients
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i);

    if (ingredientsArray.length < 2) {
      errors.push("🥚 Please provide at least 2 ingredients.");
    }

    if (!formData.instructions || formData.instructions.length < 10) {
      errors.push("📖 Instructions must be at least 10 characters.");
    }

    if (!formData.cuisine) {
      errors.push("🍽️ Please select a cuisine.");
    }

    if (
      !formData.prepTime ||
      isNaN(formData.prepTime) ||
      Number(formData.prepTime) < 1
    ) {
      errors.push("⏱️ Preparation time must be at least 1 minute.");
    }

    if (formData.categories.length === 0) {
      errors.push("🧾 Please select at least one category.");
    }

    if (errors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Please fix the following:",
        html: `<ul class="text-left">${errors
          .map((err) => `<li>${err}</li>`)
          .join("")}</ul>`,
      });
      return;
    }

    // Optional image validation warning
    const imagePattern = /^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)$/i;
    if (formData.image && !imagePattern.test(formData.image)) {
      Swal.fire({
        icon: "warning",
        title: "Image URL might be invalid",
        text: "Please make sure it ends in .jpg, .png, .jpeg, .webp, or .gif",
      });
    }

    const newRecipe = {
      ...formData,
      likeCount: 0,
      ingredients: ingredientsArray,
    };

    const response = await fetch(
      `https://worlds-recipes-sharing-server.vercel.app/api/v1/create-recipe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe),
      },
    );

    const data = await response.json();

    if (data.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "🎉 Recipe Submitted!",
        text: "Your recipe has been added successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/my-recipes");
      }, 2200);

      // Reset form
      setFormData({
        image: "",
        title: "",
        ingredients: "",
        instructions: "",
        cuisine: "",
        prepTime: "",
        categories: [],
        userEmail: user?.email,
      });
    }
  };

  return (
    <>
      <div className="flex lg:flex-row-reverse items-center flex-col  ">
        <div className="max-w-[800px] mx-auto">
          <LottieAnimation animation={male_cooking}></LottieAnimation>
        </div>
        <div className="max-w-2xl mx-auto p-6 text-white dark:text-sky-700">
          <Helmet>
            <title>Add Recipe || FlavorBook</title>
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
              rows="3"
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
                {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                  (cat) => (
                    <label key={cat} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={cat}
                        checked={formData.categories.includes(cat)}
                        onChange={handleCheckbox}
                      />
                      <span>{cat}</span>
                    </label>
                  ),
                )}
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
      </div>
    </>
  );
};

export default AddRecipe;
