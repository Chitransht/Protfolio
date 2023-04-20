import React from "react";
import { Link } from "react-router-dom";
import "./Aboutsheetstyle.css";
import react1 from "../images/react1.jpg"
import react2 from "../images/react2.png"

const Aboutsheet = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I'm a react front-end developer. I create responsive secure website
          for my clients
        </p>
        <Link to="/contact"> 
        <button className="btn">Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={react1} alt="true" className="img" />
                
            </div>
            <div className="img-stack bottom">
            <img src={react2} alt="true" className="img"/>
                
            </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutsheet;
