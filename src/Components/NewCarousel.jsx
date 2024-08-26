import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assests/Untitled_design-ai-brush-removebg-cfo1y5q.png";
import img2 from "../assests/artificial-intelligence-3382507_1280.jpg";
import img3 from "../assests/earth-2254769_1280.jpg";
import img4 from "../assests/industry-8303482_1280.jpg";
import img5 from "../assests/rendering-anime-doctors-work (1).jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: img2, text: "Welcome to Itro", button: true },
    { image: img3, text: "Your Technology Partner", button: false },
    {
      image: img4,
      text: "Innovative Solutions for Your Business",
      button: false,
    },
    { image: img5, text: "Leading the Future of IT", button: false },
  ];

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex">
      {/* Left side: Rotating slides */}
      <div className="w-1/2 flex-shrink-0 relative bg-gray-900">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-screen object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-gradient-to-t from-black to-transparent p-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate__animated animate__fadeInDown animate__delay-1s">
                  {slide.text}
                </h2>
                {slide.button && (
                  <Button
                    variant="contained"
                    color="primary"
                    className="mt-4 opacity-0 animate__animated animate__fadeInUp animate__delay-2s"
                    onClick={() => (window.location.href = "/form-page")}
                  >
                    Get Started
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Fixed image */}
      <div className="w-1/2 flex-shrink-0 relative">
        <img
          src={img1}
          alt="Fixed Image"
          className="relative w-full h-screen object-cover"
        />
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 transition duration-300"
        onClick={prevSlide}
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 transition duration-300"
        onClick={nextSlide}
      >
        <FaArrowRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            } transition duration-300`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
