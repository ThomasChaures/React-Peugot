import React, { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [usage, setUsage] = useState("new");

  return (
    <section className="h-screen relative background-hero">
      <div className="h-full bg-blue-950/40">
        <div className="flex w-full h-full pb-10 justify-center flex-col gap-6 items-center">
          <p className="text-white/40">Find cars for sale near you</p>
          <h1 className="text-white font-sans font-semibold text-5xl">
            Find Your Perfect Car
          </h1>

          <div className="mt-2">
            <form
              action="#"
              className="flex flex-col items-center justify-center gap-3"
            >
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="New Cars Filter"
                  onClick={() => setUsage("new")}
                  className={`text-center outline-none transition-all text-white text-md h-10 cursor-pointer w-[80px] ${
                    usage === "new"
                      ? "hover:bg-black/20 bg-black/0 border-b-2 border-white"
                      : "hover:bg-black/20 bg-black/0  border-white/0"
                  }`}
                >
                  New
                </button>
                <button
                  type="button"
                  aria-label="Used Cars Filter"
                  onClick={() => setUsage("used")}
                  className={`text-center outline-none transition-all text-white text-md h-10 cursor-pointer w-[80px] ${
                    usage === "used"
                      ? "hover:bg-black/20 bg-black/0 border-b-2 border-white"
                      : "hover:bg-black/20 bg-black/0  border-white/0"
                  }`}
                >
                  Used
                </button>
              </div>
              <div className="flex justify-between bg-white w-[800px] py-1 pr-1 pl-1 rounded-full">
                {/* Select Modelos */}

                <select
                  name="model"
                  aria-label="Select Model"
                  className="w-[20%] cursor-pointer bg-transparent px-2 rounded-full border border-white hover:border-black"
                  id="model"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select Model
                  </option>
                </select>

                {/* Select Tipos */}

                <select
                  name="type"
                  aria-label="Select Type"
                  className="w-[20%] cursor-pointer bg-transparent px-2 rounded-full border border-white hover:border-black"
                  id="type"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select Type
                  </option>
                </select>

                {/* Select Precios */}

                <input
                  name="prices"
                  aria-label="Select Prices"
                  className="w-[20%] placeholder-black cursor-pointer outline-none bg-transparent px-2 rounded-full border border-white hover:border-black"
                  id="prices"
                  placeholder="Price"
                  defaultValue=""
                />
    

                <button
                  type="button"
                  className="bg-blue-600 text-white items-center font-semibold gap-2 flex w-[20%] justify-center py-3 hover:bg-blue-600/80 transition-all rounded-full"
                >
               <i className="fa-solid fa-magnifying-glass"></i>
                  Search Car
                </button>
              </div>
            </form>
          </div>

          <div className="max-w-[600px]">
               <p className="text-center mb-4 text-white/70">Browse Featured Model </p>
              <ul className="flex items-center justify-center gap-4 flex-wrap">
                 <li className="bg-black/30 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">Hatchback</li>
                 <li className="bg-black/30 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">SUV</li>
                 <li className="bg-black/30 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">Sedan</li>
                 <li className="bg-black/30 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">MPV</li>
                 <li className="bg-black/30 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">Van</li>
              </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-12 w-[100%]  bg-white rounded-tl-full rounded-tr-full"></div>
    </section>
  );
};

export default HeroSection;
