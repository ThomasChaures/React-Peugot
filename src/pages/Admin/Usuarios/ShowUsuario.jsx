import React, { useEffect, useState } from "react";
import { getUserData } from "../../../service/auth.service.js";
import { getVendedor } from "../../../service/vendedores.service.js";
import Card from "./Components/Card.jsx";
import { Link, useParams } from "react-router-dom";

const ShowUsuario = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [autos, setAutos] = useState([]);
  const [autosPurchases, setAutosPurchases] = useState([]);
  const [autosSold, setAutosSold] = useState([]);
  const [autosPending, setAutosPending] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    getUserData(id).then((data) => {
      setUser(data);
      setAutosPurchases(data.autos_comprados);
      getVendedor(data.email)
        .then((data) => {
          const autos_forSale = data.autos_vendiendo.filter(
            (auto) => auto.status === "for sale"
          );
          setAutos(autos_forSale);

          const autos_pending = data.autos_vendiendo.filter(
            (auto) => auto.status === "pending"
          );
          setAutosPending(autos_pending);

          const autos_sold = data.autos_vendiendo.filter(
            (auto) => auto.status === "sold"
          );
          setAutosSold(autos_sold);
        })
        .catch((error) => {
          console.error("Error al obtener el vendedor:", error);
        });
    });
  }, []);

  const getActiveAutos = () => {
    if (activeTab === 1) return autos;
    if (activeTab === 2) return autosSold;
    if (activeTab === 3) return autosPending;
    return autosPurchases;
  };

  return (
    <>
      <section className="mt-[45px] text-white max-w-[1360px] mx-auto">
        <div>
          <h2 className="text-3xl mb-4 font-medium">Show User</h2>
          <div className="text-white flex  w-[300px] justify-between  gap-x-10 py-4">
            <Link
              to={"/admin/users"}
              className="bg-blue-500 px-2 py-2 text-center rounded w-full block"
            >
              Back to list
            </Link>
          </div>
          <div>
            <div>
              <div className="p-4 border border-gray-300 rounded-lg shadow-md mb-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold ">
                      Full name: {user.name} {user.surname}
                    </p>
                    <p>E-mail: {user.email || "No text available"}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Vehicles</h3>

                {/* Tabs */}
                <div className="border-b relative py-3 mb-5">
                  <span
                    className={`absolute w-13 h-1 top-[54px] transition-all bg-blue-500`}
                    style={{
                      left:
                        activeTab === 1
                          ? "0"
                          : activeTab === 2
                          ? "100px"
                          : activeTab === 3
                          ? "176px"
                          : "282px",
                      width:
                        activeTab === 1
                          ? "65px"
                          : activeTab === 2
                          ? "40px"
                          : activeTab === 3
                          ? "70px"
                          : "123px",
                    }}
                  ></span>
                  <ul className="flex gap-x-10">
                    <li
                      className={`cursor-pointer hover:text-blue-500 transition-all ${
                        activeTab === 1 ? "text-blue-500" : ""
                      }`}
                      onClick={() => setActiveTab(1)}
                    >
                      For Sale
                    </li>
                    <li
                      className={`cursor-pointer hover:text-blue-500 transition-all ${
                        activeTab === 2 ? "text-blue-500" : ""
                      }`}
                      onClick={() => setActiveTab(2)}
                    >
                      Sold
                    </li>
                    <li
                      className={`cursor-pointer hover:text-blue-500 transition-all ${
                        activeTab === 3 ? "text-blue-500" : ""
                      }`}
                      onClick={() => setActiveTab(3)}
                    >
                      Pending
                    </li>
                    <li
                      className={`cursor-pointer hover:text-blue-500 transition-all ${
                        activeTab === 4 ? "text-blue-500" : ""
                      }`}
                      onClick={() => setActiveTab(4)}
                    >
                      User purchases
                    </li>
                  </ul>
                </div>

                {/* Autos */}
                {getActiveAutos().length > 0 ? (
                  <ul className="flex flex-col gap-x-10 gap-y-5">
                    {getActiveAutos().map((auto, index) => (
                      <li key={index} className="mb-2">
                        <Card auto={auto}></Card>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No vehicles available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ShowUsuario;
