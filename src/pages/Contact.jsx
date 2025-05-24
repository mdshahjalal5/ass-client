import {
  Mail,
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen  text-gray-500 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-orange-600 mb-2">
            📬 Contact Us
          </h1>
          <p className="text-lg text-gray-  00">
            Have questions, suggestions, or just want to say hi? We'd love to
            hear from you!
          </p>
        </div>

        {/* Founder Info */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-orange-600">
            👨‍🍳 Md. Shahjalal
          </h2>
          <p className="text-gray-700 mb-1">
            Founder of{" "}
            <span className="font-semibold text-orange-500">FlavorBook</span>
          </p>
          <div className="flex flex-col gap-1 mt-3 text-gray-600">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> muhommodshahjalal@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 01540325659
            </p>
            <p className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a
                href="https://github.com/shahjalal-labs"
                className="hover:underline text-blue-600"
                target="_blank"
                rel="noreferrer"
              >
                github.com/shahjalal-labs
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a
                href="https://www.linkedin.com/in/md-shahjalal"
                className="hover:underline text-blue-600"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/md-shahjalal
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Youtube className="w-4 h-4" />
              <a
                href="https://youtube.com/@flavorbook"
                className="hover:underline text-red-600"
                target="_blank"
                rel="noreferrer"
              >
                youtube.com/@flavorbook
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Facebook className="w-4 h-4" />
              <a
                href="https://facebook.com/flavorbook"
                className="hover:underline text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                facebook.com/flavorbook
              </a>
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center shadow">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
            📰 Subscribe to Our Newsletter
          </h3>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-1/2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-orange-300">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            📩 Send a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-orange-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-orange-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-orange-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md transition-all"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500 pt-10 border-t">
          Want to collaborate, request a feature, or share your food journey?
          <br />
          Just reach out — we’re cooking something awesome together! 🍲🔥
        </div>
      </div>
    </div>
  );
};

export default Contact;
