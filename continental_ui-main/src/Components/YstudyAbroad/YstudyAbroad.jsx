import React from "react";
import "./YstudyAbroad.css";
import home from "../../assets/HomePage/Home.svg";
import settings from "../../assets/HomePage/Setting.svg";
import discount from "../../assets/HomePage/Discount.png";

const YstudyAbroad = (props) => {
  const { name } = props;
  return (
    <section className="YstudyAbroad  testBorder">
      <div className="studyAbroadWrap testBorder">
        <div className="abroad-text-sec ">
          <p>3 steps for the perfect education</p>
          <h1>Why Study {name ? name : "Abroad"} </h1>
          <h4>
          Why Choose International Education? Discover the enriching opportunities and personal growth that studying abroad can offer.
          </h4>
        </div>
        <div className="grid-sec ">
          <div className="abroad-row ">
            <div className="abroad-column abroad-columnBord  ">
              <img src={home} alt="" />
              <h4>Quality education</h4>
              <p>Exceptional learning experiences that shape futures</p>
            </div>
            <div className="abroad-column abroad-columnBord ">
              <img src={settings} alt="" />
              <h4>
                safe and modern <br /> environments
              </h4>
              <p> 
                Secure and contemporary settings for growth.</p>
            </div>
            <div className="abroad-column ">
              <img src={discount} alt="" />
              <h4>English Taught Courses</h4>
              <p>Instruction in the global language of opportunity</p>
            </div>
          </div>
          <div className="abroad-row">
            <div className="abroad-column abroad-columnBord2 ">
              <img src={home} alt="" />
              <h4>Internship opportunities</h4>
              <p>Real-world experiences for professional growth</p>
            </div>
            <div className="abroad-column abroad-columnBord2 ">
              <img src={settings} alt="" />
              <h4>Schengen VISA </h4>
              <p>Access to seamless travel across Europe's borders.</p>
            </div>
            <div className="abroad-column ">
              <img src={discount} alt="" />
              <h4>Best Price Guarantee</h4>
              <p>Unbeatable value for your educational journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YstudyAbroad;
