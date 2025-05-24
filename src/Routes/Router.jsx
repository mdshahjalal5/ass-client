import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Errorpage from "../components/Errorpage";
import TermsAndConditions from "../pages/TermsCondintion";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import FAQ from "../pages/Faq";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Contact from "../pages/Contact";
import { chefRooute } from "../modules/chef/chefRoute";
import { blogRoutes } from "../modules/blogs/blogRoute";
import { authRoutes } from "../modules/auth/authRoutes";
import recipeRoutes from "../modules/recipe/recipeRoutes";
import RecipeMarketLayout from "../modules/RecipieMarket/RecipeMarketLayout";
import { RecipeMarkteRoutes } from "../modules/RecipieMarket/RecipeMarkteRoutes";

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
            "https://worlds-recipes-sharing-server.vercel.app/api/v1/recipes?limit=6",
          ),
        element: <App />,
      },
      ...recipeRoutes,
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
  authRoutes,
  blogRoutes,
  chefRooute,
  RecipeMarkteRoutes,
]);
