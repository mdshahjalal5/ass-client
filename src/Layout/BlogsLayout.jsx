import { Outlet } from "react-router";
import Footerr from "../pages/Footerr";
import BlogSidebar from "../modules/blogs/BlogSidebar";
import Nav from "../components/Nav";

const BlogsLayout = () => {
  return (
    <>
      <Nav />
      <div className="mt-10 grid grid-cols-12  max-container ">
        <div className="col-span-6 md:col-span-5 lg:col-span-4 xl:col-span-3 max-sm:hidden  sticky  top-[30px]">
          <div className="sticky  top-[90px] z-10">
            <BlogSidebar />
          </div>
        </div>

        <div className="col-span-6 md:col-span-7 lg:col-span-8 xl:col-span-9 max-sm:col-span-12">
          <Outlet />
        </div>
      </div>
      <Footerr></Footerr>
    </>
  );
};

export default BlogsLayout;
