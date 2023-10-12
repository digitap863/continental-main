import React from "react";
import './test.css'

const ContentDescription = ({data,handleScrollToContact}) => {

  return (
    <section className="overseas-sec testBorder">
      <div className="overseas-wrap testBorder">
        <div className="overseas-content testBorder">
          <div className="text-sec ">
            <p className="title">Journey of Excellence</p>
            <h1 className="head">{data?.name}</h1>
            <div className="mobile-image-sec ">
              <img className="mobileimagetest" src={data?.image} alt="graduated girl" />
            </div>
            <p className="desco testBorder">{data?.content}</p>
            <p className="desco">
              Embrace the transformative power of global education with us, and
              let your dreams take flight. Welcome aboard!
            </p>
            <button className="get-start-btn" onClick={handleScrollToContact}> Get Started</button>
          </div>
          <div className="test-prep-image-div">
            <img className="test-prep-image" src={data?.image} alt="graduated girl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentDescription;
