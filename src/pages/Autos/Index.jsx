import React, { useState, useEffect } from "react";
import { getMarcas } from "../../service/marcas.service";
import { getTipos } from "../../service/tipos.service";
import { getAutos } from "../../service/autos.service";
import Card from "../../components/Carrusel/Card";
const Index = () => {
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    getTipos().then((data) => setTypes(data));
    getMarcas().then((data) => setBrands(data));
    getAutos().then((data) => setAutos(data.slice(0, 10)));
  }, []);

  return (
    <>
      <section className="max-w-[1360px] gap-x-10 flex items-start mt-40 max-[1380px]:px-10 mx-auto">
        <div className="max-w-[1200px] order-2 border-b w-full border-slate-950/20">
          <div>
            <div>
              <h2 className="text-black/50">Search results For:</h2>

              <form className="h-10 mt-3 max-w-[330px] border-b flex items-center justify-between border-slate-950/20">
                <input
                  type="text"
                  className="h-full  text-2xl outline-none"
                  placeholder="Model"
                  name="model"
                  id="namel"
                />
                <i className="fa-solid text-sm text-black/60 hover:text-black transition-all cursor-pointer fa-x"></i>
              </form>
            </div>

            <p className="py-4">(12) Vehicles founds</p>
          </div>

          {/* coches */}

          <div className="flex flex-wrap gap-4">
            {autos.map((auto, index) => {
              return (
                <div key={index}>
                  <Card auto={auto} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Filtros */}

        <div className="order-1 max-w-[300px]  border-r w-full border-slate-950/20">
          <div className="border-b max-w-[85%] pb-3 mb-5 border-slate-950/10">
            <h2 className="text-3xl text-black/80">Filters</h2>
          </div>
          <form className="flex flex-col gap-y-8">
            {/* primer bloque */}

            <div className="w-full">
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Brands</p>
                <span>-</span>
              </div>
              <div className="flex flex-col gap-y-2 mt-3">
                <label htmlFor="none" className="flex gap-2 items-center">
                  <input type="radio" id="none" name="brand" value="" /> None
                </label>
                {brands.map((brand, index) => {
                  return (
                    <label
                      key={index}
                      className="flex gap-2 items-center"
                      htmlFor="brand"
                    >
                      <input type="radio" value={brand.marca} name="brand" />
                      <p>{brand.marca}</p>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* segundo bloque */}

            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Types</p>
                <span>-</span>
              </div>

              <div className="flex flex-col gap-y-2 mt-3">
                <label htmlFor="none" className="flex gap-2 items-center">
                  <input type="radio" id="none" name="type" value="" /> None
                </label>
                {types.map((type, index) => {
                  return (
                    <label
                      key={index}
                      className="flex gap-2 items-center"
                      htmlFor="brand"
                    >
                      <input type="radio" value={type.tipo} name="type" />
                      <p>{type.tipo}</p>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* tercer bloque */}

            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Engine</p>
                <span>-</span>
              </div>
              <label htmlFor="engine" className="w-full max-w-[85%]">
                <input
                  type="text"
                  className="mt-3 border w-full py-1 px-2 rounded"
                  name="engine"
                  placeholder="ex. 2.5L 4-cylinder"
                  id="engine"
                />
              </label>
            </div>

            {/* cuarto bloque */}

            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Horsepower</p>
                <span>-</span>
              </div>
              <label htmlFor="engine" className="w-full max-w-[85%]">
                <input
                  type="number"
                  className="mt-3 border w-full py-1 px-2 rounded"
                  name="engine"
                  placeholder="ex. 191"
                  id="engine"
                />
              </label>
            </div>

            {/* quinto bloque */}

            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Year</p>
                <span>-</span>
              </div>

              <div className="flex flex-col gap-y-2 mt-3">
                <label htmlFor="year" className="w-full max-w-[85%]">
                  <input
                    type="number"
                    className="mt-3 border w-full py-1 px-2 rounded"
                    name="year"
                    placeholder="ex. 2020"
                    id="year"
                  />
                </label>
              </div>
            </div>

            {/* sexto bloque */}

            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Usage</p>
                <span>-</span>
              </div>

              <div className="flex flex-col gap-y-2 mt-3">
                <label htmlFor="none" className="flex gap-2 items-center">
                  <input type="radio" id="none" name="usage" value="" /> None
                </label>
                <label htmlFor="usage" className="flex gap-2 items-center">
                  <input type="radio" id="usage" name="usage" value="new" /> New
                </label>
                <label htmlFor="usage" className="flex gap-2 items-center">
                  <input type="radio" id="usage" name="usage" value="used" />{" "}
                  Used
                </label>
              </div>
            </div>

            {/* septimo bloque */}

            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Price</p>
                <span>-</span>
              </div>

              <div className="flex flex-col gap-y-4 mt-3">
                <label htmlFor="none" className="w-full max-w-[85%]">
                  Min.
                  <input
                    type="number"
                    className="mt-2 border w-full py-1 px-2 rounded"
                    name="year"
                    placeholder="ex. 0"
                    id="year"
                  />
                </label>
                <label htmlFor="usage" className="w-full max-w-[85%]">
                  Max.
                  <input
                    type="number"
                    className="mt-2 border w-full py-1 px-2 rounded"
                    name="year"
                    placeholder="ex. 50000"
                    id="year"
                  />
                </label>
              </div>
            </div>

            <button className="bg-blue-600 text-md poppins-regular cursor-pointer flex items-center justify-center hover:bg-blue-500 transition-all max-w-[85%] rounded text-white h-12 w-full">
              Apply
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Index;
