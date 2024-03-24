import React from "react";
import Nav from "../Components/Nav/Nav";
import Header from "../Sections/Header/Header";
import AboutSection from "../Sections/AboutSection/AboutSection";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Administration from "../Sections/Administration/Administration";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <AboutSection />
      <Testimonial />
      <Administration />
    </div>
  );
};

export default Home;
