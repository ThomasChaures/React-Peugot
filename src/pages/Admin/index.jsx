import React, { useEffect, useState } from "react";
import { getUa } from "../../service/ua.service";
import { getTipos } from "../../service/tipos.service";
import { getMarcas } from "../../service/marcas.service";
import { getAutosAll } from "../../service/autos.service";
import ChartDashboard from "./Componentes/ChartDashboard";
const IndexAdmin = () => {
  const [lastActivity, setLastActivity] = useState([]);
  const [brands, setBrands] = useState(0);
  const [types, setTypes] = useState(0);

  const [autos, setAutos] = useState([]);
  const [autosSold, setAutosSold] = useState([]);
  const [autosPending, setAutosPending] = useState([]);

  function calculateHoursElapsed(timestamp) {
    const givenDate = new Date(timestamp);
    const now = new Date();
    const diffInMilliseconds = now - givenDate;

    const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? "s" : ""}`;
    } else {
      return `${days} day${days !== 1 ? "s" : ""}`;
    }
  }

  useEffect(() => {
    getMarcas().then((data) => setBrands(data.length));
    getTipos().then((data) => setTypes(data.length));
    getUa()
      .then((data) => setLastActivity(data.reverse().slice(0,8)))
      .catch((err) => console.log(err));

    getAutosAll()
      .then((data) => {
        console.log(data)
        const autos_forSale = data.filter((auto) => auto.status === "for sale");
        setAutos(autos_forSale.length);

        const autos_pending = data.filter((auto) => auto.status === "pending");
        setAutosPending(autos_pending.length);

        const autos_sold = data.filter((auto) => auto.status === "sold");
        setAutosSold(autos_sold.length);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);
  return (
    <>
     <section className="flex items-start flex-col max-lg:flex-col"> 
     <div className=" px-20 w-full mt-[45px]">
        <h1 className="text-3xl font-medium text-white">Dashboard</h1>

        <div className="mt-10 flex gap-x-10">
          <div className="bg-slate-800  w-full  flex flex-col gap-y-7 px-4 py-3 rounded drop-shadow-lg">
            <p className="text-white text-xl">Vehicles</p>

            <div className="flex justify-between  gap-14">
              <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
                <span>{autos || 0}</span>
                <div className="relative">
                  <p className="text-xl text-green-400 flex items-center gap-x-2 ">
                    <span className="text-4xl">•</span>For Sale
                  </p>
                </div>
              </div>
              <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
                <span>{autosSold || 0}</span>
                <div className="relative">
                  <p className="text-xl text-green-300 flex items-center gap-x-2 ">
                    <span className="text-4xl">•</span>Sold
                  </p>
                </div>
              </div>
              <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
                <span>{autosPending || 0}</span>
                <div className="relative">
                  <p className="text-xl text-yellow-400 flex items-center gap-x-2 ">
                    <span className="text-4xl">•</span>Pending
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex w-full justify-between gap-x-10">
          <div className="bg-slate-800 w-full   flex flex-col gap-y-7 px-4 py-3 rounded drop-shadow-lg">
            <p className="text-white text-xl">Brands</p>

            <div className="flex gap-14">
              <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
                <span>{brands}</span>
                <div className="relative">
                  <p className="text-xl text-green-400 flex items-center gap-x-2 ">
                    <span className="text-4xl">•</span>Registred
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800  w-full  flex flex-col gap-y-7 px-4 py-3 rounded drop-shadow-lg">
            <p className="text-white text-xl">Types</p>

            <div className="flex gap-14">
              <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
                <span>{types}</span>
                <div className="relative">
                  <p className="text-xl text-green-400 flex items-center gap-x-2 ">
                    <span className="text-4xl">•</span>Registred
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className=" w-full px-20 mt-[45px]">
        <h2 className="text-white font-medium text-xl">Last activity</h2>

        <ul className="mt-12 flex flex-col gap-y-3 w-full">
          {lastActivity.map((ua, index) => {
            return (
              <li
                key={index}
                className="bg-slate-800 h-20 w-full text-white  flex items-center justify-between  gap-x-7 px-4 py-3 rounded drop-shadow-lg"
              >
                <i className="fa-solid text-2xl fa-globe"></i>
                <div className="flex w-full items-center justify-between">
                  <p>
                    {ua.name || 'Official'} {ua.surname || 'Action'}
                  </p>
                  <p>{ua.activity}</p>
                  <p>{calculateHoursElapsed(ua.time)}</p>
                </div>
              </li>
            );
          })}
        </ul>


      </div>
     </section>
    </>
  );
};

export default IndexAdmin;
