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
    setListado(datos.results);
  };
  // getDatos()

  useEffect(() => {
    //mounted
    getDatos(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }, [page]);

  const paginaNext = () => {
    setPage(page + 1);
    // getDatos(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }
  const paginaLast = () => {
   if(page != 1){
    setPage(page - 1);
   }
    // getDatos(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }
  return (
    <>
    <button
        onClick={paginaLast}
      >
        Anterior {page !== 1 ? page - 1 : ''}
      </button>
      <button>{page}</button>
      <button
        onClick={paginaNext}
      >
       Siguiente {page + 1}
      </button>
      <ul>
        {listado.map((personaje, indice) => {
          return <li key={indice}>{personaje.name}</li>;
        })}
      </ul>
    </>
  );
};

export default FetchList;
