import { logo } from "../assets";
import Button from "./Button";
import { AlignJustify } from "lucide-react";
import { useContext, useState } from "react";
import Menu from "./Menu";
import Brand from "./Brand";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { user, logout, loading } = useContext(AuthContext);
  console.log(user?.photoURL, "Nav.jsx", 13);
  return (
    <header className="p-4  max-container sticky z-10 top-2">
      <nav className="flex-between  p-2 rounded-xl sticky z-[1000]  bg-gray-200">
        <Brand />
        {/* desktop device menu */}
        <Menu
          className={`max-md:hidden flex gap-5 text-gray-600 font-semibold text-lg`}
        />

        <div className="relative">
          <div className="max-md:hidden">
            {loading ? (
              <span className="text-black">Loading...</span>
            ) : user ? (
              <div className="flex gap-2 items-center">
                {user.photoURL ? (
                  <Link title={user.displayName} to="/my-profile">
                    <img
                      src={user.photoURL}
                      className="h-10 w-10 rounded-full border p-[2px]"
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
          <div onClick={() => setOpen(!open)} className="md:hidden ">
            <button>
              {open ? (
                <span className="text-2xl font-semibold p-1">X</span>
              ) : (
                <AlignJustify />
              )}
            </button>
          </div>
          <div
            className={`bg-gray-300  rounded-lg absolute -left-[124px] md:hidden p-2 ${open ? "" : "hidden"}`}
          >
            {/* mobile device menu */}
            <Menu className="p-4  flex flex-col gap-1 text-gray-600 font-semibold text-lg" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
