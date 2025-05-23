const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen px-6 py-10 md:px-20 lg:px-36 text-gray-500 font-sans">
      <div className="bg-white shadow-xl rounded-xl p-8 md:p-12 border-l-4 border-orange-400 hover:shadow-2xl transition-all duration-300">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
          🍪 Privacy Policy
        </h1>

        <p className="mb-6 text-gray-500 text-lg">
          At <span className="font-bold text-orange-500">FlavorBook</span>, your
          privacy is a top priority. Here's how we handle your data and ensure
          it stays secure.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              🔐 Information We Collect
            </h2>
            <ul className="list-disc pl-6 text-gray-500">
              <li>Your name and email address upon registration</li>
              <li>Recipes you upload or like</li>
              <li>Browser and device information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              📦 How We Use Your Data
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>To personalize your experience</li>
              <li>To improve the platform and its features</li>
              <li>
                To send updates and recipe suggestions (only if you opt in)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              🚫 We Do NOT
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Sell or rent your data to third parties</li>
              <li>
                Store your password in readable format (everything is hashed
                securely)
              </li>
              <li>Spam your inbox — ever!</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              🔁 Cookies & Tracking
            </h2>
            <p className="text-gray-600">
              We use cookies to keep you logged in and remember your
              preferences. You can control these via your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              🛡️ Your Rights
            </h2>
            <p className="text-gray-600">
              You have full control over your data. You may request to access,
              update, or delete your information anytime by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              📬 Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns, reach out at{" "}
              <a
                href="mailto:muhommodshahjalal@gmail.com"
                className="text-blue-600 hover:underline font-medium"
              >
                muhommodshahjalal@gmail.com
              </a>
            </p>
          </div>
        </section>

        <p className="mt-10 text-sm text-gray-500">
          Last updated: May 22, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
