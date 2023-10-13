import React from "react";
import fb from "../../assets/HomePage/fb-icon.svg";
import insta from "../../assets/HomePage/Icon awesome-instagram.svg";
import linkedin from "../../assets/HomePage/Icon awesome-linkedin-in.svg";
import holdings from '../../assets/HomePage/holdinglogo.png'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="testBorder">
      <div className="footer-container testBorder">
        <div className="logo ">
          <p className="subsidiary">A Subsidiary Company of</p>
          <img className="contint_logo" src={holdings} alt="logo" />
          {/* <div className="holdingsdiv">
            <p>A Subsidiary Company of</p>
              <img src={holdings} alt="" />
            </div> */}
          <p className="info_link">enquiry@continentaloverseaseducation.com
          </p>
          <p className="phone">+91 7736211130</p>
          <div className="follow_us ">
            <h4>Follow Us:</h4>
            <a href="https://www.facebook.com/Continental-Overseas-Education-101745543001362">
              <img src={fb} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/continentaloverseaseducation_">
              <img src={insta} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/continental-overseas-education/">
              <img src={linkedin} alt="linkedIn" />
            </a>
          </div>
         
        </div>
        <div className="company ">
          <h1>Company</h1>
          <a href="/about">About Us</a>
          <a href="/contact">Location</a>
          <a href="/contact">Careers</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="resources">
          <h1>Resources</h1>
          <a href="/about">FAQ</a>
          <a href="/blogs">Blog</a>
          <a href="/blogs">News</a>
        </div>
        <div className="support">
          <h1>Support</h1>
          {/* <a href="/about">Refund Policy</a> */}
          <a href="/about">Privacy Policy</a>
          <a href="/about">Term of Use</a>
        </div>
      </div>

      <div className="credits">
        <p>
          © {new Date().getFullYear()} Continental India Pvt. Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
