import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../assests/Lovepik_com-450129809-Instagram.png";
import feed from "../../assests/insta-feed.png";
import profile from "../../assests/insta-profile.png";
import userProfile from "../../assests/insta-user-profile.png";
import story from "../../assests/story.png";
import savedItem from "../../assests/insta-saved.png";
import background from "../../assests/1315464.jpg";

const InstagramCloneSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: "-100vw" }, // Start off-screen
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div
      className="text-white p-10 bg-gradient-to-br from-pink-400 via-white to-red-800"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={logo}
          alt="Instagram Logo"
          className="mx-auto w-24 h-24 opacity-90 filter drop-shadow-2xl animate-pulse"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <h1 className="text-6xl font-extrabold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
          Instagram Clone
        </h1>
        <p className="text-2xl mt-4 text-gray-300">
          Powered by Spring Boot, React.js, and MySQL
        </p>
      </motion.div>

      {/* Image Carousel */}
      <motion.div
        className="relative w-full max-w-6xl mx-auto mb-16 shadow-2xl rounded-lg overflow-hidden"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="rounded-lg"
          transitionTime={500}
          emulateTouch
        >
          {[feed, profile, userProfile, story, savedItem].map(
            (image, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full object-cover transition-opacity duration-700 ease-in-out"
                />
                <p className="legend bg-gray-900 bg-opacity-70 py-2 px-4 rounded">
                  {
                    ["Feed", "Profile", "User Profile", "Story", "Saved Items"][
                      index
                    ]
                  }
                </p>
              </motion.div>
            )
          )}
        </Carousel>
      </motion.div>

      {/* Feature Cards Section */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {[
          { image: feed, title: "Feed" },
          { image: profile, title: "Profile" },
          { image: userProfile, title: "User Profile" },
          { image: story, title: "Story" },
          { image: savedItem, title: "Saved Items" },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-30 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-opacity-50 hover:shadow-2xl transition-all duration-500"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.img
              src={feature.image}
              alt={feature.title}
              className="w-full rounded-lg mb-4 object-cover hover:opacity-90 transition-opacity duration-500"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-text-focus-in">
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Footer Section */}
      <motion.div
        className="text-center"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <a
          href="your-github-or-live-demo-link"
          className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-white py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl duration-300 ease-in-out"
        >
          Explore Project
        </a>
        <div className="mt-8 space-x-4 animate-slide-in">
          {["Spring Boot", "React.js", "MySQL"].map((tech, index) => (
            <span
              key={index}
              className="inline-block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default InstagramCloneSection;
