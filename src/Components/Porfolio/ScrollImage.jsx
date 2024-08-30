import React, { useState, useEffect, useRef } from "react";

// Import images
import img3 from "../../assests/myristicapharmaceutical.png";
import img4 from "../../assests/myritica-products.png";
import img5 from "../../assests/myritica-contact.png";
import img6 from "../../assests/myritica-aboutus.png";
import medicalkit from "../../assests/medicalkit.png";
import logo from "../../assests/imageLogo-1.png";
import laptopimg from "../../assests/laptop-png-6768.png";
import feed from "../../assests/insta-feed.png";
import profile from "../../assests/insta-profile.png";
import userProfile from "../../assests/insta-user-profile.png";
import story from "../../assests/story.png";
import savedItem from "../../assests/insta-saved.png";
import background from "../../assests/1315464.jpg";
import namelogo from "../../assests/Instagram-name-logo-transparent-PNG.png";
import myImage from "../../assests/ZZZZZ2898.jpg";
import CustomeWebsite from "../../assests/custome.jpg";
import UIUx from "../../assests/7706581.jpg";
import responsive from "../../assests/responsive.jpg";
import GraphicDesign from "../../assests/3569186.jpg";
import Redesign from "../../assests/6926521.jpg";
import Brand from "../../assests/Brand.jpeg";

const ScrollImage = () => {
  const containerRef = useRef(null);

  const images = [
    img3,
    img4,
    img5,
    img6,
    medicalkit,
    logo,
    laptopimg,
    feed,
    profile,
    userProfile,
    story,
    savedItem,
    background,
    namelogo,
    myImage,
    CustomeWebsite,
    UIUx,
    responsive,
    GraphicDesign,
    Redesign,
    Brand,
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const containerWidth = containerRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        containerRef.current.style.transform = `translateX(-${scrollY}px)`;

        // Ensure the scroll position doesn't exceed the container width
        if (scrollY > containerWidth - windowWidth) {
          window.scrollTo(0, containerWidth - windowWidth);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="flex absolute top-0 left-0"
        style={{ whiteSpace: "nowrap", width: `${images.length * 100}vw` }} // Ensure container width covers all images
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Scrolling Image ${index}`}
            className="inline-block h-full object-cover"
            style={{ width: "100vw" }} // Each image takes full viewport width
          />
        ))}
      </div>
      <div className="h-screen bg-gray-800"></div>{" "}
      {/* Add some space for scrolling */}
    </div>
  );
};

export default ScrollImage;
