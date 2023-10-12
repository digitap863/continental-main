import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "./OurExperience.css";
import overSeasImg from "../../assets/HomePage/overseasImg.png";
import { associatedUniversities } from "../../Constants/Constants";


const OurExperience = () => {
  return (
    <section className="our-experience testBorder">
      <div className="exp-wrap testBorder">
        <div className="exp-content testBorder">
          <div className="img-sec testBorder">
            <img
              className="overSeasImg"
              src={overSeasImg}
              alt="overseas"
            />
          </div>
          <div className="counter-sec testBorder">
            <p className="title">OUR EXPERIENCE</p>
            <h1 className="head">
              Explore Our Fraternity
            </h1>
            <h6 className="head-mob">Your Most Reliable Overseas Partner</h6>
            <p className="desc">
              We have the best ala carte of academic institutions across the globe to help you explore your career and desired country turning your aspirations to reality
            </p>

            <div className="mob-exp-img-sec ">
              <img
                className="overSeasImg"
                src={overSeasImg}
                alt="overseas"
              />
            </div>
            <div className="counter-part testBorder">
              <div className="countries border testBorder">
                <h1>30+</h1>
                <p>Countries</p>
              </div>
              <div className="universities border testBorder">
                <h1>460+</h1>
                <p>Universities</p>
              </div>
              <div className="admissions testBorder">
                {/* <h1>50K+</h1> */}
                {/* <p>Global Admissions</p> */}
              </div>
            </div>
            <div className="university-swiper">
              <Swiper
                modules={[Autoplay,Navigation]}
                autoplay={{
                  delay:0,
                  disableOnInteraction: false,
                }}
                speed={1200}
                spaceBetween={50}
                slidesPerView={5}
                breakpoints={{
                  1024: {
                    slidesPerView: 7,
                    spaceBetween: 35,
                  },
                }}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {associatedUniversities.map((elem) => (
                  <SwiperSlide><div className="slider-container">
                    <img src={elem?.image} alt="" />
                  </div></SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
