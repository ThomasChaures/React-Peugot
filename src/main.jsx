import { StrictMode } from "react"; // react
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Admin from "./components/Layout/AdminLayout/Layout.jsx";
import ProtectedRoutes from "./components/Rutas/ProtectedRoutes.jsx";
import Login from "./components/Auth/Login/Login.jsx";
import Register from "./components/Auth/Register/Register.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import DetailsCars from "./pages/Autos/Details.jsx";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoutes>
            <Home></Home>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/vehicle/details/:id",
        element: (
          <ProtectedRoutes>
            <DetailsCars></DetailsCars>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    element: <Admin />,
    children: [
      {
        path: "/admin",
        element: (
          <ProtectedRoutes>
            <Home></Home>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/admin/login",
        element: <Login></Login>,
      },
      {
        path: "/admin/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // renderizamos en #root //
  // obliga a nuestro componente para se renderice mas de una sola vez strictMode
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
