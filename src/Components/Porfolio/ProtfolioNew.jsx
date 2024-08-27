import React, { useEffect } from "react";
import img3 from "../../assests/myristicapharmaceutical.png";
import img4 from "../../assests/myritica-products.png";
import img5 from "../../assests/myritica-contact.png";
import img6 from "../../assests/myritica-aboutus.png";
import background from "../../assests/1351187.png";
import "animate.css";
import WOW from "wowjs";

const PortfolioNew = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section
      className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-60 filter blur-2xl animate-spin-slow"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-green-400 to-blue-600 rounded-full opacity-50 filter blur-3xl animate-reverse-spin"></div>
      </div>

      {/* Title and Link */}
      <div className=" text-center mb-16 relative z-10">
        <h1 className=" text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400 wow animate__animated animate__lightSpeedInLeft animate__delay-1s">
          MYRISTICA PHARMACEUTICALS
        </h1>
        <a
          href="https://myristicapharmaceutical.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline mt-4 block text-lg wow animate__animated animate__lightSpeedInLeft animate__delay-1s"
        >
          www.myristicapharmaceutical.com
        </a>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Side: Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[img3, img4, img5, img6].map((img, index) => (
            <div
              key={index}
              className={`wow animate__animated animate__fadeInUpBig animate__delay-0.8s bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:ring-2 hover:ring-${
                index % 2 === 0 ? "cyan" : "pink"
              }-400 overflow-hidden`}
            >
              <img
                src={img}
                alt={`Card ${index}`}
                className=" w-full h-52 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:brightness-110"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-100">
                  {index === 0
                    ? "Home Page"
                    : index === 1
                    ? "Products"
                    : index === 2
                    ? "Contact Us"
                    : "About Us"}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Additional Content or Placeholder */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center">
          <div className="w-72 h-72 bg-gradient-to-r from-teal-300 to-blue-500 rounded-full filter blur-lg opacity-70 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioNew;
