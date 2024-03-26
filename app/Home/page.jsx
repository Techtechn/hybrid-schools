import React from "react";
// import Nav from "../Components/Nav/Nav";
import NavTwo from "../Components/NavTwo/NavTwo";
import Header from "../Sections/Header/Header";
import AboutSection from "../Sections/AboutSection/AboutSection";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Administration from "../Sections/Administration/Administration";
import Pricing from "../Sections/Pricing/Pricing";
import Institution from "../Sections/Institution/Institution";
import News from "../Sections/News/News";
import Academic from "../Sections/Academic/Academic";
import Contact from "../Sections/Contact/Contact";

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
      <Institution />
      <News />
      <Academic />
      <Contact />
    </div>
  );
};

export default Home;
