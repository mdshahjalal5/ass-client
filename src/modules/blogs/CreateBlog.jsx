import { useState } from "react";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    readTime: "",
    authorName: "",
    authorBio: "",
    authorAvatar: "", // Will store base64 string
    preview: "",
  });

  const [errors, setErrors] = useState({});
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          authorAvatar: reader.result,
        }));
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.tags.trim()) newErrors.tags = "Tags are required.";
    if (!formData.readTime.trim())
      newErrors.readTime = "Read time is required.";
    if (!formData.authorName.trim())
      newErrors.authorName = "Author name is required.";
    if (!formData.authorBio.trim())
      newErrors.authorBio = "Author bio is required.";
    if (!formData.authorAvatar)
      newErrors.authorAvatar = "Avatar image is required.";
    if (!formData.preview.trim())
      newErrors.preview = "Preview text is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBlog = {
      id: Date.now(),
      title: formData.title,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      readTime: formData.readTime,
      author: {
        name: formData.authorName,
        bio: formData.authorBio,
        avatar: formData.authorAvatar,
      },
      preview: formData.preview,
      comments: [],
    };

    console.log("Blog Created:", newBlog);
    alert("Blog created successfully! (Check console)");
    // Save to state or API here
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Blog Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          error={errors.title}
        />

        <InputField
          label="Tags (comma separated)"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          error={errors.tags}
        />

        <InputField
          label="Read Time (e.g., 5 min)"
          name="readTime"
          value={formData.readTime}
          onChange={handleChange}
          error={errors.readTime}
        />

        <InputField
          label="Author Name"
          name="authorName"
          value={formData.authorName}
          onChange={handleChange}
          error={errors.authorName}
        />

        <InputField
          label="Author Bio"
          name="authorBio"
          value={formData.authorBio}
          onChange={handleChange}
          error={errors.authorBio}
        />

        <div>
          <label className="block font-medium mb-1">Author Avatar Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block mb-2"
          />
          {errors.authorAvatar && (
            <p className="text-red-500 text-sm">{errors.authorAvatar}</p>
          )}
          {avatarPreview && (
            <img
              src={avatarPreview}
              alt="Avatar Preview"
              className="w-24 h-24 object-cover rounded-full mt-2"
            />
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Blog Preview Text</label>
          <textarea
            name="preview"
            value={formData.preview}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
          />
          {errors.preview && (
            <p className="text-red-500 text-sm">{errors.preview}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, error }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default CreateBlog;
