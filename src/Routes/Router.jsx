import { createBrowserRouter } from "react-router-dom";
import RecipeDetails from "../pages/RecipeDetails";
import App from "../App";
import Layout from "../Layout/Layout";
import Errorpage from "../components/Errorpage";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import TermsAndConditions from "../pages/TermsCondintion";
import ForgotPassword from "../pages/ForgotPassword";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
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
        loader: () => fetch("http://localhost:5000/api/v1/recipes?limit=0"),
        element: <App />,
      },
      {
        path: "/add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-recipes",
        loader: () => fetch("http://localhost:5000/api/v1/recipes?limit=0"),
        element: <Recipes />,
      },

      {
        path: "/recipes/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/recipe/${params.id}`),
        element: (
          <PrivateRoute>
            <RecipeDetails />
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
