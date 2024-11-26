import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useToken } from "../../contexts/session.context";

const NavBar = () => {
  const location = useLocation();
  const token = useToken();
  const [isOpen, setIsOpen] = useState(true);

  const menuClasses = `fixed top-0 left-0 h-full bg-gray-900 w-64 text-white z-40 shadow-lg transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0`;

  const overlayClasses = `${
    isOpen && window.innerWidth < 1024 ? "fixed inset-0 bg-black bg-opacity-50 z-30" : "hidden"
  }`;

  return (
    <>
      {/* Botón de menú solo para dispositivos móviles */}
      <button
        className="fixed top-4 left-4 z-50 text-white text-2xl bg-gray-900 p-2 rounded-md lg:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Menú lateral */}
      <div className={menuClasses}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <h1 className="text-2xl font-semibold uppercase tracking-wider">
            MotorHub
          </h1>
          <button
            className="text-gray-400 hover:text-gray-200 focus:outline-none lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        <ul className="mt-4 space-y-4 px-4">
        <li>
            <Link
              to="/admin"
              className={`block px-4 py-2 rounded-md ${
                location.pathname === "/admin"
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/vehicles"
              className={`block px-4 py-2 rounded-md ${
                location.pathname === "/admin/vehicles"
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Vehicles
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className={`block px-4 py-2 rounded-md ${
                location.pathname === "/admin/users"
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/brands"
              className={`block px-4 py-2 rounded-md ${
                location.pathname === "/admin/brands"
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Brands
            </Link>
          </li>
          <li>
            <Link
              to="/admin/types"
              className={`block px-4 py-2 rounded-md ${
                location.pathname === "/admin/types"
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Types
            </Link>
          </li>
          {!token ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Overlay para cerrar el menú en modo móvil */}
      <div
        className={overlayClasses}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default NavBar;
