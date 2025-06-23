import React from "react";
import TourHeader from "./TourHeader";
import Offers from "../../Pages/BusTicketFile/Offers";
import AmenitiesSection from "../../Pages/BusTicketFile/AmenitiesSection";
import HomeGallery from "../../Pages/HomeFiles/HomeGellery";
import BookBusant from "../../Pages/BusHirePages/BookBusant";
import Testimonial from "../../Pages/BusTicketFile/Testimonial";
import FAQ from "../../Pages/BusTicketFile/FAQ";

function BusTour() {
  return (
    <div>
      <TourHeader />
      <Offers />
      <AmenitiesSection />
      <HomeGallery />
      <BookBusant />
      <Testimonial />
      <FAQ />
    </div>
  );
}

export default BusTour;
