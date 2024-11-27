import React, { useEffect, useState } from "react";
import { getUserData } from "../../service/auth.service.js";
import { useId } from "../../contexts/session.context";
import { getVendedor } from "../../service/vendedores.service.js";
import Card from "./components/Card.jsx";
import { Link } from "react-router-dom";

const Index = () => {
  const id = useId();
  const [user, setUser] = useState({});
  const [autos, setAutos] = useState([]);
  const [autosSold, setAutosSold] = useState([]);
  const [autosPending, setAutosPending] = useState([]);
  const [autosPurchases, setAutosPurchases] = useState([]);
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
      <section className="mt-40 max-w-[1360px] max-xl:px-10 max-lg:px-10 mx-auto">
        <div>
          <h2 className="text-3xl mb-4 font-medium">Profile</h2>

          <div>
            <div>
              <div className="p-4 border border-gray-300 rounded-lg shadow-md mb-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Full name: {user.name} {user.surname}
                    </p>
                    <p className="text-gray-700">
                      E-mail: {user.email || "No text available"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="sell bg-slate-200/60  w-full mb-5  px-10 py-4 flex justify-center flex-col gap-4 rounded-xl">
                <h2 className="w-[45%]  text-slate-950 text-3xl font-bold">
                  Do You Want to Sell a Car?
                </h2>

                <p className="w-[70%]">
                  Sell your car quickly and easily. Reach thousands of potential
                  buyers in no time.
                </p>

                <Link
                  to="/vehicle/sell"
                  className="button h-[45px] hover:bg-white hover:border-2 text-white transition-all hover:!text-slate-950 hover:border-slate-950 flex items-center justify-center bg-slate-950  rounded-xl w-[190px]"
                >
                  Get Started
                  <i className="fa-solid ml-2 text-sm fa-location-arrow"></i>
                </Link>
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
                          : "113px",
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
                      My purchases
                    </li>
                  </ul>
                </div>

                {/* Autos */}
                {getActiveAutos().length > 0 ? (
                  <ul className="flex flex-col gap-x-10 gap-y-5">
                    {getActiveAutos().map((auto, index) => (
                      <li
                        key={index}
                        className="mb-2 flex h-[240px] justify-between"
                      >
                        <Card auto={auto}></Card>
                        {auto.status === "for sale" &&
                          auto.vendedor.email === user.email && (
                            <div className="w-[300px] flex h-full justify-between  flex-col gap-y-4">
                              <Link
                                to={`/vehicle/edit/${auto.auto_id}`}
                                className=" flex items-center border !border-dashed h-full !border-blue-800 justify-center text-blue-400 hover:bg-green-400 hover:text-white  py-1 rounded px-1 transition duration-300"
                              >
                                Edit
                              </Link>
                              <Link
                                to={`/vehicle/delete/${auto.auto_id}`}
                                className="flex items-center border !border-dashed h-full !border-blue-800 justify-center text-blue-400 hover:bg-red-500 hover:text-white py-1 rounded px-1 transition duration-300"
                              >
                                Delete
                              </Link>
                            </div>
                          )}
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

export default Index;
