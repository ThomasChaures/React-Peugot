import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { SessionProvider } from "../../contexts/session.context";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <>
      <SessionProvider>
        <NavBar />
        <main className="min-h-screen !overflow-x-hidden poppins-regular">
          <Outlet />
        </main>
      </SessionProvider>
      <Footer />
    </>
  );
};

export default Layout;
