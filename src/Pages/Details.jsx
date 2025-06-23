import React from "react";
import HeaderPage from "../Components/HeaderPage";
import SeaterAc from "../Pages/SeaterAc";
import ACBusDetail from "./BusHirePages/ACBusDetail";
import BusTariffPage from "./BusHirePages/BusTariffPage";
import GallerySection from "./GallerySection";
import Facilities from "../Pages/Facilities";
import AcDeluxBus from "../Pages/BusHirePages/AcDeluxBus";

const Details = () => {
  return (
    <div>
      <HeaderPage />
      <ACBusDetail />

      <SeaterAc />
      <BusTariffPage />
      <Facilities />
      <GallerySection />
      <AcDeluxBus />
    </div>
  );
};

export default Details;
