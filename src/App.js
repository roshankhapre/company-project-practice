import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import NavbarNew from "./Components/NavbarNew";
import Carousel from "./Components/Carousel";
import AboutUs from "./Components/AboutUs";
import Form from "./Components/Form";
import FullStackDevelopment from "./Components/Services/FullStackDevelopment";
import WebDevelopment from "./Components/Services/WebDevelopment";
import PortfolioNew from "./Components/Porfolio/ProtfolioNew";
import InstagramCloneSection from "./Components/Porfolio/InstagramCloneSection";
import Webdesign from "./Components/Services/Webdesign";
import IPortfolio from "./Components/Porfolio/IPortfolio";
import ScrollImage from "./Components/Porfolio/ScrollImage";

import BlobImage from "./Components/BlobImage";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* Wrap the app with BrowserRouter */}
      <div>
        <NavbarNew />

        <BlobImage />

        <FullStackDevelopment />
        <WebDevelopment />
        <Webdesign />
        <PortfolioNew />
        <InstagramCloneSection />

        <IPortfolio />
      </div>
    </BrowserRouter>
  );
}

export default App;
