import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUserData } from "../../service/auth.service";
import { useToken, useId } from "../../contexts/session.context";

const NavBar = () => {
  const location = useLocation();
  const token = useToken();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rol, setRol] = useState("User");
  const id = useId();

  useEffect(() => {
    getUserData(id).then((data) => setRol(data.role));
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMenu = `${
    isOpen === true
      ? "max-lg:absolute max-lg:top-20 max-lg:bg-slate-950  max-lg:w-full max-lg:px-4 max-lg:left-0 transition-move duration-300"
      : "max-lg:absolute max-lg:top-20 max-lg:bg-slate-950  max-lg:w-full max-lg:px-4 max-lg:left-[1000px] transition-move duration-300"
  }`;
  const openUl = `${
    isOpen === true
      ? "flex max-lg:flex-col gap-4 max-lg:py-4"
      : "flex max-lg:flex-col gap-4 max-lg:py-4 flex gap-4"
  }`;

  const headerClasses = (() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return "hidden";
    }
    return location.pathname === "/" && !isScrolled
      ? "text-white"
      : "bg-slate-950 text-white";
  })();

  return (
    <nav
      className={`absolute flex top-0 max-lg:px-4 left-0 max-[1380px]:px-10 w-full font-semibold z-30 transition-colors duration-300 ${headerClasses}`}
    >
      <div className="flex w-full py-4 max-w-[1360px] mx-auto justify-between items-center">
        <Link className="text-3xl uppercase" to="/">
          <h1>MotorHub</h1>
        </Link>

        <div
          id="tabMenu"
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="lg:hidden text-2xl cursor-pointer hover:rotate-90 rotate-0 transform-gpu transition-transform	 duration-300"
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <div id="menu" className={openMenu}>
          <ul className={openUl}>
            {!token ? (
              <>
                <li
                  onClick={() => setIsOpen((prevState) => !prevState)}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpen((prevState) => !prevState)}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                {rol === "Admin" && (
                  <li
                    onClick={() => setIsOpen((prevState) => !prevState)}
                    className="nav-item max-lg:py-3 max-lg:border-b max-lg:border-white/20 max-lg:hover:bg-slate-700 max-lg:px-2 "
                  >
                    <Link className="nav-link" to="/admin">
                      Admin Panel
                    </Link>
                  </li>
                )}
                <li
                  onClick={() => setIsOpen((prevState) => !prevState)}
                  className="nav-item max-lg:py-3 max-lg:border-b max-lg:border-white/20 max-lg:hover:bg-slate-700 max-lg:px-2 "
                >
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpen((prevState) => !prevState)}
                  className="nav-item max-lg:py-3 max-lg:border-b max-lg:border-white/20 max-lg:hover:bg-slate-700 max-lg:px-2 "
                >
                  <Link className="nav-link" to="/vehicles">
                    Vehicles
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpen((prevState) => !prevState)}
                  className="nav-item max-lg:py-3 max-lg:border-b max-lg:border-white/20 max-lg:hover:bg-slate-700 max-lg:px-2 "
                >
                  <Link className="nav-link" to="/brands">
                    Brands
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpen((prevState) => !prevState)}
                  className="nav-item max-lg:py-3 max-lg:border-b max-lg:border-white/20 max-lg:hover:bg-slate-700 max-lg:px-2 "
                >
                  <Link className="nav-link" to="/types">
                    Types
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpen((prevState) => !prevState)}
                  className="nav-item max-lg:py-3 max-lg:border-b max-lg:border-white/20 max-lg:hover:bg-slate-700 max-lg:px-2 "
                >
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpen((prevState) => !prevState)}
                  className="nav-item  max-lg:py-3 max-lg:border-b max-lg:border-white/20 max-lg:hover:bg-slate-700 max-lg:px-2 "
                >
                  <Link className="nav-link" to="/logout">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
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
