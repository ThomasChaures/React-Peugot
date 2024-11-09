import React, { useState } from "react";
import placeholder from "../../assets/img/placeholder.webp";
import { Link } from "react-router-dom";
const Card = ({ auto }) => {
  const [flagPopUp, setFlagPopUp] = useState(false);
  if (!auto) {
    return <div>Auto no disponible</div>; // Maneja el caso de datos no definidos
  }

  const formattedNumber = (number) => {
    return number.toLocaleString("es-ES");
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div className="flex relative flex-col max-w-[300px]  items-start border border-black/20 rounded-xl overflow-hidden border">
      {auto.price <= 24000 ? (
        <>
          <div className="absolute left-[20px] top-[20px] text-sm bg-green-500 text-white py-0.5 px-2 rounded-xl">
            <span>Great Price</span>
          </div>
        </>
      ) : null}

      {!auto.vendedor ? (
        <>
          <div
            onMouseEnter={() => setFlagPopUp(true)}
            onMouseLeave={() => setFlagPopUp(false)}
            className="absolute right-[20px] top-[20px] text-sm bg-blue-500 text-white py-0.5 px-2 rounded-xl"
          >
            <i className="fa-solid fa-shield-halved"></i>
            {flagPopUp && (
              <div className="absolute right-[20px] bg-black w-[120px] top-[-20px]">
                <p className="block text-center  text-sm  w-full">
                  Official Vehicle
                </p>
              </div>
            )}
          </div>
        </>
      ) : null}

      <div className="mb-4 h-[250px] w-full">
        <img
          src={auto.imga || placeholder}
          alt={auto.model || "Auto"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4">
        <div className=" pb-3 border-b-[1px] border-black/20">
          <p className="text-[1.2rem] font-medium">
            {auto.model} - {auto.year}
          </p>
          <p
            className="overflow-hidden mt-1 text-[0.8rem] text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              maxHeight: "20px",
              lineHeight: "1.25em",
            }}
          >
            {auto.description}
          </p>
        </div>
        <div className="py-3 border-b-[1px] border-black/20 flex justify-between w-full">
          <p className="flex flex-col items-center">
            <i className="fa-solid fa-ring"></i>
            <span className="text-sm"> {auto.brand}</span>
          </p>
          <p className="flex flex-col items-center">
            <i className="fa-solid  fa-car"></i>
            <span className="text-sm">{auto.type}</span>
          </p>
          <p className=" flex flex-col items-center ">
            <i className="fa-solid  fa-hourglass-start"></i>
            <span className="text-sm">{capitalizeFirstLetter(auto.usage)}</span>
          </p>
        </div>

        <div className="py-3 flex items-center justify-between">
          <p className="text-2xl  poppins-regular">
            ${formattedNumber(auto.price)}
          </p>
          <Link className="hover:text-blue-500 transition-all" to={"/vehicle/details/" + auto._id}>
            View details <i className="text-sm fa-solid fa-location-arrow"></i>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
