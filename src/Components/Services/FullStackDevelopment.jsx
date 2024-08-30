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
import WOW from "wowjs";

const FullStackDevelopment = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-16 lg:px-32">
      {/* Header Section */}
      <div className="relative mb-16">
        <img
          src={myImage}
          alt="Full Stack Development Services"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center p-6 rounded-lg">
          <h1 className="wow animate__animated animate__backInLeft text-5xl font-extrabold mb-4">
            Full Stack Development Services
          </h1>
          <p className="wow animate__animated animate__backInUp text-lg mb-8 max-w-2xl">
            Transform your business with our comprehensive full stack
            development services, tailored to enhance your digital presence.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full flex items-center transition-all duration-300 wow animate__animated  animate__lightSpeedInRight animate__bounce animate__delay-1s">
            Contact Us
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16 wow animate__animated animate__slideInUp animate__bounce animate__delay-1s">
        {[
          {
            title: "Web Design",
            description:
              "Innovative and responsive designs that capture your brand’s essence.",
            image: image1,
          },
          {
            title: "Web Portal",
            description:
              "Robust and secure web portals tailored to your business needs.",
            image: image2,
          },
          {
            title: "Testing & Deployment",
            description:
              "Seamless testing and deployment services for optimal performance.",
            image: image3,
          },
          {
            title: "Maintenance",
            description:
              "Ongoing support and maintenance to keep your web solutions updated.",
            image: image4,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white  rounded-2xl shadow-lg hover:shadow-2xl  overflow-hidden "
          >
            <div className="relative h-64">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Technologies Section */}
      <div className="bg-gray-100 py-12 px-6 rounded-xl shadow-inner mb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 ">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              icon: <FaReact className="text-4xl text-blue-500" />,
              name: "React.js",
            },
            {
              icon: <FaNodeJs className="text-4xl text-green-600" />,
              name: "Node.js",
            },
            {
              icon: <FaJava className="text-4xl text-red-600" />,
              name: "Java",
            },
            {
              icon: <SiSpringboot className="text-4xl text-green-800" />,
              name: "Spring Boot",
            },
            {
              icon: <SiMongodb className="text-4xl text-green-500" />,
              name: "MongoDB",
            },
            {
              icon: <FaDatabase className="text-4xl text-blue-700" />,
              name: "SQL",
            },
            {
              icon: <FaShopify className="text-4xl text-green-600" />,
              name: "Shopify",
            },
            {
              icon: <FaWordpress className="text-4xl text-blue-700" />,
              name: "WordPress",
            },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              style={{ width: "120px", height: "120px" }}
            >
              <div className="flex items-center justify-center h-full">
                {tech.icon}
              </div>
              <span className="text-gray-800 font-medium mt-2 text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-stone-100 py-12 px-6 my-16 rounded-2xl shadow-2xl">
        <section className="my-16">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 wow animate__animated animate__backInDown">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 wow animate__animated animate__backInUp">
            {/* FAQ Item */}
            {[
              {
                question: "What is Full Stack Development?",
                answer:
                  "Full Stack Development involves working on both the front-end and back-end parts of a web application. This includes everything from creating the user interface to managing databases and server-side logic.",
              },
              {
                question:
                  "What technologies do you use for Full Stack Development?",
                answer:
                  "We use a variety of technologies including React.js, Node.js, Express.js, MongoDB, SQL databases, and more. The specific technologies depend on the project requirements and client preferences.",
              },
              {
                question:
                  "Can you integrate third-party APIs into my application?",
                answer:
                  "Yes, we can integrate third-party APIs to add functionality such as payment processing, data fetching, and social media connections to your application.",
              },
              {
                question:
                  "How do you ensure the security of my web application?",
                answer:
                  "We implement best practices for security, including HTTPS, data encryption, secure authentication methods, and regular security audits to protect your application from vulnerabilities.",
              },
              {
                question: "Do you offer custom software development services?",
                answer:
                  "Yes, we offer custom software development tailored to your specific needs. Whether it’s a bespoke web application, e-commerce solution, or enterprise software, we can develop a solution that fits your requirements.",
              },
              {
                question:
                  "What is the difference between front-end and back-end development?",
                answer:
                  "Front-end development focuses on the visual and interactive aspects of a website or application, such as layout and user interface. Back-end development deals with server-side logic, database interactions, and application functionality.",
              },

              {
                question:
                  "Can you help with scaling and optimizing my web application?",
                answer:
                  "Yes, we can assist with scaling your application to handle increased traffic and optimizing its performance for faster load times and better user experience.",
              },
              {
                question:
                  "What kind of support do you offer after the project is completed?",
                answer:
                  "We offer post-launch support including bug fixes, updates, and technical assistance to ensure your application continues to perform well and remains up-to-date.",
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
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 wow animate__animated animate__backInUp">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-8">
          Have a project in mind? Contact us to discuss your requirements.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-bold transition-all duration-300 wow animate__animated animate__backInRight">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FullStackDevelopment;
