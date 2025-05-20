import { Outlet } from "react-router";
import Nav from "../components/Nav";

const AuthLayout = () => {
  return (
    <div className="max-container">
      <Nav />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
