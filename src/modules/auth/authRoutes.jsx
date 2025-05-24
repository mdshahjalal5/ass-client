import AuthLayout from "../../Layout/AuthLayout";
import ForgotPassword from "../../pages/ForgotPassword";
import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";

export const authRoutes = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      Component: LoginPage,
    },
    {
      path: "register",
      Component: RegisterPage,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
  ],
};
