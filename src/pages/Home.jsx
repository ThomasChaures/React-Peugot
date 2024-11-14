import React, { useEffect, useState } from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import BrandsSection from "../components/HomeComponents/BrandsSection";
import CarsSection from "../components/HomeComponents/CarsSection";
import CallToAction from "../components/HomeComponents/CallToAction";
import { getAutos } from "../service/autos.service";

const Home = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
      getAutos()
      .then((data) => setAutos(data.slice(0, 8)));
  }, []);

 

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
