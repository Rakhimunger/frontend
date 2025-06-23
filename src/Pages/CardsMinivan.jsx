import React from "react";
import { ArrowRight } from "lucide-react";
import antbus from "../assets/images/antbus.jpg";

// 🌀 Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// 🚍 Bus data
const minivan = new Array(12).fill({
  title: "AC Delux Minivan 49 Seater (2+2)",
  localRun: "4 Hours 40 km",
  localPrice: "₹14200/-",
  outstationPrice: "₹14200/-",
  image: antbus,
});

// 🎴 Card component
const CardsMinivan = ({
  title,
  localRun,
  localPrice,
  outstationPrice,
  image,
}) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
    <img
      src={image}
      alt={title}
      className="h-52 w-full object-cover transform -scale-x-100"
    />
    <div className="p-5 space-y-2 text-sm sm:text-base text-left">
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>

      <p>
        <span className="font-bold">Local Run starting from:</span>
        <br />
        <span className="text-blue-900 font-bold">
          {localRun} : {localPrice}
        </span>
      </p>
      <p>
        <span className="font-bold">Outstation Run starting from:</span>
        <br />
        <span className="text-blue-900 font-bold">
          Per km : {outstationPrice}
        </span>
      </p>

      {/* ✅ Button Row: Left and Right aligned */}
      <div className="flex justify-between items-center pt-4 w-full flex-wrap gap-3">
        <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-5 py-2 rounded-xl hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold w-[48%] sm:w-auto">
          Details <ArrowRight size={18} className="ml-2" />
        </button>
        <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-5 py-2 rounded-xl hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold w-[48%] sm:w-auto">
          Book Now <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  </div>
);

// 📄 Page component
export default function MinivanList() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 py-6 sm:px-6 lg:px-20">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-900 mb-10">
        Our Available Minivan
      </h2>

      {/* 📱 Mobile View: Swiper Auto Slider */}
      <div className="block sm:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={false}
          className="pb-6"
        >
          {minivan.map((item, index) => (
            <SwiperSlide key={index}>
              <CardsMinivan {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 💻 Desktop & Tablet View: 3-card Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {minivan.map((item, index) => (
          <CardsMinivan key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
