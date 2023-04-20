import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import NavBar from "../components/NavBar";
import Pricecard from "../components/Pricecard";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg heading="PROJECTS" text="Some of my recent Work" />
      <ProjectCard />
      <Pricecard />
      <Footer />
    </div>
  );
};

export default Project;
