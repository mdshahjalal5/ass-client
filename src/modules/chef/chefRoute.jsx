import ChefLayout from "../../Layout/ChefLayout";
import ChefChekout from "./ChefChekout";
import PrivateRoute from "../../Routes/PrivateRoute";
import ChefDetails from "./ChefDetails";
import Chefs from "./Chefs";
import UpdateChef from "./UpdateChef";
import CreateChef from "./CreateChef";

export const chefRooute = {
  path: "/chefs",
  Component: ChefLayout,
  children: [
    {
      index: true,
      element: <Chefs />,
    },
    {
      path: ":id",
      element: (
        <PrivateRoute>
          <ChefDetails />
        </PrivateRoute>
      ),
    },
    {
      path: "update/:id",
      element: (
        <PrivateRoute>
          <UpdateChef />
        </PrivateRoute>
      ),
    },
    {
      path: "register",
      element: (
        <PrivateRoute>
          <CreateChef />
        </PrivateRoute>
      ),
    },
    {
      path: "checkout/:id",
      element: (
        <PrivateRoute>
          <ChefChekout />
        </PrivateRoute>
      ),
    },
  ],
};
