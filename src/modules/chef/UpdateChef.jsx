import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const UpdateChef = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const chef = location.state?.chef;

  const [formData, setFormData] = useState({
    name: chef?.name || "",
    avatar: chef?.avatar || "",
    bio: chef?.bio || "",
    specialty: chef?.specialty || "",
    pricePerHour: chef?.pricePerHour || "",
    location: chef?.location || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.avatar) newErrors.avatar = "Avatar URL is required";
    if (!formData.bio) newErrors.bio = "Bio is required";
    if (!formData.specialty) newErrors.specialty = "Specialty is required";
    if (!formData.pricePerHour || isNaN(formData.pricePerHour))
      newErrors.pricePerHour = "Price must be a number";
    if (!formData.location) newErrors.location = "Location is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Updated Chef:", formData);
      // TODO: API call to update chef
      navigate("/chefs");
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        ✏️ Update Chef Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          {
            label: "Full Name",
            name: "name",
            type: "text",
            placeholder: "Giovanni Ricci",
          },
          {
            label: "Avatar URL",
            name: "avatar",
            type: "url",
            placeholder: "https://...",
          },
          {
            label: "Bio",
            name: "bio",
            type: "textarea",
            placeholder: "Brief description...",
          },
          {
            label: "Specialty",
            name: "specialty",
            type: "text",
            placeholder: "Italian Cuisine",
          },
          {
            label: "Price Per Hour",
            name: "pricePerHour",
            type: "number",
            placeholder: "80",
          },
          {
            label: "Location",
            name: "location",
            type: "text",
            placeholder: "Rome, Italy",
          },
        ].map(({ label, name, type, placeholder }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                name={name}
                rows="3"
                placeholder={placeholder}
                className={`w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-800 dark:text-white ${
                  errors[name] ? "border-red-500" : "border-gray-300"
                }`}
                value={formData[name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-800 dark:text-white ${
                  errors[name] ? "border-red-500" : "border-gray-300"
                }`}
                value={formData[name]}
                onChange={handleChange}
              />
            )}
            {errors[name] && (
              <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
        >
          ✅ Update Profile
        </button>
      </form>
    </motion.div>
  );
};

export default UpdateChef;
