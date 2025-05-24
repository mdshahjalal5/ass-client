const RecipeMarketHeader = () => {
  return (
    <section className=" pt-2 pb-4 mb-14 px-2 text-center relative overflow-hidden">
      <div className="w-full mx-auto">
        <h1 className="text-2xl md:text-2xl font-extrabold text-green-700  mb-4 leading-tight animate-fade-in-up">
          🛒 Recipestore – Recipe Ingredients
        </h1>
        <p className="text-lg  text-gray-400  mb-6 animate-fade-in-up delay-100 rounded-xl">
          Everything you need to bring your recipes to life! 🍅🥕🧄 All
          ingredients are
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            {" "}
            fresh, organic,
          </span>{" "}
          and come with the{" "}
          <span className="font-semibold text-amber-600">best prices</span> on
          the market. ✨
        </p>
        <p className="max-lg:hidden text-md md:text-lg text-gray-600 dark:text-gray-400 animate-fade-in-up delay-200">
          🥦 Sourced from trusted sellers · 🚚 Fast delivery · 💰
          Budget-friendly · 👨‍🌾 Direct from farms
        </p>
      </div>

      {/* Decorative shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400 opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default RecipeMarketHeader;
