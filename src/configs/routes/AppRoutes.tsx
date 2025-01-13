import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../../pages/Login";
import { Home } from "../../pages/Home";



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
