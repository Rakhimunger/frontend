import React from "react";
import Tajmahal from "../../assets/images/Tajmahal.jpg";
// import BusAnimation from "../Bus/BusAnimation";

const BusHeader = () => {
  return (
    <div className="text-gray-800 relative">
      {/* ========= Background Image Section ========= */}
      <div className="relative w-full h-[55vh] sm:h-[85vh]">
        {/* Background Image */}
        <img
          src={Tajmahal}
          alt="Taj Mahal"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* ========= Centered Text + Form ========= */}
        <div className="absolute inset-0 flex flex-col justify-start sm:justify-center items-center text-white px-4 sm:px-2 text-center space-y-3 sm:space-y-5 z-10 pt-10 sm:pt-0">
          {/* Heading */}
          <h1 className="text-lg sm:text-4xl font-bold sm:font-extrabold leading-snug sm:leading-tight drop-shadow-xl">
            Search Bus Ticket for Indian Tours
          </h1>

          {/* Rating */}
          <p className="flex items-center space-x-1 text-yellow-300 font-semibold text-sm sm:text-lg drop-shadow-md">
            <span>★ 3.5</span>
            <span className="text-white font-normal">248 Google reviews</span>
          </p>

          {/* Subheading */}
          <p className="text-sm sm:text-xl font-medium drop-shadow-md">
            Search Bus Ticket for Indian Tours
          </p>

          {/* ====== Search Form ====== */}
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-3 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4 shadow-2xl w-full max-w-4xl mt-3">
            <input
              type="text"
              placeholder="From"
              className="flex-1 px-4 py-2 rounded-lg border border-white/30 text-sm sm:text-base text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white/10"
            />

            <input
              type="text"
              placeholder="To"
              className="flex-1 px-4 py-2 rounded-lg border border-white/30 text-sm sm:text-base text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white/10"
            />

            <input
              type="date"
              className="flex-1 px-4 py-2 rounded-lg border border-white/30 text-sm sm:text-base text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white/10"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg text-sm sm:text-base">
              Search Buses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusHeader;
