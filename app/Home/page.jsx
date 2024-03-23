import React from "react";
import Nav from "../Components/Nav/Nav";
import Header from "../Sections/Header/Header";
import AboutSection from "../Sections/AboutSection/AboutSection";
import Testimonial from "../Sections/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <AboutSection />
      <Testimonial />
    </div>
  );
};

export default Home;
