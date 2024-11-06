import React, { useEffect, useState } from "react";
import HeroSection from "../components/HomeComponents/HeroSection";

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
      <HeroSection></HeroSection>
    </>
  );
};

export default Home;
