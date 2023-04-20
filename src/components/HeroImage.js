import React from "react";
import "./HeroImageStyle.css";
import IntroImg from "../images/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} />
      </div>
      <div className="content">
        <p>I Am Tushar Chitransh</p>
        <h1>React Developer.</h1>

        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
