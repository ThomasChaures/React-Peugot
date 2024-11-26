import React, { useEffect, useState } from "react";
import { getUserData } from "../../service/auth.service.js";
import { useId } from "../../contexts/session.context";
import { getVendedor } from "../../service/vendedores.service.js";
import Card from "./components/Card.jsx";

const Index = () => {
  const id = useId();
  const [user, setUser] = useState({});
  const [autos, setAutos] = useState([]);
  const [autosSold, setAutosSold] = useState([]);
  const [autosPending, setAutosPending] = useState([]);
  const [activeTab, setActiveTab] = useState(1); 

  useEffect(() => {
    getUserData(id).then((data) => {
      setUser(data);
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
    return autosPending;
  };

  return (
    <>
      <section className="mt-40 max-w-[1360px] mx-auto">
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
                      E-mail: {user.email || "No comment text available"}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Autos</h3>

                {/* Tabs */}
                <div className="border-b relative py-3 mb-5">
                  <span
                    className={`absolute w-13 h-1 top-[54px] transition-all bg-blue-500`}
                    style={{
                      left: activeTab === 1 ? "0" : activeTab === 2 ? "100px" : "176px",
                      width: activeTab === 1 ? "65px" : activeTab === 2 ? "40px" : "70px",
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
                  <p>No autos available</p>
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
