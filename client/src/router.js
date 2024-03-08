import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Layout from "./views/Dashboard/Layout";
import Login from "./views/Login";
import Product from "./views/Dashboard/Product";
import Home from "./views/Dashboard/Home";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Product />,
      },
    ],
  },
]);

export default router;
