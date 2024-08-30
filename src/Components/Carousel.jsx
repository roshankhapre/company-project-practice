import React, { useState } from "react";
import img1 from "../assests/futurism-perspective-digital-nomads-lifestyle.jpg";
import img2 from "../assests/futuristic-business-scene-with-ultra-modern-ambiance.jpg";
import img3 from "../assests/futuristic-hand-working-laptop.jpg";
import img4 from "../assests/scene-with-business-person-working-futuristic-office-job.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];
  const texts = [
    "Embrace the Digital Future: Work Anywhere, Anytime",
    "Elevating Business to a New Dimension of Possibilities",
    "Technology Empowering Creativity and Innovation",
    "Shaping the Future of Work with Advanced Solutions",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <div className="carousel-content relative flex items-center justify-center flex-col h-full transition-opacity duration-500 ease-in-out">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <h2 className="absolute bottom-12 text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          {texts[currentIndex]}
        </h2>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={handlePrev}
          className="text-white text-3xl p-4 hover:text-gray-300 transition-all"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={handleNext}
          className="text-white text-3xl p-4 hover:text-gray-300 transition-all"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
