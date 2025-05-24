import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUtensils,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const CreateChef = () => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    bio: "",
    specialty: "",
    rating: "",
    pricePerHour: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.avatar.trim()) newErrors.avatar = "Avatar URL is required";
    if (!formData.bio.trim()) newErrors.bio = "Bio is required";
    if (!formData.specialty.trim())
      newErrors.specialty = "Specialty is required";
    if (!formData.rating || isNaN(formData.rating))
      newErrors.rating = "Valid rating required";
    if (!formData.pricePerHour || isNaN(formData.pricePerHour))
      newErrors.pricePerHour = "Valid price required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Chef created: ", formData);
    navigate("/chefs");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-base-100 shadow-xl rounded-xl border border-base-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
        👨‍🍳 Create New Chef
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="label">
            <span className="label-text font-medium">
              <FaUser className="inline mr-1" /> Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Jamie Oliver"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-error text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Avatar */}
        <div>
          <label className="label">
            <span className="label-text font-medium">🖼️ Avatar URL</span>
          </label>
          <input
            type="url"
            name="avatar"
            placeholder="https://example.com/avatar.jpg"
            className="input input-bordered w-full"
            value={formData.avatar}
            onChange={handleChange}
          />
          {errors.avatar && (
            <p className="text-error text-sm mt-1">{errors.avatar}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label className="label">
            <span className="label-text font-medium">📝 Bio</span>
          </label>
          <textarea
            name="bio"
            className="textarea textarea-bordered w-full"
            placeholder="Short description about the chef"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
          {errors.bio && (
            <p className="text-error text-sm mt-1">{errors.bio}</p>
          )}
        </div>

        {/* Specialty */}
        <div>
          <label className="label">
            <span className="label-text font-medium">
              <FaUtensils className="inline mr-1" /> Specialty
            </span>
          </label>
          <input
            type="text"
            name="specialty"
            placeholder="e.g. Italian Cuisine"
            className="input input-bordered w-full"
            value={formData.specialty}
            onChange={handleChange}
          />
          {errors.specialty && (
            <p className="text-error text-sm mt-1">{errors.specialty}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="label">
            <span className="label-text font-medium">⭐ Rating (1-5)</span>
          </label>
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="e.g. 4.9"
            className="input input-bordered w-full"
            value={formData.rating}
            onChange={handleChange}
          />
          {errors.rating && (
            <p className="text-error text-sm mt-1">{errors.rating}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="label">
            <span className="label-text font-medium">
              <FaMoneyBillWave className="inline mr-1" /> Price per Hour ($)
            </span>
          </label>
          <input
            type="number"
            name="pricePerHour"
            placeholder="e.g. 75"
            className="input input-bordered w-full"
            value={formData.pricePerHour}
            onChange={handleChange}
          />
          {errors.pricePerHour && (
            <p className="text-error text-sm mt-1">{errors.pricePerHour}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="label">
            <span className="label-text font-medium">
              <FaMapMarkerAlt className="inline mr-1" /> Location
            </span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="e.g. Rome, Italy"
            className="input input-bordered w-full"
            value={formData.location}
            onChange={handleChange}
          />
          {errors.location && (
            <p className="text-error text-sm mt-1">{errors.location}</p>
          )}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="btn btn-primary w-full hover:scale-[1.02] transition-transform duration-200"
          >
            ✅ Create Chef Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateChef;
