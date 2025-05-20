import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="flex gap-3 justify-cente max-sm:gap-3 ">
      <Link
        to="https://www.youtube.com/@muhommodshahjalal9811"
        target="_blank"
        className="border p-2 rounded-full bg-blue-300"
      >
        <Facebook />
      </Link>
      <Link
        to="https://www.youtube.com/@muhommodshahjalal9811"
        target="_blank"
        className="border p-2 rounded-full bg-blue-300"
      >
        <Youtube />
      </Link>
      <Link
        to="https://www.youtube.com/@muhommodshahjalal9811"
        target="_blank"
        className="border p-2 rounded-full bg-blue-300"
      >
        <Instagram />
      </Link>
      <Link
        to="https://www.youtube.com/@muhommodshahjalal9811"
        target="_blank"
        className="border p-2 rounded-full bg-blue-300"
      >
        <Twitter />
      </Link>
      <Link
        to="https://www.youtube.com/@muhommodshahjalal9811"
        target="_blank"
        className="border p-2 rounded-full bg-blue-300"
      >
        <Mail />
      </Link>
    </div>
  );
};

export default FooterLinks;
