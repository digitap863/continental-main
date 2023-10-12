import React from "react";
import HeaderAbout from "../Components/HeaderAbout/HeaderAbout";
import useScrollToTop from "../Hooks/useScrollToTop";
import Overseas from "../Components/Overseas/Overseas";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../Components/Testimonials/Testimonials";
import BlogSection from "../Components/BlogSection/BlogSection";
import Subscription from "../Components/Subscription/Subscription";
import Footer from "../Components/Footer/Footer";
import OurVision from "../Components/OurVision/OurVision";
import OurMission from "../Components/OurMission/OurMission";
import "../global.css";
import gradGirl from "../assets/animatedContent/graduatedGirl.png";
import Spiral from '../assets/animatedContent/spiral.png'
import icons from '../assets/animatedContent/ICON.png'
import { containerStyle } from "../Constants/Constants";

const About = () => {
  useScrollToTop();
  return (
    <div className="mainWrapper">
      <HeaderAbout />
      <section className="overseas-sec testBorder">
      <div className="overseas-wrap testBorder">
        <div className="overseas-content testBorder">
          <div className="text-sec ">
            <h1 className="head">
            About Us
            </h1>
            <div className="mobile-image-sec">
              <img className="" src={gradGirl} alt="graduated girl" />
            </div>
            <p className="desc testBorder" style={containerStyle}>
            Completing over Three Decades , <span>Continental Holdings Inc</span> , an ISO 9001:2015 Certified, Government of India approved International Recruitment Agency with the corporate office located in Cochin has created a remarkable image in the said Overseas Recruitment Industry.With the right focus and the thought to extend the support services to the students and professionals aspiring for higher studies , a subsidiary company was born - <span>Continental Overseas Education!</span>
            <br />
            <br />
            Bound to follow the right ethics,transparency, standardized process, an experienced team of student advisors and strong documentation in place ,representing universities across the globe every student is ensured to get the best services to reach their career goals.
            </p>
          </div>
          <div className="image-sec">
              <img src={Spiral} className="animatedSpiral" alt="" />
              <img src={icons} className="animatedIcon" alt="" />
            <img className="gradgirll" src={gradGirl} alt="graduated girl" />
          </div>
        </div>
      </div>
    </section>
      <WhyChooseUs />
      <OurVision />
      {/* <OurMission /> */}
      <Testimonials />
      <BlogSection />
      <Subscription />
      <Footer />
    </div>
  );
};

export default About;
