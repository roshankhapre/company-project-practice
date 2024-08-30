import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import laptopimg from "../../assests/laptop-png-6768.png";
import logo from "../../assests/Lovepik_com-450129809-Instagram.png";
import feed from "../../assests/insta-feed.png";
import profile from "../../assests/insta-profile.png";
import userProfile from "../../assests/insta-user-profile.png";
import story from "../../assests/story.png";
import savedItem from "../../assests/insta-saved.png";
import background from "../../assests/1315464.jpg";
import namelogo from "../../assests/Instagram-name-logo-transparent-PNG.png";
import "animate.css";
import WOW from "wowjs";

const InstagramCloneSection = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div
      className="text-white p-10"
      style={{
        backgroundImage:
          "linear-gradient(to right, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <img
          src={logo}
          alt="Instagram Logo"
          className="mx-auto w-14 h-14 opacity-90 filter drop-shadow-2xl animate-pulse hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <img src={namelogo} className="mt-0 w-36 h-24 mx-auto" />
        <h1 className="text-6xl font-extrabold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-gradient-x wow animate__animated animate__zoomInUp animate__delay-1s">
          Instagram Clone
        </h1>
        <p className="text-xl mt-4 text-gray-200 wow animate__animated animate__lightSpeedInLeft animate__delay-1s max-w-3xl mx-auto">
          Experience the familiar look and feel of Instagram with a twist! Built
          with Spring Boot, React.js, and MySQL, this clone delivers a modern
          user experience with a robust backend.
        </p>
      </div>

      {/* Laptop with Carousel Inside */}
      <div className="relative flex justify-center items-center mb-16">
        <img
          src={laptopimg}
          alt="Laptop"
          className="w-[600px] h-[400px]  relative z-10"
        />

        {/* Adjust the width and height to fit the screen */}
        <div
          className="absolute top-[5%] left-[38%] w-[24%] h-[70%] z-20 overflow-hidden rounded-md"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            boxSizing: "border-box",
          }}
        >
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            transitionTime={500}
            emulateTouch
          >
            {[feed, profile, userProfile, story, savedItem].map(
              (image, index) => (
                <div
                  key={index}
                  className="relative hover:scale-105 transition-transform duration-100 ease-in-out"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-700 ease-in-out hover:opacity-90"
                  />
                </div>
              )
            )}
          </Carousel>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            image: feed,
            title: "Feed",
            description:
              "Browse and interact with posts, just like on Instagram.",
          },
          {
            image: profile,
            title: "Profile",
            description: "View and edit your personal profile with ease.",
          },
          {
            image: userProfile,
            title: "User Profile",
            description: "Explore user profiles and their posts.",
          },
          {
            image: story,
            title: "Story",
            description: "Share and view stories with dynamic content.",
          },
          {
            image: savedItem,
            title: "Saved Items",
            description: "Save and revisit your favorite posts.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-30 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-50 hover:shadow-2xl transition-all duration-500 wow animate__animated animate__fadeInUp animate__delay-1s"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full rounded-lg mb-4 object-cover hover:opacity-90 transition-opacity duration-500"
            />
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="text-center mb-16">
        <blockquote className="text-2xl italic font-semibold text-gray-100 max-w-2xl mx-auto bg-opacity-60 p-6 rounded-lg shadow-lg wow animate__animated animate__fadeInUp animate__delay-1s">
          "In a world where Instagram dominates, our clone offers a refreshing
          perspective with the same features you know and love."
        </blockquote>
      </div>

      {/* Additional Details Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 wow animate__animated animate__fadeInUp animate__delay-1s">
          Key Features
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-200 wow animate__animated animate__fadeInUp ">
          Our Instagram Clone comes packed with features that closely mirror the
          original app, including a fully functional carousel for browsing
          content, interactive story elements, and customizable user profiles.
          Whether you're browsing the feed, exploring profiles, or interacting
          with stories, our clone provides a seamless and engaging experience.
        </p>
      </div>

      {/* Footer Section */}
      <div className="text-center">
        <a
          href="your-github-or-live-demo-link"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out"
        >
          Explore Project
        </a>
        <div className="mt-8 space-x-4">
          {["Spring Boot", "React.js", "MySQL"].map((tech, index) => (
            <span
              key={index}
              className="inline-block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramCloneSection;
