import { useNavigate, useParams } from "react-router";
import { chefs } from "./chef.constant";

const ChefDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chef = chefs.find((c) => c.id === parseInt(id));

  if (!chef) {
    return <div className="p-6">Chef not found.</div>;
  }

  return (
    <div className="max-w-4xl mt-16 mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={chef.avatar}
          alt={chef.name}
          className="w-48 h-48 rounded-full"
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{chef.name}</h1>
          <p className="text-gray-600">{chef.specialty}</p>
          <p className="mt-2">{chef.bio}</p>
          <p className="mt-2 text-gray-700">Location: {chef.location}</p>
          <p className="mt-2 text-gray-700">Rating: {chef.rating} ⭐</p>
          <p className="mt-2 text-gray-700">
            Price per Hour: ${chef.pricePerHour}
          </p>
          <button
            onClick={() => navigate(`/chefs/checkout/${chef.id}`)}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
