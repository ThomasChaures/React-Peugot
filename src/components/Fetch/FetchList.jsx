import React, { Component, useState, useEffect } from "react";


const FetchList = () => {
  const [listado, setListado] = useState([]);
  const getDatos = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
    console.log(response);
    const datos = await response.json();
    console.log(datos);
    setListado(datos);
  };
  // getDatos()

  useEffect(() => {
    //mounted
    getDatos(`http://localhost:3333/api/autos`);
  });

 
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
