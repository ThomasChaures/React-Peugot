import React, { useState, useEffect } from "react";
import { getMarcas } from "../../service/marcas.service";
import { getTipos } from "../../service/tipos.service";
import { getAutos, getSearch } from "../../service/autos.service";
import Card from "../../components/Carrusel/Card";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const params = new URLSearchParams(location.search);
  const [brand, setBrand] = useState(params.get("brand") || "");
  const [type, setType] = useState(params.get("type") || "");
  const [engine, setEngine] = useState(params.get("engine") || "");
  const [horsepower, setHorsepower] = useState(params.get("horsepower") || "");
  const [year, setYear] = useState(params.get("year") || "");
  const [usage, setUsage] = useState(params.get("usage") || "");
  const [maxPrice, setMaxPrice] = useState(params.get("precioMaximo") || "");
  const [minPrice, setMinPrice] = useState(params.get("precioMinimo") || "");

  const [autos, setAutos] = useState([]);

  const filteredAutos = autos.filter((auto) =>
    auto.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleSubmit(e) {
    e.preventDefault();

    let string = `precioMinimo=${minPrice || 0}&`;

    if (brand) {
      string += `brand=${brand}&`;
    }

    if (type) {
      string += `type=${type}&`;
    }

    if (maxPrice) {
      string += `precioMaximo=${maxPrice}&`;
    }

    if (usage) {
      string += `usage=${usage}&`;
    }

    if (year) {
      string += `year=${year}&`;
    }

    if (engine) {
      string += `engine=${engine}&`;
    }

    if (horsepower) {
      string += `engine=${horsepower}&`;
    }

    getSearch(string)
      .then((data) => setAutos(data))
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getTipos().then((data) => setTypes(data));
    getMarcas().then((data) => setBrands(data));

    let string = `precioMinimo=${minPrice || 0}&`;

    if (brand) {
      string += `brand=${brand}&`;
    }

    if (type) {
      string += `type=${type}&`;
    }

    if (maxPrice) {
      string += `precioMaximo=${maxPrice }&`;
    }

    if (usage) {
      string += `usage=${usage}&`;
    }

    console.log(string)

        

    getSearch(string).then((data) => setAutos(data));
  }, []);

  return (
    <>
      <section className="max-w-[1360px] gap-x-10 flex items-start mt-40 max-[1380px]:px-10 mx-auto">
        <div className="max-w-[1200px] w-full order-2 ">
          <div className="border-b w-full mb-5 border-slate-950/20">
            <div>
              <h2 className="text-black/50">Search results For:</h2>
              <form className="h-10 mt-3 max-w-[330px] border-b flex items-center justify-between border-slate-950/20">
                <input
                  type="text"
                  className="h-full text-2xl outline-none"
                  placeholder="Model"
                  name="model"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  id="namel"
                />
                <i
                  onClick={() => setSearchTerm("")}
                  className="fa-solid text-sm text-black/60 hover:text-black transition-all cursor-pointer fa-x"
                ></i>
              </form>
            </div>

            <p className="py-4">({filteredAutos.length}) Vehicles found</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {filteredAutos.map((auto, index) => (
              <div key={index}>
                <Card auto={auto} />
              </div>
            ))}

            {autos.length <= 0 && (
              <div className="w-full flex items-center justify-center">
                <p className="text-3xl pt-10 text-black/40">
                  Vehicles not founds
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="order-1 max-w-[300px] border-r w-full border-slate-950/20">
          <div className="border-b max-w-[85%] pb-3 mb-5 border-slate-950/10">
            <h2 className="text-3xl text-black/80">Filters</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
            {/* Brands */}
            <div className="w-full">
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Brands</p>
                <span>-</span>
              </div>
              <div className="flex flex-col gap-y-2 mt-3">
                <label htmlFor="none" className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="none"
                    name="brand"
                    value=""
                    checked={brand === ""}
                    onChange={(e) => setBrand(e.target.value)}
                  />{" "}
                  None
                </label>
                {brands.map((brandItem, index) => (
                  <label
                    key={index}
                    className="flex gap-2 items-center"
                    htmlFor="brand"
                  >
                    <input
                      type="radio"
                      value={brandItem.marca}
                      name="brand"
                      checked={brand === brandItem.marca}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                    <p>{brandItem.marca}</p>
                  </label>
                ))}
              </div>
            </div>

            {/* Types */}
            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Types</p>
                <span>-</span>
              </div>
              <div className="flex flex-col gap-y-2 mt-3">
                <label htmlFor="none2" className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="none2"
                    name="type"
                    value=""
                    checked={type === ""}
                    onChange={(e) => setType(e.target.value)}
                  />{" "}
                  None
                </label>
                {types.map((typeItem, index) => (
                  <label
                    key={index}
                    className="flex gap-2 items-center"
                    htmlFor="type"
                  >
                    <input
                      type="radio"
                      value={typeItem.tipo}
                      name="type"
                      checked={type === typeItem.tipo}
                      onChange={(e) => setType(e.target.value)}
                    />
                    <p>{typeItem.tipo}</p>
                  </label>
                ))}
              </div>
            </div>

            {/* Engine */}
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
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                  placeholder="ex. 2.5L 4-cylinder"
                  id="engine"
                />
              </label>
            </div>

            {/* Horsepower */}
            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Horsepower</p>
                <span>-</span>
              </div>
              <label htmlFor="horsepower" className="w-full max-w-[85%]">
                <input
                  type="number"
                  className="mt-3 border w-full py-1 px-2 rounded"
                  name="horsepower"
                  value={horsepower}
                  onChange={(e) => setHorsepower(e.target.value)}
                  placeholder="ex. 191"
                  id="horsepower"
                />
              </label>
            </div>

            {/* Year */}
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
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="ex. 2020"
                    id="year"
                  />
                </label>
              </div>
            </div>

            {/* Usage */}
            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Usage</p>
                <span>-</span>
              </div>
              <div className="flex flex-col gap-y-2 mt-3">
                <label htmlFor="none3" className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="none3"
                    name="usage"
                    value=""
                    checked={usage === ""}
                    onChange={(e) => setUsage(e.target.value)}
                  />{" "}
                  None
                </label>
                <label htmlFor="usage-new" className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="usage-new"
                    name="usage"
                    value="new"
                    checked={usage === "new"}
                    onChange={(e) => setUsage(e.target.value)}
                  />{" "}
                  New
                </label>
                <label htmlFor="usage-used" className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="usage-used"
                    name="usage"
                    value="used"
                    checked={usage === "used"}
                    onChange={(e) => setUsage(e.target.value)}
                  />{" "}
                  Used
                </label>
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="border-b max-w-[85%] flex justify-between items-center pb-2 border-slate-950/10">
                <p className="text-xl">Price</p>
                <span>-</span>
              </div>
              <div className="flex flex-col gap-y-4 mt-3">
                <label
                  htmlFor="minPrice"
                  className="relative w-full max-w-[85%]"
                >
                  Min.
                  <span className="absolute top-[37px] left-[5px]">$</span>
                  <input
                    type="number"
                    className="mt-2 border w-full py-1 px-3 rounded"
                    name="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="ex. 0"
                    id="minPrice"
                  />
                </label>
                <label
                  htmlFor="maxPrice"
                  className="relative w-full max-w-[85%]"
                >
                  Max.
                  <span className="absolute top-[37px] left-[5px]">$</span>
                  <input
                    type="number"
                    className="mt-2 border w-full py-1 px-3 rounded"
                    name="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="ex. 50000"
                    id="maxPrice"
                  />
                </label>
              </div>
            </div>

            <button className="bg-blue-600 text-md poppins-regular cursor-pointer flex items-center justify-center hover:bg-blue-500 transition-all h-[34px] w-[130px] text-white rounded">
              Apply Filters
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Index;
