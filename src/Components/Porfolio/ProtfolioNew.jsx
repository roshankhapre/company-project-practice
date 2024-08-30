import React, { useEffect } from "react";
import img3 from "../../assests/myristicapharmaceutical.png";
import img4 from "../../assests/myritica-products.png";
import img5 from "../../assests/myritica-contact.png";
import img6 from "../../assests/myritica-aboutus.png";
import medicalkit from "../../assests/Pharmacyshop3.png";
import logo from "../../assests/imageLogo-1.png";
import "animate.css";
import WOW from "wowjs";

const PortfolioNew = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-r from-white via-blue-100 to-teal-200 overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 rounded-full opacity-20 filter blur-2xl animate-spin-slow"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-300 to-teal-600 rounded-full opacity-30 filter blur-3xl animate-reverse-spin"></div>
      </div>

      {/* Title and Logo */}
      <div className="text-center mb-16 relative z-10">
        <div className="flex justify-center items-center mb-8">
          <img
            src={logo}
            alt="Myristica Logo"
            className="w-24 h-24 animate__animated animate__fadeInDown"
          />
        </div>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-700 wow animate__animated animate__fadeIn animate__delay-1s">
          MYRISTICA PHARMACEUTICALS
        </h1>
        <a
          href="https://myristicapharmaceutical.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-4 block text-lg wow animate__animated animate__fadeIn animate__delay-1s"
        >
          Explore Our Store - www.myristicapharmaceutical.com
        </a>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Side: Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[img3, img4, img5, img6].map((img, index) => (
            <div
              key={index}
              className={`wow animate__animated animate__fadeInUp animate__delay-0.8s bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800  rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden`}
            >
              <img
                src={img}
                alt={`Card ${index}`}
                className="w-full h-52 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:brightness-110"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white">
                  {index === 0
                    ? "Welcome to Our Pharmacy"
                    : index === 1
                    ? "Discover Our Products"
                    : index === 2
                    ? "Get in Touch with Us"
                    : "Learn About Us"}
                </h2>
                <p className="text-gray-400 mt-2">
                  {index === 0
                    ? "Your health is our priority. Explore our comprehensive pharmacy solutions for a healthier you."
                    : index === 1
                    ? "Browse our wide range of high-quality medicines and healthcare products tailored for your needs."
                    : index === 2
                    ? "Reach out to our friendly team for any inquiries, assistance, or support regarding our services."
                    : "Understand our mission, values, and commitment to providing excellent healthcare services."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Text, Quote, and Medical Kit Image */}
        <div className="w-full lg:w-1/2 hidden lg:flex flex-col justify-center items-center space-y-8 text-center relative">
          {/* Text Section */}
          <div className="wow animate__animated animate__fadeInRight animate__delay-1s max-w-md">
            <h2 className="text-4xl font-bold text-red-500 mb-5 mt-10">
              Your Health, Our Commitment
            </h2>
            <p className="text-gray-700 text-lg">
              At Myristica Pharmaceuticals, we are dedicated to bringing you
              top-quality medicines and healthcare products. Our goal is to
              empower you with wellness solutions that are trusted, effective,
              and affordable.
            </p>
          </div>
          <div className="wow animate__animated animate__fadeInRight animate__delay-1.5s max-w-md">
            <h2 className="text-4xl font-bold text-blue-600 mb-5">
              Experience Excellence
            </h2>
            <p className="text-gray-700 text-lg">
              With a commitment to excellence, we continually strive to enhance
              your pharmacy experience through innovative products and
              exceptional customer care.
            </p>
          </div>

          {/* Quote Section */}
          <div className="wow animate__animated animate__fadeInRight animate__delay-1.8s max-w-md">
            <p className="text-xl italic text-gray-800 ">
              "The art of medicine consists in amusing the patient while nature
              cures the disease." — Voltaire
            </p>
          </div>

          {/* Animated Medical Kit Image */}
          <div className="relative wow animate__animated animate__fadeInRight">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-60 filter blur-xl animate-pulse absolute -top-8 -left-10"></div>
            <img
              src={medicalkit}
              alt="Medical Kit"
              className="relative z-10 w-96 h-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioNew;
