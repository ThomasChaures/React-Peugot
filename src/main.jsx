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
import Index from "./pages/Success/Index.jsx";
const EditSell = lazy(() => import('./pages/SellCar/EditSell.jsx'))
const IndexAutosAdmin = lazy(() => import("./pages/Admin/IndexAutos.jsx"));
const IndexUsuarios = lazy(() => import("./pages/Admin/IndexUsers.jsx"));
const IndexAdmin = lazy(() => import("./pages/Admin/index.jsx"));
const CreateAutos = lazy(() =>
  import("./pages/Admin/CrudAutos/CreateAutos.jsx")
);
const Profile = lazy(() => import("./pages/Profile/Index.jsx"));
const UpdateAutos = lazy(() =>
  import("./pages/Admin/CrudAutos/UpdateAutos.jsx")
);
const ShowAutos = lazy(() => import("./pages/Admin/CrudAutos/ShowAuto.jsx"));
const DeleteAutos = lazy(() =>
  import("./pages/Admin/CrudAutos/DeleteAutos.jsx")
);
const IndexSellCar = lazy(() => import("./pages/SellCar/index.jsx"));
const CreateBrand = lazy(() =>
  import("./pages/Admin/Marcas/CrudMarcas/CreateMarca.jsx")
);
const CreateTipos = lazy(() =>
  import("./pages/Admin/Tipos/CrudTipos/CreateTipo.jsx")
);
const IndexBrandsAdmin = lazy(() => import("./pages/Admin/Marcas/index.jsx"));
const IndexTypesAdmin = lazy(() => import("./pages/Admin/Tipos/index.jsx"));
const Pending = lazy(() => import("./pages/Admin/AutosPending/Pending.jsx"));
const Check = lazy(() => import("./pages/Admin/AutosPending/Check.jsx"));
const IndexBrands = lazy(() => import("./pages/Brands/index.jsx"));
const IndexTypes = lazy(() => import("./pages/Types/index.jsx"));
const ShowUsuario = lazy(() =>
  import("./pages/Admin/Usuarios/ShowUsuario.jsx")
);
import Loader from "./components/Loader/Loader.jsx";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        errorElement: <Error404Page />,
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <Home></Home>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/brands",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <IndexBrands></IndexBrands>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/types",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <IndexTypes></IndexTypes>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/vehicles",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <IndexAutos></IndexAutos>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/vehicle/details/:id",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <DetailsCars></DetailsCars>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/vehicle/sell",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <IndexSellCar></IndexSellCar>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/vehicle/edit/:auto_id",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <EditSell></EditSell>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <Profile></Profile>
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login></Login>
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<Loader />}>
            <Register></Register>
          </Suspense>
        ),
      },
      {
        path: "/logout",
        element: (
          <Suspense fallback={<Loader />}>
            <Logout></Logout>
          </Suspense>
        ),
      },
      {
        path: "/success",
        element: <Index />,
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
            <Suspense fallback={<Loader />}>
              <IndexAdmin></IndexAdmin>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/users",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <IndexUsuarios></IndexUsuarios>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      // {
      //   path: "/admin/users/create",
      //   element: (
      //     <ProtectedRoutesAdmin>
      //       <Suspense fallback={<Loader />}>
      //         <IndexUsuarios></IndexUsuarios>
      //       </Suspense>
      //     </ProtectedRoutesAdmin>
      //   ),
      // },
      {
        path: "/admin/users/show/:id",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <ShowUsuario></ShowUsuario>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      // {
      //   path: "/admin/users/update/:id",
      //   element: (
      //     <ProtectedRoutesAdmin>
      //       <Suspense fallback={<Loader />}>
      //         <UpdateUsuario></UpdateUsuario>
      //       </Suspense>
      //     </ProtectedRoutesAdmin>
      //   ),
      // },
      // {
      //   path: "/admin/users/delete/:id",
      //   element: (
      //     <ProtectedRoutesAdmin>
      //       <Suspense fallback={<Loader />}>
      //         <IndexUsuarios></IndexUsuarios>
      //       </Suspense>
      //     </ProtectedRoutesAdmin>
      //   ),
      // },
      {
        path: "/admin/vehicles",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <IndexAutosAdmin></IndexAutosAdmin>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/vehicles/create",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <CreateAutos></CreateAutos>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/vehicles/pending",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <Pending></Pending>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/vehicles/pending/check/:id",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <Check></Check>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/vehicles/update/:auto_id",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <UpdateAutos></UpdateAutos>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/vehicles/delete/:id",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <DeleteAutos></DeleteAutos>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/vehicles/show/:id",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <ShowAutos></ShowAutos>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/brands",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <IndexBrandsAdmin></IndexBrandsAdmin>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/brands/create",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <CreateBrand></CreateBrand>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/types/",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <IndexTypesAdmin></IndexTypesAdmin>
            </Suspense>
          </ProtectedRoutesAdmin>
        ),
      },
      {
        path: "/admin/types/create",
        element: (
          <ProtectedRoutesAdmin>
            <Suspense fallback={<Loader />}>
              <CreateTipos></CreateTipos>
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
