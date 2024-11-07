import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {SessionProvider} from "../../contexts/SessionContext";
const Layout = () => {
  return (
    <>
    <SessionProvider>
      <NavBar />
      <main className="poppins-regular">
        <Outlet />
      </main>
      </SessionProvider>
    </>
  );
};

export default Layout;
