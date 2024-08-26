import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img3 from "../../assests/myristicapharmaceutical.png";
import img4 from "../../assests/myritica-products.png";
import img5 from "../../assests/myritica-contact.png";
import img6 from "../../assests/myritica-aboutus.png";
import background from "../../assests/1351187.png";

const PortfolioNew = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers once
    threshold: 0.2, // Adjust this value to trigger earlier or later
  });

  // Trigger the animation when the section comes into view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Define the animation variants for cards with futuristic effects
  const cardVariants = {
    hidden: { opacity: 0, x: "-100vw" }, // Cards start off-screen
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.7,
        ease: "easeOut", // Use a supported easing function
      },
    }),
  };

  return (
    <section
      ref={ref}
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
        <motion.div
          className="w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-60 filter blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-green-400 to-blue-600 rounded-full opacity-50 filter blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        ></motion.div>
      </div>

      {/* Title and Link */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400 animate-gradientShift"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          MYRISTICA PHARMACEUTICALS
        </motion.h1>
        <motion.a
          href="https://myristicapharmaceutical.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline mt-4 block text-lg"
          whileHover={{ scale: 1.1, color: "#4FD1C5" }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition for hover
        >
          www.myristicapharmaceutical.com
        </motion.a>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Side: Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[img3, img4, img5, img6].map((img, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:ring-2 hover:ring-${
                index % 2 === 0 ? "cyan" : "pink"
              }-400 overflow-hidden`}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate={controls}
              whileHover={{
                scale: 1.05, // Slightly enlarge on hover
                transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
              }}
            >
              <motion.img
                src={img}
                alt={`Card ${index}`}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.1, filter: "brightness(120%)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
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
            </motion.div>
          ))}
        </div>

        {/* Right Side: Additional Content or Placeholder */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center">
          <motion.div
            className="w-72 h-72 bg-gradient-to-r from-teal-300 to-blue-500 rounded-full filter blur-lg opacity-70"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioNew;
