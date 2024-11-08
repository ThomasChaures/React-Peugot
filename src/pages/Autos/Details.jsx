import { useState, useEffect } from "react";
import React from "react";
import img from '../../assets/img/placeholder.webp'
import { useParams } from "react-router-dom";
const Details = () => {
  let { id } = useParams();
  console.log(id)

  const [auto, setAuto] = useState({});

  const formattedNumber = (number) => {
    return number?.toLocaleString("es-ES") || "";
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect( () => {
     fetch(`http://localhost:3333/api/autos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAuto(data)
        fetch(`http://localhost:3333/api/autos/tipos/${data.type}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error("Error fetching data:", error));
      
      })
      .catch((error) => console.error("Error fetching data:", error));

    
      
  },[])


  return (

    <>
      <section className="mt-40 flex gap-4 items-start max-w-[1360px] mx-auto">
         
          <div className="flex-col flex  items-center">
           
            <div className="flex  gap-4 items-end">
            <div className="h-full relative order-2 w-full max-w-[800px]">
            <img className="w-full h-full object-contain" src={img} alt="" />
            </div>

          <div className="max-w-[200px] flex flex-col order-1  gap-2">
               <div className="max-w-[140px] opacity-70 border  cursor-pointer border-black max-h-[140px] opacity-70 border border-black">
                <img className="w-full h-full object-contain"  src={img} alt="" />
               </div>
               <div className="max-w-[140px] opacity-70 border cursor-pointer border-black max-h-[140px] opacity-70 border border-black">
                <img className="w-full h-full object-contain"  src={img} alt="" />
               </div>
               <div className="max-w-[140px] opacity-70 border cursor-pointer border-black max-h-[140px] opacity-70 border border-black">
                <img className="w-full h-full object-contain"  src={img} alt="" />
               </div>
            </div>

            
          </div>
          <div className="border-t mt-[20px] pt-3 pb-3">
              <h2 className="text-lg pb-2  poppins-medium">Description</h2>
              <p className="text-[15px] text-black/70  poppins-medium">{auto.description}</p>
          </div>
            </div>

          <div className="max-w-[33%]  w-full">
          <div className="border-b pb-3">
              <h1 className="text-3xl pb-3  poppins-semibold">{auto.brand} - {auto.model}</h1>
              <p className="text-2xl  poppins-medium">${formattedNumber(auto.price)}</p>
          </div>
          <div className="border-b pt-3 pb-3">
              <h2 className="text-lg pb-2  poppins-medium">Year</h2>
              <p className="text-[15px] text-black/70 disabled  poppins-medium">{auto.year}</p>
          </div>
          <div className="border-b pt-3 pb-3">
              <h2 className="text-lg pb-2  poppins-medium">Type</h2>
              <p className="text-[15px] text-black/70 disabled  poppins-medium">{capitalizeFirstLetter(auto.type)}</p>
          </div>
          <div className="border-b pt-3 pb-3">
              <h2 className="text-lg pb-2  poppins-medium">Usage</h2>
              <p className="text-[15px] text-black/70  poppins-medium">{capitalizeFirstLetter(auto.usage)}</p>
          </div>
          <div className="border-b pt-3 pb-3">
              <h2 className="text-lg pb-2  poppins-medium">Specs</h2>
              <ul>
                <li>Engine: {auto.engine}</li>
                <li>Horesepower: {auto.horsepower}</li>
              </ul>
          </div>
          </div>

          
      </section>
    </>
  );
};

export default Details;
