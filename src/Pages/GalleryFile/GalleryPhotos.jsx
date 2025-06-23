import React, { useState } from "react";
import Modal from "react-modal";

// 📸 Importing local images
import antbus from "../../assets/images/antbus.jpg";
import antbusimg from "../../assets/images/antbusimg.jpeg";
import antbusimg1 from "../../assets/images/antbusimg1.jpeg";
import antbusimg3 from "../../assets/images/antbusimg3.png";
import antbusimg4 from "../../assets/images/antbusimg4.png";

Modal.setAppElement("#root");

const images = [
  antbus,
  antbusimg,
  antbusimg1,
  antbusimg3,
  antbusimg4,
  antbus,
  antbusimg,
  antbusimg4,
  antbusimg3,
];

const GalleryPhotos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imgUrl) => {
    setCurrentImage(imgUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 bg-white min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-blue-900 mb-6 sm:mb-10 font-playfair leading-snug">
        Our Bus Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md sm:shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              alt={`Bus ${index + 1}`}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-40"
      >
        <div className="relative p-2 sm:p-4">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl sm:text-3xl font-bold"
          >
            &times;
          </button>
          <img
            src={currentImage}
            alt="Zoomed"
            className="max-w-[90vw] max-h-[80vh] rounded-lg border-2 border-white shadow-2xl"
          />
        </div>
      </Modal>
    </div>
  );
};

export default GalleryPhotos;
