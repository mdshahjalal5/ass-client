import { Outlet } from "react-router";
import Footerr from "../pages/Footerr";
import BlogSidebar from "../modules/blogs/BlogSidebar";

const ChefLayout = () => {
  return (
    <div className="border border-red-500 m-3">
      <h1>ChefLayout</h1>
      <div className="mt-10 grid grid-cols-12  max-container border ">
        <div className="col-span-6 md:col-span-7 lg:col-span-10 xl:col-span-10 max-sm:col-span-12">
          <Outlet />
        </div>
        <div className="col-span-6 md:col-span-5 lg:col-span-2 xl:col-span-2 max-sm:hidden  sticky  top-[30px]">
          <div className="sticky  top-[90px] z-10">
            <BlogSidebar />
          </div>
        </div>
      </div>
      {/* <Footerr></Footerr> */}
    </div>
  );
};

export default ChefLayout;
