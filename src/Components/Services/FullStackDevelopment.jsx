import React from "react";
import myImage from "../../assests/ZZZZZ2898.jpg";
import image1 from "../../assests/web-design-concept-with-drawings.jpg";
import image2 from "../../assests/26815.jpg";
import image3 from "../../assests/Wavy_Tech-22_Single-06.jpg";
import image4 from "../../assests/4872663.jpg";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaArrowRight,
  FaShopify,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import { SiMongodb, SiSpringboot } from "react-icons/si";

const FullStackDevelopment = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 font-sans">
      {/* Full Stack Development Banner */}
      <div className="relative mb-10">
        <img
          src={myImage}
          alt="Full Stack Development"
          className="w-full h-72 object-cover rounded-lg"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-60 rounded-lg">
          <h1 className="text-4xl font-semibold">
            Full Stack Development Services
          </h1>
          <p className="mt-4 text-lg mb-8">
            Comprehensive, scalable web solutions tailored for your business.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center transition-transform duration-300 transform hover:scale-105">
            Contact Us
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* What Web Solution Do You Need Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">What Web Solution Do You Need?</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore a variety of web development services tailored to meet your
          specific business goals.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[image1, image2, image3, image4].map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px] transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-60">
              <img
                src={image}
                alt={`Service ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-t-lg" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mt-8">
                {index === 0
                  ? "Web Design"
                  : index === 1
                  ? "Web Portal"
                  : index === 2
                  ? "Testing & Deployment"
                  : "Maintenance"}
              </h3>
              <p className="text-center text-gray-600 mt-4">
                {index === 0
                  ? "Creative and responsive designs that drive engagement."
                  : index === 1
                  ? "Secure and scalable portals crafted for your needs."
                  : index === 2
                  ? "Efficient testing and seamless deployment services."
                  : "Reliable maintenance to keep your web solution updated."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Technologies Section */}
      <div className="mt-32">
        <h2 className="text-2xl font-bold text-center mb-16">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {[
            { icon: <FaReact />, label: "React.js", color: "text-blue-500" },
            { icon: <FaNodeJs />, label: "Node.js", color: "text-green-500" },
            { icon: <FaJava />, label: "Java", color: "text-red-500" },
            {
              icon: <FaWordpress />,
              label: "WordPress",
              color: "text-blue-500",
            },
            { icon: <FaDatabase />, label: "SQL", color: "text-yellow-500" },
            { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
            {
              icon: <SiSpringboot />,
              label: "Spring Boot",
              color: "text-green-500",
            },
            { icon: <FaShopify />, label: "Shopify", color: "text-green-500" },
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-110 hover:shadow-2xl"
            >
              <div className={`text-4xl mb-2 ${tech.color}`}>{tech.icon}</div>
              <p className="text-lg font-medium">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullStackDevelopment;
