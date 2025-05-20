import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="min-h-[60vh] max-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
