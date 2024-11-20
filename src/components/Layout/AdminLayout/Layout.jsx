import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../NavBar/NavbarAdmin.jsx";
import { SessionProvider } from "../../../contexts/session.context";

const Layout = () => {
  return (
    <SessionProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Menú lateral */}
        <NavBar />

        {/* Contenido principal */}
        <main
          className="flex-1 bg-gray-100 poppins-regular overflow-y-auto transition-transform duration-300 lg:ml-64"
        >
          <Outlet />
        </main>
      </div>
    </SessionProvider>
  );
};

export default Layout;
