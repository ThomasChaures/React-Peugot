import React from "react";
import { Link } from "react-router-dom";
import audi from "../../assets/img/marcas/audi.png";
import bmw from "../../assets/img/marcas/bmw.png";
import chevrolet from "../../assets/img/marcas/chevrolet.png";
import ford from "../../assets/img/marcas/ford.png";
import peugot from "../../assets/img/marcas/peugot.svg";
import volkswagen from "../../assets/img/marcas/volkswagen.svg";

const BrandsSection = () => {
  return (
    <>
      <section className="bg-white pb-32 pt-10 mx-auto">
        <div className="max-w-[1360px] mx-auto">
        <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-black">
          Explore Our Brands
        </h2>

        <Link className="text-sm transition-all hover:text-blue-500">See all brands <i className="fa-solid text-sm fa-location-arrow"></i></Link>
        
        </div>

        <div className="">
          <ul className="flex items-center justify-between gap-6">
            {[
              { src: audi, name: "Audi" },
              { src: bmw, name: "BMW" },
              { src: chevrolet, name: "Chevrolet" },
              { src: ford, name: "Ford" },
              { src: peugot, name: "Peugeot" },
              { src: volkswagen, name: "Volkswagen" },
            ].map((car, index) => (
              <li
                key={index}
                className="bg-white border border-black/20 cursor-pointer rounded-lg py-2 flex flex-col justify-evenly items-center w-[200px] h-[200px] hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center items-center h-40 w-full">
                  <img
                    className={`max-h-32 max-w-32 object-contain ${
                      car.name === "Peugeot" || car.name === "Volkswagen"
                        ? "max-h-[5rem]"
                        : ""
                    }`}
                    src={car.src}
                    alt={car.name}
                  />
                </div>
                <p className="text-md font-semibold font-semibold text-gray-700">
                  {car.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>
    </>
  );
};

export default BrandsSection;
