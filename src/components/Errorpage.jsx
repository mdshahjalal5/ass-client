import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

const Errorpage = () => {
  const error = useRouteError();

  const navigate = useNavigate();
  return (
    <>
      <div className="flex-center min-h-[90vh] flex-col  ">
        <div className="flex-center  flex-col  p-6 sm:p-20 rounded-2xl drop-shadow-2xl space-y-9 bg-gray-200">
          <h1 className="text-red-500 text-2xl">
            {error?.statusText || error?.message}
          </h1>

          <img
            src={
              "https://images.deepai.org/art-image/b6e5bbc549784002bd10642c72b68412/a-creative-and-humorous-404-not-found-illustration-wi.jpg"
            }
            className="max-w-[400px] max-sm:max-w-[280px] rounded-2xl drop-shadow-2xl"
          />
          <div className="flex gap-6  w-full">
            <div onClick={() => navigate("/")} className="flex-1 ">
              <Button
                label={"Go Home"}
                className={"transform  w-full text-white"}
              />
            </div>
            <div className="flex-1" onClick={() => navigate(-1)}>
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
