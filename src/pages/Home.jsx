import React, { useEffect, useState } from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import BrandsSection from "../components/HomeComponents/BrandsSection";
import CarsSection from "../components/HomeComponents/CarsSection";
import CallToAction from "../components/HomeComponents/CallToAction";

const Home = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3333/api/autos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((data) => data.json())
      .then((data) => setAutos(data.slice(0, 8)));
  }, []);

 
  useEffect(() => {
    console.log(autos);
  }, [autos]);

  return (
    <>
      <HeroSection></HeroSection>
      <BrandsSection></BrandsSection>
      <CallToAction></CallToAction>
      <CarsSection autos={autos}></CarsSection>

    </>
  );
};

export default Home;
