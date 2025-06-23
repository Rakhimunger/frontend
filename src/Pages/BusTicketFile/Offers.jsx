import React from "react";
import { ArrowRight } from "lucide-react";
import discount from "../../assets/images/discount.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Offers = () => {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 py-10 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-blue-900 font-playfair leading-tight">
          🎉 Discover the Hottest Deals of the Season
        </h2>

        <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-blue-800 mt-2">
          Trending Offers Just for You
        </h3>
      </div>

      {/* Button - Right Aligned + Simple */}
      {/* <div className="mt-8 flex justify-end">
        <button className="text-blue-800 font-semibold text-sm sm:text-base hover:underline">
          View All
        </button>
      </div> */}

      {/* Desktop View */}
      <div className="hidden sm:flex justify-center flex-wrap gap-8 mt-6">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={discount}
              alt="MobiKwik Offer"
              className="w-full h-44 object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Mobile Swiper View */}
      <div className="sm:hidden mt-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          slidesPerView={1.0}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="px-2"
        >
          {[1, 2, 3].map((id) => (
            <SwiperSlide key={id}>
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto w-[90%]">
                <img
                  src={discount}
                  alt="MobiKwik Offer"
                  className="w-full h-36 object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Offers;
