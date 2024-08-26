import React from "react";
import portfoliobackground from "../../assests/portfoliobackground.png";

const PortfolioHero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${portfoliobackground})` }}
    >
      <h1 className="text-white text-6xl font-bold uppercase animate-pulse">
        Portfolio
      </h1>
    </div>
  );
};

export default PortfolioHero;
