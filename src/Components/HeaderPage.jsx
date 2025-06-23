import React from "react";
import Minivanimg from "../assets/images/Minivanimg.jpg";

const MiniPage = () => {
  return (
    <div className="text-gray-800">
      <div className="relative w-full h-[15vh] sm:h-[70vh] overflow-hidden">
        <img
          src={Minivanimg}
          alt="Minivan"
          className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-lg sm:text-5xl font-bold leading-tight sm:mb-2 mb-1">
            Bus Hire
          </h1>
          <p className="text-xs sm:text-lg leading-none">Home &rarr;Bus Hire</p>
        </div>
      </div>
    </div>
  );
};

export default MiniPage;

