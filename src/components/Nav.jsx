import Button from "./Button";
import { AlignJustify, Moon, Sun } from "lucide-react";
import { useContext, useState } from "react";
import Menu from "./Menu";
import Brand from "./Brand";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { useMediaQuery } from "react-responsive";
import { themeSwither } from "../hooks/ThemeSwitcher";

const Nav = () => {
  const isMobile = useMediaQuery({
    maxWidth: 639,
  });
  const [open, setOpen] = useState(false);

  const [themeLight, setThemeLight] = useState(true);
  const { user, logout, loading } = useContext(AuthContext);

  const { pathname } = useLocation();
  // const isBlogsRoute = pathname.startsWith("/blogs");
  // const isChefsRoute = pathname.startsWith("/chefs");
  // console.log(isChefsRoute, isBlogsRoute, isMobile, "Nav.jsx", 23);

  // const isMobile= ;
  // console.log(pathname, "Nav.jsx", 17);
  return (
    <header className="p-4  max-container sticky z-10 top-2">
      <nav className="flex items-center justify-between  p-2 rounded-xl sticky z-[1000] bg-gradient-to-r from-gray-50 to-gray-200">
        <div>
          <Brand />
        </div>

        {/* desktop device menu */}
        <div>
          <Menu
            className={`max-lg:hidden flex gap-5 text-gray-600 font-semibold text-lg`}
          />
        </div>
        <div className="flex items-center gap-1 flex-row-reverse">
          <div className="relative">
            <div className="max-lg:hidden">
              {loading ? (
                <span className="text-black">Loading...</span>
              ) : user ? (
                <div className="flex gap-2 items-center">
                  {user.photoURL ? (
                    <Link title={user.displayName} to="/my-profile">
                      <img
                        src={user.photoURL}
                        className="h-7 w-7 rounded-full border p-[2px]"
                      />
                    </Link>
                  ) : (
                    <Link to="/my-profile">{user.displayName}</Link>
                  )}
                  <div onClick={logout}>
                    <Button label={"Logout"} className={"text-white"} />
                  </div>
                </div>
              ) : (
                <Link to="/auth/login">
                  <Button label={"Login"} className={"text-white"} />
                </Link>
              )}
            </div>
            <div
              onClick={() => setOpen(!open)}
              className={`lg:hidden text-gray-700`}
            >
              <button>
                {open ? (
                  <span className="text-2xl font-semibold p-1 ">X</span>
                ) : (
                  <span>
                    <AlignJustify />
                  </span>
                )}
              </button>
            </div>
            <div
              className={`bg-gray-300  rounded-lg absolute -left-[124px] lg:hidden p-2 ${open ? "" : "hidden"}`}
            >
              {/* mobile device menu */}
              <Menu className="px-4  flex flex-col gap-1 text-gray-600 font-semibold text-lg" />
              {user ? (
                <button
                  onClick={logout}
                  className="pt-[-4px] pl-4 text-gray-600 font-semibold text-lg"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/auth/login"
                  className="pt-[-4px] pl-4 text-gray-600 font-semibold text-lg"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <button
            onClick={() => {
              themeSwither();
              setThemeLight(!themeLight);
            }}
            className="border px-1 py-1 rounded-full bg-gray-500 text-white scale-85"
          >
            {!themeLight ? <Sun /> : <Moon />}
          </button>
        </div>
      </nav>
    </header>
  );
};
<AlignJustify />;

export default Nav;
