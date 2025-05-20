import { NavLink, Link } from "react-router-dom";
import { links } from "../constant";
import { useMediaQuery } from "react-responsive";

const Menu = ({ className, isExternal }) => {
  return (
    <ul className={`${className}`}>
      {links.map((link) =>
        isExternal ? (
          <Link key={link.label} to={link.path}>
            {link.label}
          </Link>
        ) : (
          <NavLink key={link.label} to={link.path}>
            {link.label}
          </NavLink>
        ),
      )}
    </ul>
  );
};

export default Menu;
