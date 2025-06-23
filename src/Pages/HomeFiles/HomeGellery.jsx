import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import your images
import antimg from "../../assets/images/antimg.png";
import antimg2 from "../../assets/images/antimg2.png";
import antimg3 from "../../assets/images/antimg3.png";
import antimg4 from "../../assets/images/antimg4.png";
import antimg5 from "../../assets/images/antimg5.png";

const HomeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    antimg,
    antimg3,
    antimg2,
    antimg4,
    antimg5,
    antimg3,
    antimg4,
    antimg2,
    antimg,
    antimg2,
    antimg5,
    antimg,
  ];

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white py-14 px-4 sm:px-8 lg:px-24 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl sm:text-2xl text-orange-600 font-semibold tracking-widest uppercase">
          Make Your Tour More Pleasure
        </h2>
        <h3 className="text-3xl sm:text-5xl font-bold text-blue-900 mt-2">
          Recent Gallery
        </h3>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Explore unforgettable memories captured during our amazing tours.
        </p>
      </div>

      {/* Swiper for Small Screens */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="px-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative cursor-pointer overflow-hidden rounded-2xl shadow-md bg-white"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`gallery-${idx}`}
                    className="w-full h-60 object-contain"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <FaSearchPlus className="text-white text-2xl" />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for Medium & Large Screens */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`gallery-${idx}`}
              className="w-full h-48 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <FaSearchPlus className="text-white text-2xl" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link to="/gallery">
          <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
            View Full Gallery →
          </button>
        </Link>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-5xl w-full">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[90vh] object-contain rounded-2xl border-4 border-white shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-2xl hover:bg-red-600 hover:text-white transition"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeGallery;
