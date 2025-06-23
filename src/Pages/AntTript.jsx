import React from "react";
import AntTrip from "../assets/images/antTrip.jpg";
const AntTript = () => {
  return (
    <div className="bg-white w-full py-10 px-4 sm:px-6 md:px-10 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-[48%]">
          <img
            src={AntTrip}
            alt="ANT Trip"
            className="w-full h-auto max-h-[600px] object-contain rounded-2xl shadow-xl"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[52%] lg:pl-10 flex flex-col justify-center space-y-3 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-transparent bg-clip-text leading-snug">
            Let’s Go Together
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black">
            Plan Your Trip With Us
          </h2>

          <p className="text-black text-sm sm:text-base md:text-sm leading-relaxed">
            Welcome to{" "}
            <span className="font-bold text-blue-800">ANT Travels</span> — your
            trusted partner in transportation since 2003. We offer safe,
            punctual, and comfortable travel services across Delhi/NCR.
          </p>

          <p className="text-black text-sm sm:text-base md:text-sm leading-relaxed">
            Our core strength lies in professional, on-time group and corporate
            transport in Delhi, Noida, and Gurgaon.
          </p>

          <p className="text-black text-sm sm:text-base md:text-sm leading-relaxed">
            Backed by a skilled team and a modern fleet, we craft customized
            transport solutions tailored to your needs.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-5 py-2 rounded-xl font-bold text-sm  sm:text-sm hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntTript;
