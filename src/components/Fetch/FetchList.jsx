import React, { Component, useState, useEffect } from "react";
import Listado from "../Listado/Listado";

const FetchList = () => {
  const [listado, setListado] = useState([]);
  const [page, setPage] = useState(1);
  const getDatos = async (url) => {
    const response = await fetch(url);
    console.log(response);
    const datos = await response.json();
    console.log(datos);
    setListado(datos);
  };
  // getDatos()

  useEffect(() => {
    //mounted
    getDatos(`http://localhost:3333/api/autos`);
  }, [page]);

 
  return (
    <>
      <ul>
        {listado.map((personaje, indice) => {
          return <li key={indice}>{personaje.modelo}</li>;
        })}
      </ul>
    </>
  );
};

export default FetchList;
