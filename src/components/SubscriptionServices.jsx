import React from "react";
import useFetch from "../hooks/Usefetch";
import { useNavigate } from "react-router";

const SubscriptionServices = () => {
  const navigate = useNavigate();
  const { data: subscriptionServices, loading } = useFetch("data2.json");

  return loading ? (
    <div>
      Loading...
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {subscriptionServices.map((service) => (
        <div
          key={service.id}
          className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          data-aos-anchor-placement="top-center"
        >
          <img
            src={service.thumbnail}
            alt={service.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-sm text-gray-500 mb-1">
              Category: {service.techCategory}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Price: {service.price} / {service.frequency}
            </p>
            <p className="text-sm text-gray-700 mb-4">{service.description}</p>
            <button
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionServices;
