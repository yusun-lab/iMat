import React from "react";
import "./Footer.css";
import {
  assets,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
} from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>We make food ordering simple and enjoyable for everyone.</p>
          <div className="footer-social-icons">
            <YoutubeIcon className="youtube-icon" />
            <TwitterIcon className="twitter-icon" />
            <InstagramIcon className="instagram-icon" />
            <FacebookIcon className="facebook-icon" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            {/* <li>Home</li> */}
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>tel.: +46123456789</li>
            <li>email: contact@imat.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © imat.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
