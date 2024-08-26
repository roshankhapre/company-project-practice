import React, { useEffect } from "react";
import PortfolioHero from "./PortfolioHero";
import ProjectSection from "./ProjectSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your project images
import myriticaImage from "../../assests/myristicapharmaceutical.png";
import foodDeliveryImage from "../../assests/food-delivery.png";
import ecommerceImage from "../../assests/ecommerce.png";
import instagramCloneImage from "../../assests/instagram-clone.png";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".project-section");
    console.log("Sections:", sections);

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <PortfolioHero />
      <ProjectSection
        title="Myritica Pharmaceutical"
        description="A modern pharmacy store website with a user-friendly interface, focusing on health and wellness."
        image={myriticaImage}
        bgColor="bg-blue-200"
        textColor="black"
        className="project-section"
      />
      <ProjectSection
        title="Food Delivery Website"
        description="A vibrant and dynamic website for food delivery, featuring easy navigation and mouth-watering visuals."
        image={foodDeliveryImage}
        bgColor="bg-yellow-200"
        textColor="black"
        className="project-section"
      />
      <ProjectSection
        title="E-commerce Shopping Website"
        description="A sleek and modern e-commerce platform with intuitive design and seamless user experience."
        image={ecommerceImage}
        bgColor="bg-green-200"
        textColor="black"
        className="project-section"
      />
      <ProjectSection
        title="Instagram Clone"
        description="A clone of the popular Instagram social media platform, showcasing advanced UI/UX design."
        image={instagramCloneImage}
        bgColor="bg-pink-200"
        textColor="black"
        className="project-section"
      />
    </div>
  );
};

export default Portfolio;
