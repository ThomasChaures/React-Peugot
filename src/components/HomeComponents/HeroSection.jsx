import React, { useEffect, useState } from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <>
      <section className="h-screen relative background-hero ">
        <div className="h-full bg-slate-950/30 ">
          <div className="flex w-full h-full pb-40 justify-center flex-col gap-6 items-center">
            <p className="text-white/40">Find cars sale near you</p>
            <h1 className="text-white font-sans font-semibold text-8xl">
              Find Your Perfect Car
            </h1>

            <div className="mt-2">
              <form
                action="#"
                className="flex flex-col items-center justify-center gap-3"
              >
                <div className="flex gap-2">
                    <input type="text" readOnly className="text-center outline-none hover:bg-black/20 transition-all bg-white/0  text-white text-md h-10 cursor-pointer border-b-2 border-white w-[80px]" value={'New'} />
                    <input type="text" readOnly className="text-center outline-none hover:bg-black/20 transition-all bg-white/0 text-white text-md h-10 cursor-pointer  w-[80px]" value={'Used'} />
                </div>
               <div className="flex justify-between bg-white w-[800px] py-2 pr-2 pl-4 rounded-full">
               <select
                  name="model"
                  class="w-[20%] rounded-full border border-white hover:border-black"
                  id="model"
                >
                  <option disabled selected value="">
                    Select Model
                  </option>
                </select>

                <select
                  name="type"
                  class="w-[20%] rounded-full border border-white hover:border-black"
                  id="type"
                >
                  <option disabled selected value="">
                    Select Type
                  </option>
                </select>

                <select
                  name="prices"
                  class="w-[20%] rounded-full border border-white hover:border-black"
                  id="prices"
                >
                  <option disabled selected value="">
                    Select Prices
                  </option>
                </select>

                <button className="bg-blue-600 text-white px-12 py-3 hover:bg-blue-600/80 transition-all rounded-full">
                  Search Car
                </button>
               </div>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-12 w-full bg-white rounded-tl-full rounded-tr-full">
            
        </div>
      </section>
    </>
  );
};

export default HeroSection;
