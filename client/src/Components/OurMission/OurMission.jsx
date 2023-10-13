import React from "react";
import bookHoldGirl from "../../assets/HomePage/bookHoldGirl-min.png";
import "./OurMission.css";

const OurMission = () => {
  return (
    <section className="mission testBorder">
      <div className="mission-wrap testBorder">
        <div className="text-sec ">
          <div>
            <button className="orange-btn">Our Mission</button>
            <p>
            At Continental Overseas, our mission is rooted in transforming dreams into reality. We are dedicated to guiding and empowering students on their path to international education. Our unwavering commitment is to provide comprehensive support, from expert counseling to personalized solutions, ensuring that every student's journey is smooth and successful.
              <br />
              <br />
              With a focus on excellence, diversity, and holistic growth, our mission is to nurture future leaders who are not only equipped with top-notch education but also with a global perspective. We strive to bridge cultures and create opportunities for students to thrive academically, culturally, and personally. Through our tireless efforts, we are dedicated to shaping the next generation of global citizens, instilling in them the values of curiosity, resilience, and the desire to make a positive impact on the world.
            </p>
          </div>
        </div>
        <div className="image-sec">
          <img src={bookHoldGirl} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
