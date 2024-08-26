import React, { useState, useEffect } from "react";
import img1 from "../assests/Untitled_design-ai-brush-removebg-cfo1y5q.png";
import img2 from "../assests/artificial-intelligence-3382507_1280.jpg";
import img3 from "../assests/earth-2254769_1280.jpg";
import img4 from "../assests/industry-8303482_1280.jpg";
import img5 from "../assests/rendering-anime-doctors-work (1).jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "@mui/material";

const Example = () => {
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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Foreground Image */}
      <img
        src={img1}
        alt="Foreground"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Text on the Left Side */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black p-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          {slides.text}
        </h2>
        <div className="flex w-full">
          {/* Text Area */}
          <div className="ml-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {slides[currentSlide].text}
            </h2>
            {slides.button && (
              <Button
                variant="contained"
                color="success"
                className="animate__animated animate__fadeInUp"
                onClick={() => (window.location.href = "/form-page")}
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-100"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-100"
      >
        <FaArrowRight />
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Example;
