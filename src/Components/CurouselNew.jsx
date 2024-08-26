import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assests/Untitled_design-ai-brush-removebg-cfo1y5q.png"; // Foreground image

const slides = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/rendering-anime-doctors-work_23-2151151812.jpg?t=st=1723980011~exp=1723983611~hmac=ab659c9d3d6f3f611d11f01fd820e805188b15ad0a58e37f8708c2c3a540c9e3&w=1380",
    title: "Welcome To Trio Company",
    description:
      "An information technology company focused on technology-driven products and services, including software development, hardware solutions, IT consulting, cybersecurity, and cloud services.",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041866.jpg?w=1060&t=st=1723881935~exp=1723882535~hmac=e7afff9fde7a27860b5e6793e8295bc08434b2bf11e6e927bf44d67eaf06af51",
    title: "Why Us",
    description:
      "We offer comprehensive IT services, tailored to your business needs, ensuring efficiency, reliability, and growth in the digital era.",
  },
];

const CarouselNew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[650px] bg-white flex justify-center items-center duration-200">
      {/* Foreground Image */}
      <div className="absolute inset-0 z-20 flex justify-center items-center">
        <img
          src={img1}
          alt="Foreground Design"
          className="bg- w-[1000px] h-auto object-cover"
        />
      </div>

      {/* Slider Section */}
      <div className="container relative z-10 pb-8 sm:pb-0">
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={slide.id}
                className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
              >
                {/* Text Content Section */}
                <div className="order-1 sm:order-1 p-4 text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-base mb-8">{slide.description}</p>
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Contact Us Now
                  </button>
                </div>

                {/* Background Image Section */}
                <div className="order-2 sm:order-2 p-4 relative">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full sm:h-[450px] sm:w-[450px] object-contain mx-auto shadow-lg rounded-lg"
                  />
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselNew;
