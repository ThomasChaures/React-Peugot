import React, { useRef, useState } from "react";
import Card from "./Card";
import './Carrusel.css';

const Carrusel = ({ item }) => {
  if (!item || item.length === 0) {
    return <div>Cargando autos...</div>;
  }

  const carruselRef = useRef(null); // Referencia al contenedor del carrusel
 

  // Función para desplazarse hacia la derecha
  const siguiente = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({
        left: 300, // Ajusta el valor según el tamaño del desplazamiento deseado
        behavior: "smooth",
      });
    }
  };

  // Función para desplazarse hacia la izquierda
  const anterior = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({
        left: -300, // Ajusta el valor según el tamaño del desplazamiento deseado
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        ref={carruselRef}
        id="scrollable"
        className="flex  overflow-x-hidden scrollbar-custom gap-6"
      >
        {item.map((auto, indice) => (
          <li key={indice} className="list-none flex-shrink-0">
            <Card auto={auto} />
          </li>
        ))}
      </div>
      <div className="pt-4  items-center  flex gap-2">
        <button
          onClick={anterior}
          className="px-4 py-2 border  rounded-full bg-slate-950 text-white transition-all"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          onClick={siguiente}
          className="px-4 py-2 border  rounded-full bg-slate-950 text-white transition-all"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  );
};

export default Carrusel;
