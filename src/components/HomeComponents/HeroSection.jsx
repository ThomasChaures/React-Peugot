import React, { useState } from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [usage, setUsage] = useState("new");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleChangeBrand = (event) => setBrand(event.target.value);
  const handleChangeType = (event) => setType(event.target.value);
  const handleChangePrice = (event) => setPrice(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (brand) params.append("brand", brand);
    if (type) params.append("type", type);
    if (price) params.append("precioMaximo", price);
    if (usage) params.append("usage", usage);
    navigate(`/vehicles?${params.toString()}`);
  };

  return (
    <section className="h-screen relative background-hero">
      <div className="h-full bg-blue-950/40">
        <div className="flex w-full h-full pb-10 justify-center flex-col gap-6 items-center">
          <p className="text-white/40">Find cars for sale near you</p>
          <h1 className="text-white poppins-semibold text-5xl">
            Find Your Perfect Car
          </h1>

          <div className="mt-2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full items-center justify-center gap-3"
            >
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setUsage("")}
                  className={`text-center outline-none transition-all text-white text-md h-10 cursor-pointer w-[80px] ${
                    usage === ""
                      ? "hover:bg-black/20 bg-black/0 border-b-2 border-white"
                      : "hover:bg-black/20 bg-black/0  border-none"
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setUsage("new")}
                  className={`text-center outline-none transition-all text-white text-md h-10 cursor-pointer w-[80px] ${
                    usage === "new"
                      ? "hover:bg-black/20 bg-black/0 border-b-2 border-white"
                      : "hover:bg-black/20 bg-black/0  border-none"
                  }`}
                >
                  New
                </button>
                <button
                  type="button"
                  onClick={() => setUsage("used")}
                  className={`text-center outline-none transition-all text-white text-md h-10 cursor-pointer w-[80px] ${
                    usage === "used"
                      ? "hover:bg-black/20 bg-black/0 border-b-2 border-white"
                      : "hover:bg-black/20 bg-black/0 border-white/0"
                  }`}
                >
                  Used
                </button>
              </div>

              <div className="flex justify-between items-center bg-white w-[800px] h-full py-1 pr-1 pl-1 rounded-full">
                <select
                  name="brand"
                  className="min-w-[20%] outline-none cursor-pointer text-sm bg-transparent px-2 "
                  onChange={handleChangeBrand}
                  value={brand}
                >
                  <option disabled value="">
                    Select Brand
                  </option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Ford">Ford</option>
                  <option value="Peugeot">Peugeot</option>
                  <option value="Volkswagen">Volkswagen</option>
                </select>

                <div className="w-[1px] h-[80%] bg-black/30"></div>

                <select
                  name="type"
                  className="w-[20%] cursor-pointer  outline-none text-sm bg-transparent px-2 rounded-full border border-white hover:border-black"
                  onChange={handleChangeType}
                  value={type}
                >
                  <option disabled value="">
                    Select Type
                  </option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Ford">Ford</option>
                  <option value="Peugeot">Peugeot</option>
                  <option value="Volkswagen">Volkswagen</option>
                </select>

                <div className="w-[1px] h-[80%] bg-black/30"></div>

                <input
                  name="price"
                  className="w-[15%] text-sm  placeholder-black cursor-pointer outline-none bg-transparent px-2 rounded-full border border-white hover:border-black"
                  onChange={handleChangePrice}
                  placeholder="Price"
                  value={price || ""}
                />

                <button
                  type="submit"
                  disabled={!brand && !type && !price}
                  className={`${
                    !brand && !type && !price
                      ? "bg-blue-600/80 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-600/80"
                  } text-white items-center 
                  text-sm gap-2 flex w-[20%] justify-center py-[14px] transition-all rounded-full`}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                  Search Car
                </button>
              </div>
            </form>
          </div>
          <div className="max-w-[750px]">
            <p className="text-center mb-4 text-white/70">
              Browse Featured Model{" "}
            </p>
            <ul className="flex items-center justify-center gap-4 flex-wrap">
              <li className="bg-black/50 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">
                Hatchback
              </li>
              <li className="bg-black/50 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">
                SUV
              </li>
              <li className="bg-black/50 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">
                Sedan
              </li>
              <li className="bg-black/50 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">
                MPV
              </li>
              <li className="bg-black/50 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">
                Convertible
              </li>
              <li className="bg-black/50 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">
                Van
              </li>
              <li className="bg-black/50 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">
                Coupe
              </li>
              <li className="bg-black/50 hover:bg-black cursor-pointer transition-all px-5 text-white py-2 rounded-full">
                Pickup
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-12 w-full bg-white rounded-tl-full rounded-tr-full"></div>
    </section>
  );
};

export default HeroSection;
