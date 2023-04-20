import React from "react";
import "./FooterStyle.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>40 Haldhar Mahato colony</p>
              <p>Jamshedpur</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              9835565347
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              tusharchitransh02@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I am working as a Frontend Developer in Wipro. I have moved from
            support to Developer role by studing from youtube and udemy. Working
            Hard to make a good Career.
          </p>
        
        <div className="social">
          <FaFacebook
            size={30}
            style={{ color: "white", marginRight: "1rem" }}
          />
          <FaTwitter
            size={30}
            style={{ color: "white", marginRight: "1rem" }}
          />
          <FaLinkedin
            size={30}
            style={{ color: "white", marginRight: "1rem" }}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
