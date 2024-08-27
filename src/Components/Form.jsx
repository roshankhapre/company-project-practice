import React, { useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Phone, Email, LocationOn, ArrowForward } from "@mui/icons-material";

import "animate.css";
import WOW from "wowjs";

const Form = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-6 animate-fadeIn">
      {/* Contact Details Section */}
      <div className="w-full md:w-1/3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl text-center">
        <Typography
          variant="h3"
          sx={{
            mb: 7,
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
            lineHeight: 1.2,
          }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 animate-gradientShift wow animate__animated animate__lightSpeedInLeft animate__delay-1s"
        >
          Contact Us
        </Typography>
        <div className="flex items-center mb-7 mt-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 transform hover:scale-110 mr-4">
            <Phone className="text-white" />
          </div>
          <Typography variant="body1" className="text-white">
            +91-7089200175
          </Typography>
        </div>
        <div className="flex items-center mb-7 mt-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 transform hover:scale-110 mr-4">
            <Email className="text-white" />
          </div>
          <Typography variant="body1" className="text-white">
            contact@company.com
          </Typography>
        </div>
        <div className="flex items-center mb-7 mt-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 transform hover:scale-110 mr-4">
            <LocationOn className="text-white" />
          </div>
          <Typography variant="body1" className="text-white">
            Rajendra Nagar <b>Indore</b>, Pin Code - 452012
          </Typography>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div className="w-full md:w-2/3 bg-white p-8 rounded-3xl shadow-2xl text-center">
        <Typography
          variant="h3"
          sx={{
            mb: 7,
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
            lineHeight: 1.2,
          }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 animate-gradientShift wow animate__animated animate__lightSpeedInRight animate__delay-1s"
        >
          Enquiry Now
        </Typography>
        <form className="space-y-6">
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
          />
          <div className="space-y-6">
            <TextField
              fullWidth
              label="Company Name"
              variant="outlined"
              className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            />
            <TextField
              fullWidth
              label="Company URL"
              variant="outlined"
              className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <TextField
              fullWidth
              label="Company Email ID"
              variant="outlined"
              className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            />
            <TextField
              fullWidth
              label="Optional Personal Email ID"
              variant="outlined"
              className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            />
          </div>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Tell us about your business"
            variant="outlined"
            className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
          />
          <div className="flex justify-end mt-8">
            <Button
              size="large"
              variant="contained"
              color="error"
              endIcon={<ArrowForward />}
              className="px-8 py-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 animate-buttonHover"
              style={{
                background: "linear-gradient(90deg, #FF416C 0%, #FF4B2B 100%)",
              }}
            >
              Contact Us
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
