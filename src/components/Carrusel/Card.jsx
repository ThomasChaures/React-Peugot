import React from "react";
import placeholder from "../../assets/img/placeholder.webp";
import { Link } from "react-router-dom";
const Card = ({ auto }) => {
  if (!auto) {
    return <div>Auto no disponible</div>; // Maneja el caso de datos no definidos
  }

  const formattedNumber = (number) => {
    return number.toLocaleString('es-ES'); 
  } 

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  return (
    <div className="flex relative flex-col max-w-[300px]  items-start bg-slate-950 rounded-xl overflow-hidden border">

      {auto.price_usd <= 24000 ? <>
        
        <div className="absolute left-[20px] top-[20px] text-sm bg-green-500 text-white py-0.5 px-2 rounded-xl">
            <span>Great Price</span>
        </div>
      
      </> : null}

      <div className="mb-4 h-[250px] w-full">
        <img
          src={auto.imagen || placeholder}
          alt={auto.modelo || "Auto"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4">
        <div className=" pb-3 border-b-[1px] border-white/10">
          <p className="text-xl font-semibold text-white">
            {auto.modelo} - {auto.year}
          </p>
          <p
            className="overflow-hidden text-white/80 text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              maxHeight: "20px",
              lineHeight: "1.25em",
            }}
          >
            {auto.descripcion}
          </p>
        </div>
        <div className="py-3 border-b-[1px] border-white/10 flex justify-between w-full">
          <p className="text-white/80 flex flex-col items-center">
            <i className="fa-solid fa-ring"></i>
            <span> {auto.brand}</span>
          </p>
          <p className="text-white/80 flex flex-col items-center">
            <i className="fa-solid  fa-car"></i>
            <span>{auto.tipo}</span>
          </p>
          <p className="text-white/80 flex flex-col items-center ">
            <i className="fa-solid  fa-hourglass-start"></i>
            <span>{capitalizeFirstLetter(auto.status)}</span>
          </p>
        </div>

        <div className="py-3 flex items-center justify-between">
          <p className="text-2xl text-white poppins-medium">${formattedNumber(auto.price_usd)}</p>
          <Link className="text-white">
            View details <i className="text-sm fa-solid fa-location-arrow"></i>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
