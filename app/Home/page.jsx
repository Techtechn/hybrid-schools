import React from "react";
// import Nav from "../Components/Nav/Nav";
import NavTwo from "../Components/NavTwo/NavTwo";
import Header from "../Sections/Header/Header";
import AboutSection from "../Sections/AboutSection/AboutSection";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Administration from "../Sections/Administration/Administration";
import Pricing from "../Sections/Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <NavTwo />
      {/* <Nav /> */}
      <Header />
      <AboutSection />
      <Testimonial />
      <Administration />
      <Pricing />
    </div>
  );
};

export default Home;
