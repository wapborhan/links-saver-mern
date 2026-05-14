import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/home/HomePage";
import About from "../pages/about/About";
import NotFound from "../layout/NotFound/NotFound";
import Dash from "../layout/Dash";
import SIgnIn from "../layout/SIgnIn";
import Categories from "../pages/dashboard/categories/Categories";
import Website from "../pages/dashboard/websites/Website";
import Users from "../pages/dashboard/users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <SIgnIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dash />,
    errorElement: <NotFound />,
    children: [
      {
        path: "profile",
        element: "Kl",
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "websites",
        element: <Website />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
export default router;
