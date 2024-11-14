import { lazy, StrictMode, Suspense } from "react"; // react
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Admin from "./components/Layout/AdminLayout/Layout.jsx";
import ProtectedRoutes from "./components/Rutas/ProtectedRoutes.jsx";
const Login = lazy(() => import("./components/Auth/Login/Login.jsx"));
const Register = lazy(() => import("./components/Auth/Register/Register.jsx"));
const Logout = lazy(() => import("./components/Auth/Logout/Logout.jsx"));
import "./index.css";
const Home = lazy(() => import("./pages/Home.jsx"));
const DetailsCars = lazy(() => import("./pages/Autos/Details.jsx"));
import Error404Page from "./pages/Error404Page.jsx";
import IndexAdmin from "./pages/Admin/index.jsx";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        errorElement: <Error404Page />,
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<div>Loading...</div>}>
              <Home></Home>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/vehicle/details/:id",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<div>Loading...</div>}>
              <DetailsCars></DetailsCars>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login></Login>
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Register></Register>
          </Suspense>
        ),
      },
      {
        path: "/logout",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Logout></Logout>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Error404Page />,
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
            <IndexAdmin></IndexAdmin>
          </ProtectedRoutes>
        ),
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
