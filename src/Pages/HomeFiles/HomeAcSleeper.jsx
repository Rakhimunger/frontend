import React from "react";
import AcSleeper from "../BusHirePages/AcLuxury";

function HomeAcSleeper() {
  return (
    <div>
      <div className="px-4 text-center text-blue-800 my-6">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
          Experience Luxury on the Move
          <br className="hidden sm:block" />
          <span className="block sm:inline font-medium text-base sm:text-xl md:text-2xl">
            Comfort with Our AC Sleeper Buses
          </span>
        </h1>
      </div>

      <div>
        <AcSleeper />
      </div>
    </div>
  );
}

export default HomeAcSleeper;
