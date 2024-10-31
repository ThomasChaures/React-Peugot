import React, { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    fetch(`http://localhost:3333/api/autos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      
    })
    .then(data => data.json())
    .then(data => console.log(data))
  });
  return (
    <>
      <h1>Hola</h1>
    </>
  );
};

export default Home;
