import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import Brand from "./Brand";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import NewsletterSubscription from "./newsLetter";

const Footer = () => {
  return (
    <footer className="max-container space-y-4  grid lg:grid-cols-3 bg-gray-700  p-9  md:p-16  gap-9 mt-10">
      <div>
        <Brand className={"justify-cente"} />
        {/* <h2 className="hide">Subscribe to our newsletter</h2> */}

        <p className="text-gray-400 my-4">
          Innovating tomorrow, one smart tech box at a time.
        </p>
        <FooterLinks />
      </div>
      <div>
        <Menu
          className={`flex flex-col gap- text-gray-400 font-semibold text-lg max-sm:flex-col max-sm:gap-[1px]`}
          isExternal={true}
        />
        <div className="flex flex-col *:text-gray-400">
          <Link
            to="/terms"
            className="text-gray-200 font-semibold text-lg max-sm:flex-col max-sm:gap-[1px]"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/terms"
            className="text-gray-200 font-semibold text-lg max-sm:flex-col max-sm:gap-[1px]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* icons */}

      <div>
        <NewsletterSubscription />
      </div>
    </footer>
  );
};

export default Footer;
