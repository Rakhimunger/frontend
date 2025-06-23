import React from "react";
import HomePage from "../Pages/HomePage";
import Offers from "../Pages/BusTicketFile/Offers";
import AntTript from "./AntTript";
import HomeAcDelux from "./HomeFiles/HomeAcDelux";
import HomeAcLuxuryBus from "./HomeFiles/HomeAcLuxuryBus";
import HomeAcSleeper from "./HomeFiles/HomeAcSleeper";
import HomeGallery from "./HomeFiles/HomeGellery";
import Testimonial from "../Pages/BusTicketFile/Testimonial";
import FAQ from "../Pages/BusTicketFile/FAQ";
import TransportModel from "./HomeFiles/TransportModel";

const Home = () => {
  return (
    <div>
      <HomePage />
      <Offers />
      <AntTript />
      <HomeAcDelux />
      <HomeAcLuxuryBus />
      <HomeAcSleeper />
      <HomeGallery />
      <TransportModel />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Home;
