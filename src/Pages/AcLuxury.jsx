import React from "react";
import { ArrowRight } from "lucide-react";
import minivan from "../assets/images/minivan.png";

// 🌀 Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// 🚐 Minivan data
const minivans = new Array(12).fill({
  title: "AC Luxury Bus 49 Seater (2+2)",
  city: "Delhi NCR",
  localRun: "4 Hours 40 km",
  localPrice: "₹14200/-",
  outstationPrice: "₹14200/-",
  image: minivan,
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
    <div className="p-5 space-y-2 text-sm sm:text-base flex flex-col items-start text-left">
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>

      <p>
        <span className="font-medium">Local Run starting from:</span>
        <br />
        <span className="text-blue-900 font-semibold">
          {localRun} : {localPrice}
        </span>
      </p>

      <p>
        <span className="font-medium">Outstation Run starting from:</span>
        <br />
        <span className="text-blue-900 font-semibold">
          Per km : {outstationPrice}
        </span>
      </p>

      <div className="flex justify-between items-center gap-3 pt-4 w-full">
        <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-6 py-2.5 rounded-xl hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold">
          Details <ArrowRight size={18} />
        </button>
        <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-6 py-2.5 rounded-xl hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold">
          Book Now <ArrowRight size={18} />
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
        Our Available Buses
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
          {minivans.map((item, index) => (
            <SwiperSlide key={index}>
              <CardsMinivan {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 💻 Desktop & Tablet View: 3-card Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {minivans.map((item, index) => (
          <CardsMinivan key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
