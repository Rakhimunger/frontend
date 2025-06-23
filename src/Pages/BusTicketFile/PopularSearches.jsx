import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import antbus from "../../assets/images/antbus.jpg";

const routes = [
  "Aligarh to Manali Bus",
  "Mathura to Manali Bus",
  "Delhi to Manali Bus",
  "Manali to Aligarh Bus",
  "Manali to Mathura Bus",
  "Manali to Delhi Bus",
  "Delhi to Ayodhya Bus",
  "Aligarh to Ayodhya Bus",
  "Mathura to Ayodhya Bus",
  "Ayodhya to Delhi Bus",
  "Ayodhya to Aligarh Bus",
  "Ayodhya to Mathura Bus",
];

const PopularSearches = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 md:px-14">
      <div className="relative bg-gradient-to-br from-[#0C1A3E] to-[#1F3D96] text-white rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl z-0" />

        {/* Bus Image */}
        <div className="relative z-10 w-full md:w-[45%] flex justify-center">
          <img
            src={antbus}
            alt="ANT Bus"
            className="w-[80%] sm:w-[70%] md:w-[80%] h-auto rounded-xl object-contain shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Routes Section */}
        <div className="relative z-10 w-full md:w-[55%] text-center md:text-left">
          {/* Label */}
          <p className="text-sm sm:text-base text-yellow-200 italic mb-1 tracking-widest uppercase">
            Explore Routes
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-snug">
            Popular Bus Searches
          </h2>
          <div className="h-1 w-20 bg-yellow-300 rounded-full mb-6 mx-auto md:mx-0 animate-pulse" />

          {/* Route Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            {routes.map((route, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/10 p-3 rounded-xl border border-white/20 shadow hover:border-yellow-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <FaMapMarkedAlt className="text-yellow-300 text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-medium">{route}</span>
                </div>
                <HiArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default PopularSearches;
