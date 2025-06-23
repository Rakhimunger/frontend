import React from "react";
import BusHeader from "./BusHeader";
import Offers from "./Offers";
import PopularIndian from "./PopularIndian";
import AmenitiesSection from "./AmenitiesSection";
import PopularSearches from "./PopularSearches";
import GalleryImages from "./GalleryImages";
import BookBusant from "../../Pages/BusHirePages/BookBusant";
import Testimonial from "../../Pages/BusTicketFile/Testimonial";
import FAQ from "./FAQ";

function BusTicket() {
  return (
    <div>
      <BusHeader />
      <Offers />
      <PopularIndian />
      <AmenitiesSection />
      <PopularSearches />
      <GalleryImages />
      <BookBusant />
      <Testimonial />
      <FAQ />
    </div>
  );
}

export default BusTicket;
