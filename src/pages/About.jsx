const About = () => {
  return (
    <section className="min-h-screen py-20 px-6 my-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-6">
          About FlavorBook
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          <span className="font-semibold text-orange-500">FlavorBook</span> — a
          recipe-sharing haven for passionate foodies. Whether you're a kitchen
          novice or a seasoned chef, FlavorBook connects you with flavors from
          around the world. Discover top-rated dishes, create your own, and
          share the love of cooking!
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-orange-400">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              🌍 Global Cuisines
            </h3>
            <p className="text-gray-700">
              Explore recipes from diverse cultures, from Bangladeshi Begun
              Vorta to Italian Lasagna. Taste the world, one dish at a time!
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              👩‍🍳 Community Driven
            </h3>
            <p className="text-gray-700">
              Share your unique recipes and get inspired by other home cooks and
              chefs. Build your digital cookbook with FlavorBook!
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-teal-400">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              📖 Personalized Recipe Book
            </h3>
            <p className="text-gray-700">
              Save your favorite recipes in one place. Whether it’s Grandma’s
              curry or your own twist on tacos, FlavorBook is your digital
              cookbook.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-purple-400">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              🔍 Easy to Share & Discover
            </h3>
            <p className="text-gray-700">
              Share your best creations with the world and discover trending
              recipes from passionate food lovers across the globe.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-pink-400">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              ❤️ Smart Like System
            </h3>
            <p className="text-gray-700">
              Recipes rise to the top based on community love. The more likes,
              the more visibility. No ads, just real taste-based ranking.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-gray-400">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              🌗 Dark & Light Themes
            </h3>
            <p className="text-gray-700">
              Enjoy browsing recipes in your preferred style with our sleek dark
              and light mode toggle. Your eyes will thank you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
