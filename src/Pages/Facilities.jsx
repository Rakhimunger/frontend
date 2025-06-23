import React from "react";
import { CheckCircle2 } from "lucide-react"; // You can use this or any ✔ icon

const Facilities = () => {
  const facilitiess = [
    "Thanda Thanda Cool Cool AC Bus",
    "2+2 Pus Back Seats",
    "Charging Point",
    "Water Bottle & Chiller Box",
    "50 Bag Space for Luggage",
    "Vehicle Live Tracking",
    "Music System",
    "Air Suspension",
    "Reading Light & First Aid Kit",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
        Facilities Included
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white p-6 rounded-xl border border-gray-300 shadow-sm">
        {facilitiess.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-800">
            <CheckCircle2 className="text-green-600 w-5 h-5" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
