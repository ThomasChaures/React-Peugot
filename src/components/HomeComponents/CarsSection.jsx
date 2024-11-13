import React, { useEffect, useState } from "react";
import Carrusel from "../Carrusel/Carrusel";
import { Link } from "react-router-dom";

const CarsSection = ({autos}) => {
  return <>
   <section className="max-w-[1360px] py-20 mx-auto  ">
   <div className="flex items-center justify-between mb-14">
        <h2 className="text-3xl font-bold text-slate-950">
          Explore All Vehicles
        </h2>

        <Link className="text-sm transition-all hover:text-blue-500">See all vehicles <i className="fa-solid text-sm fa-location-arrow"></i></Link>
        
        </div>
    <div>
    <Carrusel item={autos}></Carrusel>
    </div>
   </section>
  </>;
};

export default CarsSection;
