import { FaStar } from "react-icons/fa";
import { feedbacks } from "../constant";

const FeedbackPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
        ❤️ What Our Users Say
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((fb, i) => (
          <div
            key={i}
            className="bg-white shadow-lg p-6 rounded-xl border hover:scale-105 transition-transform duration-300 ease-in-out border-orange-200 hover:shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={fb.avatar}
                alt={fb.name}
                className="w-14 h-14 rounded-full border-2 border-orange-400"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {fb.name}
                </h4>
                <div className="flex text-yellow-400">
                  {Array.from({ length: fb.rating }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic mb-2">{fb.comment}</p>
            <div className="text-3xl">{fb.emoji}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-20 w-20 text-orange-500 animate-bounce"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
            4.42 3 7.5 3c1.74 0 3.41 0.81 
            4.5 2.09C13.09 3.81 14.76 3 16.5 
            3 19.58 3 22 5.42 22 8.5c0 
            3.78-3.4 6.86-8.55 
            11.54L12 21.35z"
          />
        </svg>
        <p className="mt-4 text-lg text-gray-400">
          We love hearing from you! 🧡
        </p>
      </div>
    </div>
  );
};

export default FeedbackPage;
