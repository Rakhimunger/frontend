import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  FaToilet,
  FaWater,
  FaCamera,
  FaChargingStation,
  FaBed,
  FaBook,
  FaUserTie,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiPillow } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

// Amenities Data
const amenities = [
  { icon: <FaCamera className="text-blue-500" />, label: "CCTV" },
  { icon: <FaToilet className="text-pink-500" />, label: "Toilet" },
  { icon: <FaWater className="text-cyan-500" />, label: "Water Bottle" },
  {
    icon: <MdAirlineSeatReclineExtra className="text-yellow-500" />,
    label: "Seat Cover",
  },
  { icon: <FaPhoneAlt className="text-red-500" />, label: "Emergency Contact" },
  {
    icon: <FaChargingStation className="text-green-600" />,
    label: "Charging Point",
  },
  { icon: <FaBed className="text-purple-500" />, label: "Blankets" },
  { icon: <FaBook className="text-amber-500" />, label: "Reading Light" },
  { icon: <GiPillow className="text-indigo-500" />, label: "Pillow" },
  { icon: <FaUserTie className="text-rose-500" />, label: "Tour Guide" },
];

const AmenitiesSection = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white py-16 px-4 text-center">
      <p className="text-lg sm:text-xl text-blue-800 font-bold  mb-2">
        Amenities
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-12">
        What We Offer for Your Comfort
      </h2>

      <div className="px-2 sm:px-4 md:px-8">
        {" "}
        {/* Margin to prevent edge touch */}
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Pagination, Autoplay]}
          className="w-full pb-20"
        >
          {amenities.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white h-44 sm:h-48 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center justify-center gap-3 hover:scale-105 group">
                <div className="text-4xl sm:text-5xl transition-transform duration-300 group-hover:rotate-6">
                  {item.icon}
                </div>
                <p className="text-sm sm:text-base text-black font-bold  group-hover:text-blue-800 transition">
                  {item.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom bullet styles */}
      <style>{`
        .swiper-pagination-bullets {
          bottom: -32px !important;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #3B4B96;
          opacity: 0.4;
          border-radius: 9999px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #FF5722;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default AmenitiesSection;
