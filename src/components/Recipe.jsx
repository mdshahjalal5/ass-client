import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Button from "./Button";

const Recipe = ({ recipe }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname, "Recipe.jsx", 8);

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
        {pathname == "/my-recipes" && (
          <div className="flex gap-3 flex-col">
            <div className="flex-1 text-white">
              <Link to={`/update/${recipe._id}`}>
                <Button label={"Update "} className={"w-full"} />
              </Link>
            </div>
            <div className="flex-1  text-white">
              <Button label={"Delete"} className={"flex-1 w-full"} />
            </div>
          </div>
        )}
        <button
          className=" w-full btn btn-outline btn-primary 500   rounded hover:bg-purple-700 text-sm rounded-full"
          onClick={() => navigate(`/recipes/${recipe._id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Recipe;
