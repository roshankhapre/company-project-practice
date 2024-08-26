import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const controls = useAnimation();
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (servicesInView) {
      controls.start("visible");
    }
    if (techInView) {
      techControls.start("visible");
    }
  }, [controls, servicesInView, techInView]);

  const cardVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const techVariants = {
    hidden: { opacity: 0, x: "100vw" }, // Move elements off to the right side
    visible: (index) => ({
      opacity: 1,
      x: 0, // Move elements to their original position
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.1,
        ease: "easeOut",
      },
    }),
  };

  const techControls = useAnimation();

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
          <motion.h1
            className="text-4xl font-semibold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Full Stack Development Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Comprehensive, scalable web solutions tailored for your business.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center transition-transform duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </motion.button>
        </div>
      </div>

      {/* What Web Solution Do You Need Section */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Web Solution Do You Need?
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Explore a variety of web development services tailored to meet your
          specific business goals.
        </motion.p>
      </div>

      {/* Services Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        ref={servicesRef}
      >
        {[image1, image2, image3, image4].map((image, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px] transition-transform transform hover:scale-105"
            variants={cardVariants}
            custom={index}
            initial="hidden"
            animate={controls}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", // Add a subtle shadow effect on hover
              transition: { duration: 0.1 },
            }}
          >
            <div className="relative w-full h-60">
              <motion.img
                src={image}
                alt={`Service ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                loading="lazy"
                whileHover={{ scale: 1.1, filter: "brightness(110%)" }} // Increase brightness and scale slightly
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
          </motion.div>
        ))}
      </div>

      {/* Technologies Section */}
      <div className="mt-32" ref={techRef}>
        <motion.h2
          className="text-2xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Technologies We Use
        </motion.h2>
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
            <motion.div
              key={index}
              className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-110 hover:shadow-2xl"
              variants={techVariants}
              custom={index}
              initial="hidden"
              animate={techControls}
            >
              <div className={`text-4xl mb-2 ${tech.color}`}>{tech.icon}</div>
              <p className="text-lg font-medium">{tech.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullStackDevelopment;
