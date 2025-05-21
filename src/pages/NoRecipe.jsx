import { Link } from "react-router";
import Button from "../components/Button";

const NoRecipe = () => {
  return (
    <div className="flex justify-center items-center min-h-[30vh]">
      <div className="border rounded-lg hover:shadow-md transition duration-300  shadow-xl border-sky-500  bg-gradient-to-b from-gray-300 to-gray-100 mx-auto mt-10 p-5 w-fit">
        <h1 className="text-gray-500 text-xl">
          You have no recipes, please add one
        </h1>
        <div className="text-center mt-4">
          <Link to="/add-recipe">
            <Button label={"Add Recipe"} className={"text-white "} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoRecipe;
