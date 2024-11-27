import React, { useEffect, useState } from "react";
import { getMarcas } from "../../service/marcas.service";
import { Link } from "react-router-dom";
const index = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getMarcas().then((data) => setBrands(data));
  }, []);

  return (
    <>
      <section className="mt-40 max-w-[1360px] mx-auto">
        <h1 className="text-2xl font-medium">Brands</h1>

        <ul className="flex mt-10 flex-col gap-y-4">
          {brands.map((brand, index) => {
            return (
              <li
                key={index}
                
              >
               <Link to={`/vehicles?brand=${brand.marca}`} className="bg-white border border-black/20 cursor-pointer rounded-lg py-2 flex flex-col justify-evenly items-center w-full h-[200px] hover:shadow-lg transition-shadow">
                <div className="flex justify-center items-center h-40 w-40">
                  <img
                    className="w-full h-20 object-contain"
                    src={`http://localhost:3333/uploads/${brand.img1}`}
                    alt={brand.marca}
                  />
                </div>
                <p className="text-md font-semibold text-gray-700">
                  {brand.marca}
                </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default index;
