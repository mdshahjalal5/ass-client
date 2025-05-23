import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footerr = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-50 to-gray-200 text-gray-800 mt-16 pt-10 pb-6 px-6 md:px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-600">🍴 FlavorBook</h2>
          <p className="text-gray-700">
            Discover, cook, and share your favorite recipes from around the
            globe. A delicious journey awaits. 🌍✨
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="hover:text-orange-600 cursor-pointer transition" />
            <Instagram className="hover:text-orange-600 cursor-pointer transition" />
            <Twitter className="hover:text-orange-600 cursor-pointer transition" />
            <Youtube className="hover:text-orange-600 cursor-pointer transition" />
            <Mail className="hover:text-orange-600 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-500 font-medium">
            <li>
              <Link to="/" className="hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-orange-600">
                All Recipes
              </Link>
            </li>
            <li>
              <Link to="/add-recipe" className="hover:text-orange-600">
                Add Recipe
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-orange-600">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-orange-600">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">Legal</h3>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li>
              <Link to="/terms" className="hover:text-orange-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-orange-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-orange-600">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">
            🍋 Stay Updated
          </h3>
          <p className="text-gray-700 mb-3">
            Subscribe to get the latest recipes and cooking inspiration!
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-4 rounded-md font-semibold"
            >
              Subscribe 🍊
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-orange-200 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FlavorBook. All rights reserved.
      </div>
    </footer>
  );
};

export default Footerr;
