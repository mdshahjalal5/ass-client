import React from "react";
import { chefs } from "./chef.constant";
import { Link } from "react-router";

const Chefs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">🍽️ Meet Our Chefs</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <img
              src={chef.avatar}
              alt={chef.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
              {chef.name}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-2">
              {chef.specialty}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
              📍 {chef.location}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              {chef.bio}
            </p>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span>⭐ {chef.rating}</span>
              <span>💰 ${chef.pricePerHour}/hr</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              <Link to={`${chef.id}`}>View Details</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chefs;
