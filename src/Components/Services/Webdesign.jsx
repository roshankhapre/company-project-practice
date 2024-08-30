import React, { useEffect } from "react";
import myImage from "../../assests/ZZZZZ2898.jpg";
import CustomeWebsite from "../../assests/custome.jpg";
import UIUx from "../../assests/7706581.jpg";
import responsive from "../../assests/responsive.jpg";
import GraphicDesign from "../../assests/3569186.jpg";
import Redesign from "../../assests/6926521.jpg";
import Brand from "../../assests/Brand.jpeg";

import {
  FaPalette,
  FaLaptop,
  FaPencilRuler,
  FaMobile,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import "animate.css";
import WOW from "wowjs";

const WebDesign = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-16 px-4 md:px-16 lg:px-32 ">
      {/* Header Section */}
      <div className="relative mb-20 ">
        <img
          src={myImage}
          alt="Web Design Services"
          className="w-full h-96 object-cover rounded-lg shadow-lg "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white text-center p-6 rounded-lg">
          <h1 className="wow animate__animated animate__fadeInUp text-5xl font-extrabold mb-4">
            Web Design Services
          </h1>
          <p className="wow animate__animated animate__fadeInRight text-lg mb-8 max-w-2xl">
            We blend creativity with functionality to craft visually stunning
            websites that captivate your audience and drive results.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full flex items-center transition-all duration-300 wow animate__animated animate__backInRight">
            Contact Us
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 wow animate__animated animate__fadeInUp">
        {[
          {
            title: "Custom Website Design",
            description:
              "Creating unique designs tailored to your brand’s personality and vision.",
            image: CustomeWebsite,
          },
          {
            title: "UI/UX Design",
            description:
              "Designing intuitive and user-friendly interfaces for enhanced user experiences.",
            image: UIUx,
          },
          {
            title: "Mobile-First Design",
            description:
              "Optimizing designs for seamless mobile experiences, ensuring your site looks great on any device.",
            image: responsive,
          },
          {
            title: "Graphic Design",
            description:
              "Crafting visually engaging graphics that enhance your website’s look and feel.",
            image: GraphicDesign,
          },
          {
            title: "Redesign and Revamp",
            description:
              "Refreshing outdated websites with modern aesthetics and functionalities.",
            image: Redesign,
          },
          {
            title: "Brand Identity Design",
            description:
              "Creating cohesive branding elements that align with your company’s vision and goals.",
            image: Brand,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden animate__animated animate__fadeInUp"
          >
            <div className="relative h-64">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Design Approach Section */}
      <div className="bg-gradient-to-r from-purple-200 to-white p-12 rounded-xl shadow-inner mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">
          Our Design Approach
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            {
              icon: <FaPalette className="text-6xl text-purple-500" />,
              name: "Creative Concepts",
            },
            {
              icon: <FaPencilRuler className="text-6xl text-purple-600" />,
              name: "Wireframing & Prototyping",
            },
            {
              icon: <FaLaptop className="text-6xl text-purple-700" />,
              name: "Responsive Design",
            },
            {
              icon: <FaLightbulb className="text-6xl text-yellow-600" />,
              name: "Innovative Ideas",
            },
            {
              icon: <FaMobile className="text-6xl text-blue-600" />,
              name: "Mobile Compatibility",
            },
          ].map((approach, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
              style={{ height: "190px", width: "190px" }}
            >
              {approach.icon}
              <span className="text-gray-800 font-medium mt-3 text-center">
                {approach.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-stone-100 py-16 px-8 my-20 rounded-2xl shadow-2xl">
        <section className="my-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                question: "What is your design process for creating a website?",
                answer:
                  "Our design process includes understanding your brand, creating wireframes and prototypes, designing the user interface, and refining based on feedback. We ensure the design aligns with your brand’s identity and goals.",
              },
              {
                question:
                  "How do you ensure the website design aligns with my brand?",
                answer:
                  "We start by learning about your brand’s values, mission, and target audience. This information helps us craft designs that reflect your brand’s identity. We also use your feedback throughout the design process to ensure alignment.",
              },
              {
                question:
                  "What is mobile-first design, and why is it important?",
                answer:
                  "Mobile-first design is an approach where we design the website for mobile devices first and then scale up for larger screens. This ensures a seamless user experience across all devices, improving usability and engagement.",
              },
              {
                question:
                  "How do you handle revisions and feedback during the design phase?",
                answer:
                  "We provide opportunities for feedback at multiple stages of the design process. You can review wireframes, prototypes, and final designs. We make revisions based on your feedback to ensure the design meets your expectations.",
              },
              {
                question:
                  "Do you offer graphic design services as part of your web design?",
                answer:
                  "Yes, we offer graphic design services including custom illustrations, icons, and branding elements to enhance the visual appeal of your website and ensure consistency with your brand identity.",
              },
              {
                question:
                  "How long does it take to complete a website design project?",
                answer:
                  "The duration depends on the complexity of the project and your requirements. On average, a complete website design project takes 4-6 weeks, including feedback and revisions. Complex projects may take longer.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out group"
                open={index === 0 ? true : false}
              >
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex items-center justify-between hover:text-red-600">
                  {faq.question}
                  <svg
                    className="w-6 h-6 text-red-500 group-hover:text-red-700 transition-transform duration-300 ease-in-out group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <div className="wow animate__animated animate__fadeInUp bg-white p-12 rounded-2xl shadow-xl text-center my-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Let’s Build Your Dream Website
        </h2>
        <p className="text-gray-600 mb-8">
          Ready to create a cutting-edge website? Contact us to get started
          today!
        </p>
        <button className="wow animate__animated animate__heartBeat animate__delay-1s bg-blue-500 text-white py-3 px-6 rounded-full font-bold hover:bg-blue-600 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WebDesign;
