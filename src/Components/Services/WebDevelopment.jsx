import React, { useEffect } from "react";
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
import { Button, TextField, Typography } from "@mui/material";
import { Phone, Email, LocationOn, ArrowForward } from "@mui/icons-material";
import "animate.css";
import WOW from "wowjs";

const WebDevelopment = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      {/* Full Stack Development Banner */}
      <div className="relative mb-10">
        <img
          src={myImage}
          alt="Full Stack Development"
          className="w-full h-72 object-cover rounded-lg"
        />
        <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 rounded-lg">
          <h1 className="wow animate__animated animate__lightSpeedInLeft text-4xl font-bold text-shadow-lg">
            Web Development Services
          </h1>
          <p className="wow animate__animated animate__lightSpeedInLeft mt-4 text-lg mb-10">
            We provide end-to-end full stack development solutions for all your
            business needs.
          </p>
          <button className="wow animate__animated animate__lightSpeedInRight bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-2 px-6 rounded-full flex items-center transition-all duration-300">
            Contact Us
            <FaArrowRight className="  ml-2" />
          </button>
        </div>
      </div>

      {/* What Web Solution Do You Need Section */}
      <div className="text-center mb-16">
        <h2 className="wow  animate__animated animate__fadeInDownBig text-3xl font-bold">
          What Web Solution Do You Need?
        </h2>
        <p className="wow  animate__animated animate__fadeInDownBig mt-4 text-gray-600">
          We offer a wide range of services to cater to your web development
          needs.
        </p>
      </div>

      {/* Services Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card Component */}
        <div className="wow  animate__animated animate__fadeInUpBig bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 overflow-hidden flex flex-col">
          <div className="relative w-full h-60">
            <img
              src={image1}
              alt="Web Design"
              className="size-fit absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg" />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between bg-white">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mt-10">
              Web Design
            </h3>
            <p className="wow  animate__animated animate__backInLeft text-center text-gray-600 mb-10">
              Creative and responsive web design services to make your business
              stand out.
            </p>
          </div>
        </div>

        <div className="wow  animate__animated animate__fadeInUpBig bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 overflow-hidden flex flex-col">
          <div className="relative w-full h-60">
            <img
              src={image2}
              alt="Web Portal"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg" />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between bg-white">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mt-10">
              Web Portal
            </h3>
            <p className="wow  animate__animated animate__backInLeft text-center text-gray-600 mb-10">
              Secure and scalable web portals tailored to your business
              requirements.
            </p>
          </div>
        </div>

        <div className="wow  animate__animated animate__fadeInUpBig bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 overflow-hidden flex flex-col">
          <div className="relative w-full h-60">
            <img
              src={image3}
              alt="Testing & Deployment"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg" />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between bg-white">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mt-10">
              Testing & Deployment
            </h3>
            <p className="wow  animate__animated animate__backInRight text-center text-gray-600 mb-10">
              Comprehensive testing and smooth deployment services for your web
              applications.
            </p>
          </div>
        </div>

        <div className="wow  animate__animated animate__fadeInUpBig bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 overflow-hidden flex flex-col">
          <div className="relative w-full h-60">
            <img
              src={image4}
              alt="Maintenance"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg" />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between bg-white">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mt-10">
              Maintenance
            </h3>
            <p className="wow  animate__animated animate__backInRight text-center text-gray-600 mb-10">
              Ongoing support and maintenance to keep your web applications
              running smoothly.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mt-32">
        <h2 className="wow  animate__animated animate__backInUp text-2xl font-bold text-center mb-16">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          <div className=" wow  animate__animated animate__backInUp bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <FaReact className="text-4xl text-blue-500 mb-2" />
            <p className="wow  animate__animated animate__bounceInDown text-lg">
              React.js
            </p>
          </div>
          <div className="wow  animate__animated animate__backInUp bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <FaNodeJs className="text-4xl text-green-500 mb-2" />
            <p className="wow  animate__animated animate__bounceInDown text-lg">
              Node.js
            </p>
          </div>
          <div className="wow  animate__animated animate__backInUp bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <FaJava className="text-4xl text-red-500 mb-2" />
            <p className="wow  animate__animated animate__bounceInDown text-lg">
              Java
            </p>
          </div>
          <div className="wow  animate__animated animate__backInUp bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <SiSpringboot className="text-4xl text-green-700 mb-2" />
            <p className="wow  animate__animated animate__bounceInDown text-lg">
              Spring Boot
            </p>
          </div>
          <div className="wow  animate__animated animate__backInUp bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <SiMongodb className="text-4xl text-green-500 mb-2" />
            <p className="wow  animate__animated animate__bounceInDown text-lg">
              MongoDB
            </p>
          </div>
          <div className="wow  animate__animated animate__backInUp bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <FaDatabase className="text-4xl text-blue-600 mb-2" />
            <p className="wow  animate__animated animate__bounceInDown text-lg">
              SQL
            </p>
          </div>
          <div className="wow  animate__animated animate__backInUp bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <FaShopify className="text-4xl text-green-600 mb-2" />
            <p className="wow  animate__animated animate__bounceInDown text-lg">
              Shopify
            </p>
          </div>
          <div className="wow  animate__animated animate__backInUp bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <FaWordpress className="text-4xl text-blue-700 mb-2" />
            <p className="wow  animate__animated animate__bounceInDown text-lg">
              WordPress
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 py-10 mt-20 rounded-lg shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="flex flex-col justify-center px-5">
            <Typography variant="h4" gutterBottom className="font-bold">
              Contact Us
            </Typography>
            <div className="flex items-center mt-5">
              <Phone className="text-red-500 mr-2" />
              <Typography variant="body1">+1 234 567 890</Typography>
            </div>
            <div className="flex items-center mt-5">
              <Email className="text-red-500 mr-2" />
              <Typography variant="body1">info@mywebsite.com</Typography>
            </div>
            <div className="flex items-center mt-5">
              <LocationOn className="text-red-500 mr-2" />
              <Typography variant="body1">
                1234 Street Name, City, Country
              </Typography>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Typography variant="h4" gutterBottom className="font-bold">
              Enquiry Now
            </Typography>
            <form>
              <div className="grid grid-cols-1 gap-6 mt-4">
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  className="mt-2"
                />
                <TextField
                  label="Company Name"
                  variant="outlined"
                  fullWidth
                  className="mt-2"
                />
                <TextField
                  label="Company URL"
                  variant="outlined"
                  fullWidth
                  className="mt-2"
                />
                <TextField
                  label="Company Email ID"
                  variant="outlined"
                  fullWidth
                  className="mt-2"
                />
                <TextField
                  label="Optional Personal Email ID"
                  variant="outlined"
                  fullWidth
                  className="mt-2"
                />
                <TextField
                  label="Work Phone Number"
                  variant="outlined"
                  fullWidth
                  className="mt-2"
                />
                <TextField
                  label="Optional Personal Number"
                  variant="outlined"
                  fullWidth
                  className="mt-2"
                />
                <TextField
                  label="Business Details"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  className="mt-2"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="mt-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white py-3 rounded-md flex items-center justify-center transition-all duration-300"
                >
                  Submit <ArrowForward className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
