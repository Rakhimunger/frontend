import React from "react";
import antbus from "../assets/images/antbus.jpg";
import antbusimg from "../assets/images/antbusimg.jpeg";
import antbusimg1 from "../assets/images/antbusimg1.jpeg";
import antbusimg2 from "../assets/images/antbusimg2.jpeg";
import antbusimg3 from "../assets/images/antbusimg3.png";
import antbusimg4 from "../assets/images/antbusimg4.png";
import antbusimg5 from "../assets/images/antbusimg5.png";
import antimg from "../assets/images/antimg.png";

const GallerySection = () => {
  const images = [
    antbus,
    antbusimg,
    antbusimg1,
    antbusimg2,
    antbusimg3,
    antbusimg4,
    antbusimg5,
    antimg,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-10 text-center">
        From our Gallery
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
