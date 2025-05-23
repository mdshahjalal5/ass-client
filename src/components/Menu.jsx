import { NavLink, Link } from "react-router";
import { links } from "../constant";

const Menu = ({ className, isExternal }) => {
  return (
    <ul className={`${className} w-full flex lg:items-center `}>
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
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="bt -1">
          Blogs
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/blogs/create">Create Blog</NavLink>
          </li>
        </ul>
      </div>
      {/* <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li></li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details> */}
    </ul>
  );
};

export default Menu;
