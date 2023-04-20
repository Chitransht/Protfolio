import React from "react";
import Aboutsheet from "../components/Aboutsheet";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg heading="About" text="I'm a friendly Front-End Developer" />
      <Aboutsheet />
      <Footer />
    </div>
  );
};

export default About;
