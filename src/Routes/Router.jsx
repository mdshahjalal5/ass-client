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
import MyRecipes from "../pages/MyRecipes";
import UpdateRecipe from "../pages/UpdateRecipe";
import FAQ from "../pages/Faq";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Blogs from "../modules/blogs/Blogs";
import BlogDetails from "../modules/blogs/BlogDetails";
import BlogsLayout from "../Layout/BlogsLayout";
import CreateBlog from "../modules/blogs/CreateBlog";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        // loader: () => fetch("http://localhost:5000/api/v1/recipes?limit=6"),
        loader: () =>
          fetch(
            "https://recipesharingserverpr.vercel.app/api/v1/recipes?limit=6",
          ),
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
        path: "/about",
        element: <About />,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      /*  {
        path: "/blog/:id",
        Component: BlogDetails,
      }, */
      {
        path: "/all-recipes",
        // loader: () => fetch("http://localhost:5000/api/v1/recipes?limit=0"),
        loader: () =>
          fetch(
            "https://recipesharingserverpr.vercel.app/api/v1/recipes?limit=0",
          ),
        element: <Recipes />,
      },

      {
        path: "/my-recipes",
        element: (
          <PrivateRoute>
            <MyRecipes />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdateRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "/recipes/:id",
        loader: ({ params }) =>
          fetch(
            `https://recipesharingserverpr.vercel.app/api/v1/recipe/${params.id}`,
          ),
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
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "contact",
        element: <Contact />,
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
    path: "/blogs",
    Component: BlogsLayout,
    errorElement: <h2>error</h2>,
    children: [
      {
        index: true,
        element: <Blogs />,
      },
      {
        path: ":id",
        element: <BlogDetails />,
      },
      {
        path: "create",
        element: <CreateBlog />,
      },
    ],
  },
]);
