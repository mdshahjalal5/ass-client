import { Link } from "react-router-dom";
import { logo } from "../assets";

const Brand = ({ className }) => {
  return (
    <>
      <div className={`flex items-center gap-2 ${className || ""}`}>
        <img
          src={"https://i.ibb.co.com/wZsFdq7Z/profile.jpg"}
          width={25}
          className="rounded-full"
        />
        <h1 className=" max-sm:text-xl text-3xl font-semibold">
          <Link to="/">
            <span className="font-courgette text-sky-400">Subscription</span>
            <span className="font-kaushan text-purple-400">Box</span>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Brand;
