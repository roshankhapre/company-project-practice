import React from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import NavbarNew from "./Components/NavbarNew";

import CurouselNew from "./Components/CurouselNew";
import NewCarousel from "./Components/NewCarousel";
import Example from "./Components/Example";
import Form from "./Components/Form";
import FullStackDevelopment from "./Components/Services/FullStackDevelopment";
import WebDevelopment from "./Components/Services/WebDevelopment";
import Portfolio from "./Components/Porfolio/Portfolio";
import Animations from "./Components/Animations";
import ProtfolioNew from "./Components/Porfolio/ProtfolioNew";
import InstagramCloneSection from "./Components/Porfolio/InstagramCloneSection";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarNew />
      <Carousel />

      <Form />

      <FullStackDevelopment />
      <WebDevelopment />

      <ProtfolioNew />
      <InstagramCloneSection />
      {/* Other content here */}
    </div>
  );
}

export default App;
