import { useNavigate, useRouteError } from "react-router-dom";
import { notfound3 } from "../assets";
import Button from "./Button";
import Nav from "./Nav";

const Errorpage = () => {
  const error = useRouteError();

  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="flex-center min-h-[90vh] flex-col  ">
        <div className="flex-center  flex-col  p-2 sm:p-20 rounded-2xl drop-shadow-2xl space-y-9 bg-gray-200">
          <h1 className="text-red-500 text-2xl">
            {error?.statusText || error?.message}
          </h1>

          <img
            src={notfound3}
            className="max-w-[400px] rounded-2xl drop-shadow-2xl"
          />
          <div className="flex gap-6  w-full">
            <div onClick={() => navigate("/")} className="flex-1 ">
              <Button
                label={"Go Home"}
                className={"transform  w-full text-white"}
              />
            </div>
            <div className="flex-1 " onClick={() => navigate(navigate(-1))}>
              <Button
                label={"Go Back"}
                className={"transform  flex-1 w-full text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
