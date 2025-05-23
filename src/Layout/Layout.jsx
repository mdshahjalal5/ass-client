import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footerr from "../pages/Footerr";
import LottieAnimation from "../animation/Walking";

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="max-w-[90px]">{/* <Example /> */}</div>
      <main className="min-h-[60vh] max-container">
        <Outlet />
      </main>
      <Footerr />
    </>
  );
};

export default Layout;
