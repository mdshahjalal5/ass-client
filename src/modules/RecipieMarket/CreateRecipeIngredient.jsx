import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CreateRecipeIngredient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.log("Ingredient Data:", data);
    toast.success("Ingredient added successfully! 🌿", { duration: 3000 });
    // reset(); // Clear form
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white  rounded-xl shadow-md mt-10">
      <h2 className="text-3xl max-sm:text-2xl font-bold mb-6 text-center text-green-600">
        📦 Add Ingredient for Sale
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="label">Ingredient Name</label>
          <input
            type="text"
            placeholder="e.g. Organic Tomatoes"
            className="input input-bordered w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="label">Image URL</label>
          <input
            type="url"
            placeholder="https://source.unsplash.com/featured/?tomatoes"
            className="input input-bordered w-full"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        <div>
          <label className="label">Description</label>
          <textarea
            placeholder="Short description..."
            className="textarea textarea-bordered w-full"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="label">Quantity</label>
          <input
            type="text"
            placeholder="e.g. 1kg"
            className="input input-bordered w-full"
            {...register("quantity", { required: "Quantity is required" })}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">{errors.quantity.message}</p>
          )}
        </div>

        <div>
          <label className="label">Price ($)</label>
          <input
            type="number"
            step="0.01"
            placeholder="e.g. 4.5"
            className="input input-bordered w-full"
            {...register("price", { required: "Price is required", min: 0.1 })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="label">Seller Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="input input-bordered w-full"
            {...register("sellerEmail", {
              required: "Seller email is required",
            })}
          />
          {errors.sellerEmail && (
            <p className="text-red-500 text-sm">{errors.sellerEmail.message}</p>
          )}
        </div>

        <div>
          <label className="label">Origin</label>
          <input
            type="text"
            placeholder="e.g. California, USA"
            className="input input-bordered w-full"
            {...register("origin", { required: "Origin is required" })}
          />
          {errors.origin && (
            <p className="text-red-500 text-sm">{errors.origin.message}</p>
          )}
        </div>

        <div>
          <label className="label">Nutritional Info</label>
          <textarea
            placeholder="Nutritional benefits..."
            className="textarea textarea-bordered w-full"
            {...register("nutritionalInfo", {
              required: "This field is required",
            })}
          />
          {errors.nutritionalInfo && (
            <p className="text-red-500 text-sm">
              {errors.nutritionalInfo.message}
            </p>
          )}
        </div>

        <div>
          <label className="label">Storage Tips</label>
          <textarea
            placeholder="e.g. Keep in a cool, dry place"
            className="textarea textarea-bordered w-full"
            {...register("storageTips", { required: "This field is required" })}
          />
          {errors.storageTips && (
            <p className="text-red-500 text-sm">{errors.storageTips.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-success w-full hover:scale-105 transition-transform duration-300"
        >
          ✅ Submit Ingredient
        </button>
      </form>
    </div>
  );
};

export default CreateRecipeIngredient;
