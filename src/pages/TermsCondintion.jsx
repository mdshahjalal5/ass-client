import React from "react";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-20">
      <Helmet>
        <title>Terms & Conditions || FlavorBook</title>
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8 border border-orange-300">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">
            🍽️ Terms & Conditions
          </h1>
          <p className="text-gray-600 italic">
            Last updated: <span className="font-semibold">May 22, 2025</span>
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="terms icon"
            className="w-20 mx-auto mt-4 animate-bounce"
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <div className="group hover:bg-orange-50 hover:shadow-inner p-4 rounded-lg transition">
            <h2 className="text-xl font-semibold text-orange-500">
              🧑‍🍳 User Responsibilities
            </h2>
            <p className="mt-2">
              You agree to use FlavorBook for lawful purposes only. Recipes you
              add must be original or properly credited. Sharing harmful or
              plagiarized content is prohibited.
            </p>
          </div>

          <div className="group hover:bg-yellow-50 hover:shadow-inner p-4 rounded-lg transition">
            <h2 className="text-xl font-semibold text-orange-500">
              🔐 Privacy & Security
            </h2>
            <p className="mt-2">
              We respect your privacy. Your personal data like email or profile
              photo will never be shared without your permission. All passwords
              are encrypted. 🔒
            </p>
          </div>

          <div className="group hover:bg-orange-100 hover:shadow-inner p-4 rounded-lg transition">
            <h2 className="text-xl font-semibold text-orange-500">
              🥗 Recipe Ownership
            </h2>
            <p className="mt-2">
              All recipes posted by users remain their intellectual property.
              However, by posting them, you allow FlavorBook to display and
              feature your recipes across the platform.
            </p>
          </div>

          <div className="group hover:bg-yellow-100 hover:shadow-inner p-4 rounded-lg transition">
            <h2 className="text-xl font-semibold text-orange-500">
              🚫 Misuse & Termination
            </h2>
            <p className="mt-2">
              FlavorBook reserves the right to suspend or terminate accounts
              that violate these terms, including hate speech, spam, or abusive
              behavior.
            </p>
          </div>

          <div className="group hover:bg-orange-50 hover:shadow-inner p-4 rounded-lg transition">
            <h2 className="text-xl font-semibold text-orange-500">
              ✨ Changes to These Terms
            </h2>
            <p className="mt-2">
              We may update our Terms and Conditions periodically. Continued use
              of FlavorBook means you accept the updated terms.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300 shadow-md hover:shadow-lg">
            I Agree 🍊
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
