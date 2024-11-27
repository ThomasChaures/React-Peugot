import React, { useEffect, useState } from "react";
import { getTipos } from "../../service/tipos.service.js";
import { Link } from "react-router-dom";
const index = () => {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    getTipos().then((data) => setTipos(data));
  }, []);

  return (
    <>
      <section className="mt-40 max-w-[1360px] mx-auto">
        <h1 className="text-2xl font-medium">Types</h1>

        <ul className="flex mt-10 flex-col gap-y-4">
          {tipos.map((tipo, index) => {
            return (
              <li
                key={index}
                
              >
               <Link to={`/vehicles?type=${tipo.tipo}`} className="bg-white border border-black/20 cursor-pointer rounded-lg py-2 flex flex-col justify-evenly items-center w-full h-[200px] hover:shadow-lg transition-shadow">
                
                <p className="text-xl font-semibold text-gray-700">
                  {tipo.tipo}
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
