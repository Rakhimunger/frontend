import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Homeimg from "../assets/images/Homeimg.jpg";

const animatedLines = [
  ["Let's make your best", "trip with us"],
  ["Explore beauty of the", "whole world"],
  ["Natural Wonder of", "the world"],
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % animatedLines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[20vh] sm:h-[70vh] lg:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={Homeimg}
        alt="Home Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Animated Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-4 sm:px-8 lg:px-20 xl:px-28 text-white">
        <div className="text-left max-w-[95%] sm:max-w-[750px] lg:max-w-[900px] xl:max-w-[1050px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.9 }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl italic font-light drop-shadow">
                Get unforgettable pleasure with us
              </h1>
              <div className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-xl">
                {animatedLines[index][0]} <br /> {animatedLines[index][1]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
