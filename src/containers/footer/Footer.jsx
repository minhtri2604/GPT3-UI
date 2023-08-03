import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
      <div className="request"><p>Request Early Access</p></div>

      <ul className="gpt3__footer-list">
        <li className="gpt3__footer-item larger">
          <img src={logo} />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </li>
        <li className="gpt3__footer-item">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </li>
        <li className="gpt3__footer-item">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </li>{" "}
        <li className="gpt3__footer-item">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>

        </li>{" "}

      </ul>
      <footer>© 2021 GPT-3. All rights reserved.</footer>
    </div>
  );
};

export default Footer;
