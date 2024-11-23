import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Admin from "./components/Layout/AdminLayout/Layout.jsx";
import ProtectedRoutes from "./components/Rutas/ProtectedRoutes.jsx";
import ProtectedRoutesAdmin from "./components/Rutas/ProtectedRoutesAdmin.jsx";
const Login = lazy(() => import("./components/Auth/Login/Login.jsx"));
const Register = lazy(() => import("./components/Auth/Register/Register.jsx"));
const Logout = lazy(() => import("./components/Auth/Logout/Logout.jsx"));
import "./index.css";
const Home = lazy(() => import("./pages/Home.jsx"));
const IndexAutos = lazy(() => import("./pages/Autos/Index.jsx"));
const DetailsCars = lazy(() => import("./pages/DetailsAutos/Details.jsx"));
import Error404Page from "./pages/Error404Page.jsx";
const IndexAutosAdmin = lazy(() => import("./pages/Admin/IndexAutos.jsx"));
const IndexUsuarios = lazy(() => import("./pages/Admin/IndexUsers.jsx"));
const IndexAdmin = lazy(() => import("./pages/Admin/index.jsx"));
const CreateAutos = lazy(() =>
  import("./pages/Admin/CrudAutos/CreateAutos.jsx")
);
const Profile = lazy(() => import("./pages/Profile/Index.jsx"));
const EditAutos = lazy(() => import("./pages/Admin/CrudAutos/EditAutos.jsx"));
const UpdateAutos = lazy(() =>
  import("./pages/Admin/CrudAutos/UpdateAutos.jsx")
);
const DeleteAutos = lazy(() =>
  import("./pages/Admin/CrudAutos/DeleteAutos.jsx")
);
const IndexSellCar = lazy(() => import("./pages/SellCar/index.jsx"));
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
        path: "/vehicles",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<div>Loading...</div>}>
              <IndexAutos></IndexAutos>
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
        path: "/vehicle/sell",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<div>Loading...</div>}>
              <IndexSellCar></IndexSellCar>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<div>Loading...</div>}>
              <Profile></Profile>
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
          <ProtectedRoutesAdmin>
            <Suspense fallback={<div>Loading...</div>}>
              <IndexAdmin></IndexAdmin>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/users",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<div>Loading...</div>}>
              <IndexUsuarios></IndexUsuarios>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/vehicles",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<div>Loading...</div>}>
              <IndexAutosAdmin></IndexAutosAdmin>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
