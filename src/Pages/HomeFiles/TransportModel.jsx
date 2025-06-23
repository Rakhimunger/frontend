import React from "react";
import { FaBusAlt, FaUserTie, FaTags } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import antimg1 from "../../assets/images/antimg1.png";
import minivan from "../../assets/images/minivan.png";
import antimg4 from "../../assets/images/antimg4.png";
import antimg3 from "../../assets/images/antimg3.png";

const TransportModel = () => {
  const images = [antimg1, minivan, antimg4, antimg3];

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 py-12 px-4 sm:px-6 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="block sm:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              loop={true}
              className="w-full h-64"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Bus ${i + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden sm:grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl shadow-md group"
              >
                <img
                  src={img}
                  alt={`Bus ${i + 1}`}
                  className="w-full h-50 md:h-60 object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3B4B96] mb-3 relative inline-block">
            Why Choose Us
            <span className="block h-1 w-16 sm:w-20 bg-orange-400 rounded-full mt-2 mx-auto lg:mx-0"></span>
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
            We’re committed to providing the best travel experience with luxury,
            safety, and value in every ride.
          </p>

          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4 bg-white shadow-md p-4 rounded-xl border-l-4 border-[#3B4B96] hover:shadow-lg transition">
              <FaBusAlt className="text-[#3B4B96] w-5 h-5 sm:w-6 sm:h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-base sm:text-lg">
                  Wide Range of Vehicles
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Choose from luxury buses, minivans, sedans & SUVs for any
                  group size or travel need.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 bg-white shadow-md p-4 rounded-xl border-l-4 border-[#3B4B96] hover:shadow-lg transition">
              <FaUserTie className="text-[#3B4B96] w-5 h-5 sm:w-6 sm:h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-base sm:text-lg">
                  Experienced Drivers
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Trained professionals committed to safe, comfortable and
                  punctual journeys.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 bg-white shadow-md p-4 rounded-xl border-l-4 border-[#3B4B96] hover:shadow-lg transition">
              <FaTags className="text-[#3B4B96] w-5 h-5 sm:w-6 sm:h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-base sm:text-lg">
                  Affordable Pricing
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Transparent pricing that fits every budget – no hidden charges
                  ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportModel;
