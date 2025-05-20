import { doctor1, doctor2 } from "../assets";
import Button from "./Button";
import InputComp from "./Input";

const Banner = () => {
  return (
    <div className="sm:p-9 p-2 sm:px-16  border-x-[4px] border-t-[4px] border-[#dbeafe] bg-gray-100 rounded-xl mt-5 grad-orange grad-2">
      <h1 className="text-gray-600 w-5/6 mx-auto">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </h1>
      <div className="flex flex-col sm:flex-row sm:gap-7 gap-2 justify-center mt-5 ">
        <InputComp
          label={"Search by doctor"}
          type={"text"}
          className={
            "border border-sky-400   rounded-full max-sm:p-3  pl-7 sm:w-[570px]"
          }
        />
        <Button
          label={"Search Now"}
          className={"transform scale-x-115 text-white"}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10 xl:">
        <img src={doctor1} className="rounded-xl w-[100%] xl:w-[40%]" />
        <img src={doctor2} className="rounded-xl w-[100%] xl:w-[40%]" />
      </div>
    </div>
  );
};

export default Banner;
