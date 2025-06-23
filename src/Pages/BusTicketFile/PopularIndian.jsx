import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import manali from "../../assets/images/antbus.jpg";

// 🌀 Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// 🚍 Bus data
const buses = new Array(6).fill({
  title: "Aligarh To Manali (Bus Service)",
  image: manali,
  journeyDate: "26-AUG-24",
  busType: "AC Chair Car 2+2 Volvo Coach",
  boarding: "Mathura, Aligarh, Jevar, Delhi NCR, Sonipat, Panipat, Ambala",
  departure: "6.30 PM - Daily Service",
  oldPrice: "₹2000",
  newPrice: "₹1500",
});

// 🎴 Card component
const CardsBuses = ({
  title,
  image,
  busType,
  boarding,
  departure,
  journeyDate,
  oldPrice,
  newPrice,
}) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.02] mx-auto px-3 sm:px-0 max-w-[95%]">
    <img
      src={image}
      alt={title}
      className="h-52 w-full object-cover transform -scale-x-100"
    />
    <div className="p-5 space-y-2 text-sm sm:text-base flex flex-col items-start text-left">
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      <p>
        <span className="font-medium">Upcoming Date Of Journey:</span>
        <br />
        <span className="text-blue-900 font-semibold">{journeyDate}</span>
      </p>
      <p>
        <span className="font-medium">Bus Type:</span>
        <br />
        <span className="text-blue-900 font-semibold">{busType}</span>
      </p>
      <p>
        <span className="font-medium">Boarding Points:</span>
        <br />
        <span className="text-blue-900 font-semibold">{boarding}</span>
      </p>
      <p>
        <span className="font-medium">Departure:</span>
        <br />
        <span className="text-blue-900 font-semibold">{departure}</span>
      </p>
      <p>
        <span className="font-medium">Starting From:</span>
        <br />
        <span className="line-through text-gray-500">{oldPrice}</span>{" "}
        <span className="text-blue-900 font-bold">{newPrice}</span> Per Person
      </p>

      {/* ✅ Buttons aligned left and right for all sizes */}
      <div className="flex flex-row justify-between items-center gap-3 pt-4 w-full">
        <Link to="/details" className="w-1/2">
          <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-4 py-2 rounded-xl hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold text-sm sm:text-base w-full">
            Details <ArrowRight size={16} className="ml-1" />
          </button>
        </Link>

        <div className="w-1/2 flex justify-end">
          <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-4 py-2 rounded-xl hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold text-sm sm:text-base w-full">
            Book Now <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// 📄 Page component
export default function BusList() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 py-6 sm:px-6 lg:px-20">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-900 mb-10">
        Popular Indian Bus Tour Packages
      </h2>

      {/* 📱 Mobile View: Swiper Auto Slider */}
      <div className="block sm:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          className="pb-6"
        >
          {buses.map((bus, index) => (
            <SwiperSlide key={index}>
              <CardsBuses {...bus} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 💻 Desktop & Tablet View: 3-card Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {buses.map((bus, index) => (
          <CardsBuses key={index} {...bus} />
        ))}
      </div>
    </div>
  );
}
