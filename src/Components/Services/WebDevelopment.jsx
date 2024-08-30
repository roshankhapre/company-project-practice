import React, { useEffect } from "react";
import myImage from "../../assests/ZZZZZ2898.jpg";
import image5 from "../../assests/responsive.jpg";
import image6 from "../../assests/Online shopping.jpg";
import image7 from "../../assests/custome.jpg";
import image8 from "../../assests/Cms1.jpg";
import image9 from "../../assests/seo.jpg";
import image10 from "../../assests/Web Hosting.jpg";
import {
  FaArrowRight,
  FaCloud,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";

import "animate.css";
import WOW from "wowjs";

const WebDevelopment = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  // Reusable Service Card Component
  const ServiceCard = ({ image, title, description }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden wow animate__animated animate__fadeInUp">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-white py-16 px-4 md:px-16 lg:px-32">
      {/* Header Section */}
      <div className="relative mb-16">
        <img
          src={myImage}
          alt="Full Stack Development Services"
          className="w-full h-56 md:h-72 object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 rounded-lg p-4 md:p-8">
          <h1 className="wow animate__animated animate__fadeInDown text-3xl md:text-5xl font-extrabold text-shadow-lg">
            Web Development Services
          </h1>
          <p className="wow animate__animated animate__fadeInDown animate__delay-1s mt-4 text-sm md:text-lg mb-6 md:mb-10">
            Building responsive, innovative, and dynamic web applications to
            elevate your digital presence.
          </p>
          <button className="wow animate__animated animate__fadeInUp animate__delay-2s bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-2 px-4 md:px-6 rounded-full flex items-center transition-all duration-300">
            Contact Us
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {[
          {
            title: "Responsive Design",
            description:
              "Crafting visually stunning websites that adapt seamlessly to any device.",
            image: image5,
          },
          {
            title: "E-commerce Development",
            description:
              "Creating secure, scalable, and user-friendly online stores to boost your sales.",
            image: image6,
          },
          {
            title: "Custom Web Applications",
            description:
              "Tailored web applications to meet your specific business needs.",
            image: image7,
          },
          {
            title: "Content Management Systems",
            description:
              "Easy-to-use CMS platforms like WordPress and Shopify for efficient content management.",
            image: image8,
          },
          {
            title: "SEO Optimization",
            description:
              "Optimizing your website to rank higher on search engines and drive organic traffic.",
            image: image9,
          },
          {
            title: "Web Hosting & Maintenance",
            description:
              "Reliable web hosting solutions and continuous support to keep your website up-to-date.",
            image: image10,
          },
        ].map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      {/* Tools and Technologies Section */}
      <div className="bg-gradient-to-r from-blue-200 to-white py-12 px-6 rounded-xl shadow-inner mb-16 text-center wow animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">
          Tools and Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              icon: <FaLaptopCode className="text-5xl text-blue-500" />,
              name: "HTML/CSS",
            },
            {
              icon: <FaMobileAlt className="text-5xl text-blue-600" />,
              name: "Responsive Design",
            },
            {
              icon: <FaServer className="text-5xl text-green-600" />,
              name: "Node.js",
            },
            {
              icon: <FaDatabase className="text-5xl text-red-600" />,
              name: "MySQL",
            },
            {
              icon: <FaCloud className="text-5xl text-blue-800" />,
              name: "Cloud Hosting",
            },
            {
              icon: <FaCode className="text-5xl text-gray-800" />,
              name: "JavaScript",
            },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-full shadow-2xl transform transition-transform duration-300 hover:scale-105"
              style={{ width: "160px", height: "160px" }}
            >
              {tech.icon}
              <span className="text-gray-800 font-medium mt-2">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* FAQ Section */}
      <div className="bg-stone-100 py-12 px-6 my-16 rounded-2xl shadow-2xl wow animate__animated animate__fadeInUp">
        <section className="my-16">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                question: "What is the process for developing a website?",
                answer:
                  "Our web development process includes initial consultation, planning and design, development, testing, and deployment.",
              },
              {
                question: "How do you ensure my website is mobile-friendly?",
                answer:
                  "We use responsive design techniques to ensure that your website looks and functions perfectly on all devices.",
              },
              {
                question: "Can you help with website SEO?",
                answer:
                  "Yes, we provide SEO optimization services to improve your website’s visibility on search engines.",
              },
              {
                question: "What technologies do you use for web development?",
                answer:
                  "We use modern technologies like HTML, CSS, JavaScript, React.js, Node.js, WordPress, and Shopify.",
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer:
                  "Yes, we offer ongoing support and maintenance services to keep your website up-to-date, secure, and functional.",
              },
              {
                question: "How long does it take to build a website?",
                answer:
                  "A standard website typically takes 6-8 weeks from start to finish. More complex sites may take longer.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="p-5 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out group"
                open={index === 0 ? true : false}
              >
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex items-center justify-between hover:text-red-600">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-red-500 group-hover:text-red-700 transition-transform duration-300 ease-in-out group-open:rotate-180"
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
                <p className="mt-3 text-gray-600">{faq.answer}</p>
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

export default WebDevelopment;
