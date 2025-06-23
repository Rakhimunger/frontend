import React, { useState } from "react";
import { Search } from "lucide-react";

// Images
import antimg from "../../assets/images/antimg.png";
import antbusimg1 from "../../assets/images/antbusimg1.jpeg";
import antimg1 from "../../assets/images/antimg1.png";
import antimg6 from "../../assets/images/antimg6.png";
import antimg2 from "../../assets/images/antimg2.png";
import antimg5 from "../../assets/images/antimg5.png";
import antimg3 from "../../assets/images/antimg3.png";
import antbus from "../../assets/images/antbus.jpg";

const galleryImages = [
  { src: antimg, label: "Temple Entrance" },
  { src: antimg3, label: "Spiritual Path" },
  { src: antbusimg1, label: "Pilgrim Bus" },
  { src: antimg6, label: "Peaceful View" },
  { src: antimg1, label: "Sacred Bells" },
  { src: antimg2, label: "Holy Flame" },
  { src: antimg5, label: "Pilgrimage Stop" },
  { src: antbus, label: "ANT Travel Bus" },
];

const RecentGallery = () => {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="bg-[#f9fbfe] py-10 px-4 sm:px-6 lg:px-10 w-full">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h3 className="text-xs sm:text-2xl text-blue-500 font-bold tracking-widest uppercase mb-2">
          Make Your Tour More Pleasure
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
          Recent Gallery
        </h2>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setZoomImage(img)}
            >
              <img
                src={img.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <div className="absolute inset-0  group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300">
                <Search className="text-black opacity-0 group-hover:opacity-100 w-10 h-10" />
              </div>
              <div className="p-3 text-center bg-white">
                <p className="text-sm text-black font-bold">{img.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* View All Button */}
        <div className="mt-10 flex justify-center items-center">
          <button className="bg-gradient-to-r from-[#3B4B96] to-[#FF5722] text-white px-6 py-2.5 rounded-xl hover:from-[#2C3A7D] hover:to-[#E64A19] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            View All →
          </button>
        </div>
      </div>

      {/* Light Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src={zoomImage.src}
              alt={zoomImage.label}
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-xl font-bold hover:bg-red-600 transition-all"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentGallery;
