/* import { useNavigate } from "react-router";

const Recipe = ({ recipe }) => {
  const navigate = useNavigate();
  const { image, title, cuisine, likeCount } = recipe;

  return (
    <div className="border rounded-lg shadow hover:shadow-md transition duration-300 max-w-[350px] shadow-xl border-sky-500 bg-gradient-to-b from-gray-300 to-gray-100 max-sm:min-w-[270px]">
      <div className={`${image ? "" : "h-[200px] w-[200px] border"}`}>
        <img
          src={image || "https://via.placeholder.com/400x250?text=No+Image"}
          alt={title}
          className="w-[200px] object-cover rounded-lg shadow-xl mx-auto mt-2"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Cuisine: {cuisine}</p>
        <p className="text-sm text-gray-600">Likes: {likeCount}</p>
        <button
          className="mt-2 w-full bg-purple-500 text-white py-2 px-3 rounded hover:bg-purple-700 text-sm"
          onClick={() => navigate(`/recipes/${recipe._id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Recipe; */

import { useState } from "react";
import { useNavigate } from "react-router";

const Recipe = ({ recipe }) => {
  const navigate = useNavigate();
  const { image, title, cuisine, likeCount } = recipe;
  const [isImageValid, setIsImageValid] = useState(true);

  return (
    <div className="border rounded-lg shadow hover:shadow-md transition duration-300 max-w-[350px] shadow-xl border-sky-500 bg-gradient-to-b from-gray-300 to-gray-100 max-sm:min-w-[270px]">
      <img
        src={image || "https://via.placeholder.com/400x250?text=No+Image"}
        // alt={title}
        onError={() => setIsImageValid(false)}
        className="w-[200px] object-cover rounded-xl shadow-xl mx-auto mt-2"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Cuisine: {cuisine}</p>
        <p className="text-sm text-gray-600">Likes: {likeCount}</p>
        <button
          className="mt-2 w-full bg-purple-500 text-white py-2 px-3 rounded hover:bg-purple-700 text-sm"
          onClick={() => navigate(`/recipes/${recipe._id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Recipe;
