import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../../pages/Login";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
