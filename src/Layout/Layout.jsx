import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footerr from "../pages/Footerr";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="min-h-[60vh] max-container">
        <Outlet />
      </main>
      <Footerr />
    </>
  );
};

export default Layout;
