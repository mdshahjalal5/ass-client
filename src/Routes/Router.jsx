import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Errorpage from "../components/Errorpage";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import TermsAndConditions from "../pages/TermsCondintion";
import ServiceDetail from "../pages/ServiceDetails";
import ForgotPassword from "../pages/ForgotPassword";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import BlogsPage from "../components/Blog";
import AddRecipe from "../pages/AddRecipe";
import Recipes from "../components/Recipes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/all-recipes",
        loader: () =>
          fetch(
            "https://recipe-server-7lx42jtkj-sj3sj3s-projects.vercel.app/api/v1/recipes",
          ),
        element: <Recipes />,
      },
      {
        path: "/services/:id",
        loader: () => fetch("/data2.json"),
        element: (
          <PrivateRoute>
            <ServiceDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "terms",
        Component: TermsAndConditions,
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: (
          <PrivateRoute>
            <BlogsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        Component: Login,
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
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
]);
