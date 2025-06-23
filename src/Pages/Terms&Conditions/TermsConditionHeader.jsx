import React from "react";

import Minivanimg from "../../assets/images/Minivanimg.jpg";

const TermsConditionHeader = () => {
  return (
    <div className="text-gray-800">
      <div className="relative w-full h-[20vh] sm:h-[70vh]">
        <img
          src={Minivanimg}
          alt="Minivan"
          className="absolute inset-0 w-full h-full brightness-50 object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
          <h1 className="text-xl sm:text-6xl font-bold leading-tight sm:mb-2 mb-1">
            Terms & Conditions
          </h1>
    
        </div>
      </div>
    </div>
  );
};

export default TermsConditionHeader;
