import React from "react";
import AcLuxury from "../../Pages/BusHirePages/AcLuxury";

function HomeAcLuxuryBus() {
  return (
    <div>
      <div className="px-4 text-center text-blue-800 my-6">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
          Experience Luxury on the Move
          <br className="hidden sm:block" />
          <span className="block sm:inline font-medium text-base sm:text-xl md:text-2xl">
            Comfort with Our AC Luxury Buses
          </span>
        </h1>
      </div>

      <div>
        <AcLuxury />
      </div>
    </div>
  );
}

export default HomeAcLuxuryBus;
