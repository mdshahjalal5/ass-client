const Newsletter = () => {
  return (
    <div className="mt-16 bg-orange-50 p-10 rounded-lg text-center">
      <h2 className="text-2xl font-bold text-orange-700 mb-2">
        📰 Subscribe to our Newsletter
      </h2>
      <p className="text-gray-700 mb-4">
        Get the latest recipes, blogs, and kitchen inspiration directly in your
        inbox.
      </p>
      <form className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 w-full sm:w-96"
        />
        <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-all">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
