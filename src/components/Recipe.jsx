const Recipe = ({ recipe }) => {
  const { image, title, cuisine, likeCount } = recipe;

  return (
    <div className="border rounded-lg shadow hover:shadow-md transition duration-300 max-w-[350px] shadow-xl border-sky-500  bg-gradient-to-b from-gray-300 to-gray-100">
      <img
        src={image || "https://via.placeholder.com/400x250?text=No+Image"}
        alt={title}
        className="w-[200px]  object-cover rounded-lg shadow-xl mx-auto mt-2"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Cuisine: {cuisine}</p>
        <p className="text-sm text-gray-600">Likes: {likeCount}</p>

        <button
          className="mt-2 w-full bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 text-sm"
          onClick={() => (window.location.href = `/recipes/${recipe._id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Recipe;
