import { Outlet } from "react-router";
import Footerr from "../pages/Footerr";
import BlogSidebar from "../modules/blogs/BlogSidebar";
import Nav from "../components/Nav";

const ChefLayout = () => {
  return (
    <div className="m-3">
      <Nav />
      <div className="mt-10 grid grid-cols-12  max-container gap-8">
        <div className="col-span-6 sm:col-span-7 md:col-span-8 lg:col-span-9 xl:col-span-9 max-sm:col-span-12">
          <Outlet />
        </div>
        <div className="col-span-6 sm:col-span-5 md:col-span-4 lg:col-span-3 xl:col-span-3 max-sm:hidden  sticky  top-[30px]">
          <div className="sticky  top-[90px] z-10">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Footerr></Footerr>
    </div>
  );
};

export default ChefLayout;
