import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../assests/Lovepik_com-450129809-Instagram.png";
import feed from "../../assests/insta-feed.png";
import profile from "../../assests/insta-profile.png";
import userProfile from "../../assests/insta-user-profile.png";
import story from "../../assests/story.png";
import savedItem from "../../assests/insta-saved.png";
import background from "../../assests/1315464.jpg";
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
      className="text-white p-10 bg-gradient-to-br from-pink-400 via-white to-red-800"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <img
          src={logo}
          alt="Instagram Logo"
          className="mx-auto w-24 h-24 opacity-90 filter drop-shadow-2xl animate-pulse hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <h1 className="text-6xl font-extrabold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x wow animate__animated animate__zoomInUp animate__delay-1s">
          Instagram Clone
        </h1>
        <p className="text-2xl mt-4 text-gray-300 wow animate__animated animate__lightSpeedInLeft animate__delay-1s">
          Powered by Spring Boot, React.js, and MySQL
        </p>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full max-w-6xl mx-auto mb-16 shadow-2xl rounded-lg overflow-hidden wow animate__animated animate__zoomInUp">
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
              <div
                key={index}
                className="relative hover:scale-105 transition-transform duration-100 ease-in-out"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full object-cover transition-opacity duration-700 ease-in-out hover:opacity-90"
                />
                <p className="legend bg-gray-900 bg-opacity-70 py-2 px-4 rounded">
                  {
                    ["Feed", "Profile", "User Profile", "Story", "Saved Items"][
                      index
                    ]
                  }
                </p>
              </div>
            )
          )}
        </Carousel>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          { image: feed, title: "Feed" },
          { image: profile, title: "Profile" },
          { image: userProfile, title: "User Profile" },
          { image: story, title: "Story" },
          { image: savedItem, title: "Saved Items" },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-30 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-50 hover:shadow-2xl transition-all duration-500 wow animate__animated animate__bounceInLeft animate__delay-1s"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full rounded-lg mb-4 object-cover hover:opacity-90 transition-opacity duration-500"
            />
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-text-focus-in">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-center">
        <a
          href="your-github-or-live-demo-link"
          className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out"
        >
          Explore Project
        </a>
        <div className="mt-8 space-x-4">
          {["Spring Boot", "React.js", "MySQL"].map((tech, index) => (
            <span
              key={index}
              className="inline-block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
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
