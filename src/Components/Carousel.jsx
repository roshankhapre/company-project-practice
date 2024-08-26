import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://img.freepik.com/free-photo/full-shot-man-experiencing-virtual-reality_23-2149548139.jpg?w=1060&t=st=1723881874~exp=1723882474~hmac=47309042cebe52c612350c08da854fe75fd07713c75dc549f002a40b378c0faf",
      text: "Welcome to Itro",
      button: true,
      bgColor: "linear-gradient(135deg, #1a202c, #4a5568)",
    },
    {
      image:
        "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041866.jpg?w=1060&t=st=1723881935~exp=1723882535~hmac=e7afff9fde7a27860b5e6793e8295bc08434b2bf11e6e927bf44d67eaf06af51",
      text: "Your Technology Partner",
      button: false,
      bgColor: "linear-gradient(135deg, #2d3748, #718096)",
    },
    {
      image:
        "https://img.freepik.com/free-photo/rendering-anime-doctors-work_23-2151151812.jpg?t=st=1723881886~exp=1723885486~hmac=e94de50706375536ddb77eb5404928845ae2e5642876d47ea06ba21fc27ef5f1&w=1060",
      text: "Innovative Solutions for Your Business",
      button: false,
      bgColor: "linear-gradient(135deg, #4a5568, #2d3748)",
    },
    {
      image:
        "https://img.freepik.com/free-vector/illustration-web-design_53876-18155.jpg?t=st=1723882099~exp=1723885699~hmac=aee90a9576db2e56d4396c0bd36d0985c3404ffc8b29e94c66e982c089fb8a6c&w=1060",
      text: "Leading the Future of IT",
      button: false,
      bgColor: "linear-gradient(135deg, #718096, #1a202c)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div
      className="relative w-full h-[70vh] max-w-full mx-auto overflow-hidden flex items-center"
      style={{
        background: slides[currentSlide].bgColor,
        transition: "background 1s ease-in-out",
      }}
    >
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex w-full h-full">
            <motion.div
              className="w-1/2 flex flex-col justify-center items-start p-8 text-white"
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: currentSlide === index ? 0 : -50,
                opacity: currentSlide === index ? 1 : 0,
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 shadow-lg">
                {slide.text}
              </h2>
              {slide.button && (
                <Button
                  variant="contained"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transform transition"
                  onClick={() => (window.location.href = "/form-page")}
                >
                  Get Started
                </Button>
              )}
            </motion.div>
            <motion.div
              className="w-1/2"
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: currentSlide === index ? 0 : 50,
                opacity: currentSlide === index ? 1 : 0,
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg transition transform hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Controls */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-60 text-black px-3 py-2 rounded-full hover:bg-opacity-90 shadow-lg transition"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-60 text-black px-3 py-2 rounded-full hover:bg-opacity-90 shadow-lg transition"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition ${
              index === currentSlide
                ? "bg-white shadow-md scale-110"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
