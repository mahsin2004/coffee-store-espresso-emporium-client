import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../component/AddProduct";
import Update from "../component/Update";
import Details from "../component/Details";

const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-espresso-emporium-l50u3ok3n-mahsin2004s-projects.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-espresso-emporium-l50u3ok3n-mahsin2004s-projects.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
]);

export default Routes;
