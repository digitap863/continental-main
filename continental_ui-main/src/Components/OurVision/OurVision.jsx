import React from "react";
import girlGlobe from "../../assets/HomePage/girlGlobe-min.png";
import "./OurVision.css";
import { containerStyle } from "../../Constants/Constants";

const OurVision = () => {
  return (
    <section className="vision testBorder">
      <div className="vision-wrap testBorder">
        <div className="image-sec ">
          <img src={girlGlobe} alt="" />
        </div>
        <div className="text-sec testBorder">
          <div  className="pillars">
            <button className="orange-btn">Our Three Pillars</button>
            <p style={containerStyle}>
              <span>Our Vision</span> 
              <br />
              Empowering Global Futures: Guiding students worldwide to realize their education aspirations through expert guidance, personalized support, and unwavering commitment to excellence.
              <br />
              <br />
              <span>Our Mission</span>
              <br />
              Striving to be the bridge to global education opportunities, our mission is to provide students with tailored guidance, simplify complex processes, and facilitate seamless transitions for a successful academic journey abroad.
              <br />
              <br />
              <span>Our Motto</span>
              <br />
              Opening Doors to World-Class Education to Embrace Tomorrow and Build a Future to Enrich Life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
