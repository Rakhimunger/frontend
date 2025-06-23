import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import antbusimg from "../../assets/images/antbusimg.jpeg";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rajeev Mehta",
    role: "Business Traveller",
    image: antbusimg,
    text: "Main family ke saath weekend getaway ke liye ANTBus se gaya aur service top-notch thi. Clean interior, punctuality aur polite staff ne impress kar diya.",
  },
  {
    name: "Sonia Arora",
    role: "Tourist",
    image: antbusimg,
    text: "Main family ke saath weekend getaway ke liye ANTBus se gaya aur service top-notch thi. Clean interior, punctuality aur polite staff ne impress kar diya.",
  },
  {
    name: "John Fernandes",
    role: "Frequent Traveller",
    image: antbusimg,
    text: "Main har mahine business ke kaam se travel karta hoon aur ANTBus meri pehli choice hai. Affordable rates aur reliable service – highly recommended!",
  },
  {
    name: "Kavita Sharma",
    role: "College Student",
    image: antbusimg,
    text: "Main family ke saath weekend getaway ke liye ANTBus se gaya aur service top-notch thi. Clean interior, punctuality aur polite staff ne impress kar diya.",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-[#3B4B96] font-semibold text-lg sm:text-xl mb-2 italic">
          Testimonial
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B4B96]">
          What Client Say About us
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="testimonial-swiper px-4 sm:px-2"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom mb-12">
            <div className="w-full">
              <div className="bg-gray-white rounded-2xl sm:mr-0 p-4 sm:p-6 relative shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[290px] sm:min-h-fit w-[95%] xl:w-[98%] mx-auto">
                <div>
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4 text-center sm:text-left">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mx-auto sm:mx-0"
                    />

                    {/* Name & Role */}
                    <div>
                      <h4 className="text-[#3B4B96] font-bold text-base sm:text-lg">
                        {item.name}
                      </h4>
                      <p className="text-black font-bold  text-xs sm:text-sm">
                        {item.role}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="mt-2 sm:mt-0 sm:ml-auto flex gap-[2px] text-orange-400 text-sm sm:text-base justify-center sm:justify-end w-full sm:w-auto">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-black text-sm sm:text-base">{item.text}</p>
                </div>

                {/* Quote Icon */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-[#3B4B96] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow-md">
                  <FaQuoteRight className="text-base sm:text-lg" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Active Slide CSS */}
      <style jsx>{`
        .testimonial-swiper .swiper-slide-custom {
          transform: scale(0.85);
          transition: all 0.3s ease;
        }

        .testimonial-swiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1 !important;
        }

        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          background: #3b4b96;
          opacity: 0.5;
          margin: 0 8px !important;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #3b4b96;
        }

        .swiper-pagination {
          margin-top: 50px;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
