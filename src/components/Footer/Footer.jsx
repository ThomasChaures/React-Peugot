import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const footerClassesAuth = (() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return "hidden";
    }
  })();
  return (
    <footer className={`bg-slate-950 pb-20 ${footerClassesAuth}`}>
      <div className="relative w-full  h-10 bg-slate-950 overflow-hidden">
        <div className="absolute w-full h-20 bg-white rounded-full top-[-40px] left-1/2 trasform translate-x-[-50%]"></div>
      </div>
      <div className="max-w-[1360px] pt-20 container flex items-start justify-between mx-auto">
        <div className="flex  gap-40 container items-start ">
          <div className="text-white poppins-medium text-3xl">
            <p>MOTORHUB</p>
          </div>

          

          <div className="text-sm">
            <p className="mb-4 text-white/50">Menu</p>
            <ul className="flex text-white/80 flex-col gap-[13px]">
              <li>Home</li>
              <li>Vehicles</li>
              <li>Brands</li>
              <li>Profile</li>
            </ul>
          </div>


          <div className="text-sm">
            <p className="mb-4 text-white/50">Support</p>
            <ul className="flex text-white/80 flex-col gap-[13px]">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="w-[400px] text-white">
            Stay up to date on the latest from MOTORHUB
          </p>
          <form action="#" className="w-[300px] flex flex-col">
            <input
              type="text"
              className="rounded-md border-b-2 px-2 py-2 mt-2 border-white/40"
              placeholder="example@gmail.com"
            />
            <button className="max-w-[200px] px-2 text-white font-semibold rounded-md mt-3 py-2 bg-red-500">
              Sing up
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
