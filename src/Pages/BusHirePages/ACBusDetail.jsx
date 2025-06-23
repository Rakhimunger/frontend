import React from "react";
import { ArrowRight } from "lucide-react";
import antbus from "../../assets/images/antbus.jpg";

const ACBusDetail = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-10 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src={antbus}
            alt="Main Bus"
            className="w-full rounded-xl shadow-md mb-4 object-cover"
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3"></div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
            AC Delux Bus 27 Seater (2+2)
          </h2>

          <div>
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Local Run starting from
            </p>
            <p className="text-sm sm:text-base">
              4 Hours 40 km:
              <span className="line-through text-red-500 font-semibold ml-2">
                ₹7500/-
              </span>
              <span className="text-blue-900 font-bold ml-2">₹6500/-</span>
            </p>
          </div>

          <div>
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Outstation Run starting from
            </p>
            <p className="text-sm sm:text-base">
              Per km:
              <span className="line-through text-red-500 font-semibold ml-2">
                ₹55/-
              </span>
              <span className="text-blue-900 font-bold ml-2">₹45/-</span>
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard dummy text ever since
            the 1500s.
          </p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded-full transition-all">
              Book Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACBusDetail;
