import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const services = useLoaderData();
  console.log(services, "ServiceDetails.jsx", 13);

  const { id } = useParams();
  const service = services?.find((s) => s.id === parseInt(id));
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = () => {
    if (!review || !rating || rating < 1 || rating > 5) return;
    setReviews((prev) => [...prev, { review, rating }]);
    setReview("");
    setRating("");
  };

  if (!service) return <p>Service not found</p>;

  return (
    <div className="p-6  mx-auto lg:flex  gap-3 sm:gap-12 justify-between mt-10 min-h-[70vh] items-center">
      <Helmet>
        <title>Service Details || Subscription Box</title>
      </Helmet>
      {/* details card */}
      <div className="p-4 rounded-lg shadow-xl bg-base-300 flex-1">
        <img
          src={service.thumbnail}
          alt={service.name}
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4 text-purple-400">
          {service.name}
        </h1>
        <p className="text-gray-500">{service.description}</p>
        <p className="mt-2">
          {service.techCategory} | {service.price} / {service.frequency}
        </p>
      </div>

      {/* reviews card */}
      <div className="bg-base-300 shadow-xl p-4 rounded-lg max-lg:mt-7 h-full py-22 flex-1">
        <div className="mt-6">
          <h2 className="text-xl mb-2">Leave a Review</h2>
          <input
            type="text"
            placeholder="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="border p-2 w-full mb-2 input input-accent"
          />
          <input
            type="number"
            placeholder="Rating (1-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border p-2 w-full mb-2 input input-info"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit Review
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-sky-500">User Reviews:</h3>
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="border p-2 mt-2 rounded w-full  grad-orang border-purple-500 bg-base-100"
            >
              <p>{r.review}</p>
              <p className="text-sm text-gray-500">Rating: {r.rating}/5</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
