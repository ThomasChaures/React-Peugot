import React, { useState } from "react";
import placeholder from "../../../../assets/img/placeholder.webp";
import { Link } from "react-router-dom";

const Card = ({ auto }) => {
  const [flagPopUp, setFlagPopUp] = useState(false);
  if (!auto) {
    return <div>Auto no disponible</div>;
  }

  const formattedNumber = (number) => {
    return number.toLocaleString("es-ES");
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div className="flex relative flex-col max-w-[1000px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
      {auto.price <= 24000 && (
        <div className="absolute left-4 top-4 text-sm bg-green-500 text-white py-1 px-3 rounded-full">
          <span>Great Price</span>
        </div>
      )}

      {!auto.vendedor && (
        <div
          onMouseEnter={() => setFlagPopUp(true)}
          onMouseLeave={() => setFlagPopUp(false)}
          className="absolute right-4 top-4 text-sm bg-blue-500 text-white py-1 px-3 rounded-full cursor-pointer"
        >
          <i className="fa-solid fa-shield-halved"></i>
          {flagPopUp && (
            <div className="absolute right-0 bg-black/90 w-32 -top-8 rounded-md py-1">
              <p className="text-center text-sm text-white">Official Vehicle</p>
            </div>
          )}
        </div>
      )}

      <div className="flex">
        <div className="w-[300px] h-88 flex-shrink-0">
          <img
            src={auto.imga || placeholder}
            alt={auto.model || "Auto"}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-4">
          <div className="pb-3 border-b border-gray-200">
            <p className="text-xl font-medium text-gray-800">
              {auto.model} - {auto.year}
            </p>
            <p className="mt-1 text-sm text-gray-600 line-clamp-1">
              {auto.description}
            </p>
          </div>

          <div className="py-3 border-b border-gray-200 flex justify-between items-center">
            <div className="flex flex-col items-center text-gray-600">
              <i className="fa-solid fa-ring mb-1"></i>
              <span className="text-sm">{auto.brand}</span>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <i className="fa-solid fa-car mb-1"></i>
              <span className="text-sm">{auto.type}</span>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <i className="fa-solid fa-hourglass-start mb-1"></i>
              <span className="text-sm">{capitalizeFirstLetter(auto.usage)}</span>
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between">
            <p className="text-2xl font-medium text-gray-900">
              ${formattedNumber(auto.price)}
            </p>
            <Link 
              className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2" 
              to={"/admin/vehicles/show/" + auto.auto_id}
            >
              View details 
              <i className="text-sm fa-solid fa-location-arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;