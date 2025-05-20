import { Link } from "react-router-dom";
import { logo } from "../assets";

const Brand = ({ className }) => {
  return (
    <>
      <div className={`flex items-center gap-2 ${className || ""}`}>
        <img src={logo} width={25} className="rounded-full" />
        <h1 className=" max-sm:text-xl text-3xl font-semibold">
          <Link to="/">
            <span className="font-courgette text-purple-400">Flavor</span>
            <span className="font-kaushan text-sky-400">Book</span>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Brand;
