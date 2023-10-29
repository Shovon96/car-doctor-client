import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Registetion from "../Pages/Login/Registetion";
import CheckOut from "../Components/CheckOut/CheckOut";
import Bookings from "../Components/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registetion',
            element: <Registetion></Registetion>
        },
        {
          path: '/checkOut/:id',
          element: <PrivetRoutes><CheckOut></CheckOut></PrivetRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivetRoutes><Bookings></Bookings></PrivetRoutes>
        }
      ]
    },
  ]);

  export default router;