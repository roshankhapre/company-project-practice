// ProjectSection.jsx
import React from "react";

const ProjectSection = ({ title, description, image, bgColor, textColor }) => {
  return (
    <div
      className={`py-16 ${bgColor} text-${textColor} flex flex-col items-center`}
    >
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <p className="text-lg mb-6 text-center max-w-3xl">{description}</p>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={image}
          alt={`${title} preview`}
          className="transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
