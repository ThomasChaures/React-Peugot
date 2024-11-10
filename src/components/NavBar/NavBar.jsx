import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useToken } from "../../contexts/SessionContext";

const NavBar = () => {
  const location = useLocation();
  const token = useToken();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Clases condicionales de acuerdo a la ruta y el scroll
  const headerClasses = `${
    location.pathname === "/" && !isScrolled
      ? " text-white"
      : "bg-slate-950 text-white"
  }`;

  return (
    <nav
      className={`fixed flex top-0 left-0 w-full font-semibold z-30 transition-colors duration-300 ${headerClasses}`}
    >
      <div className="flex w-full py-4 max-w-[1360px] mx-auto justify-between items-center">
        <Link className="text-3xl uppercase" to="/">
          MotorHub
        </Link>

        <div>
          <ul className="flex gap-4">
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
