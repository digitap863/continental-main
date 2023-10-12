import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./WhyChooseUs.css";
import leftArrow from "../../assets/HomePage/dest_left_arrow.svg";
import rightArrow from "../../assets/HomePage/dest_right_arrow.svg";
import { studentServices } from "../../Constants/Constants";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate()
  return (
    <section className="WhyChooseUs testBorder">
      <div className="WhyChooseUs-wrap testBorder ">
        <div className="head-part ">
          {/* <p className="title">Steps to Future </p> */}
          <h1 className="head">Why Choose Us</h1>
          <p className="desc">
          Experience personalized services and take your step ahead to advance your career in the best academic institutions across the globe
          </p>
        </div>
        <div className="slider-part ">
          <Swiper
            modules={[Autoplay,Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".choose-button-next1",
              prevEl: ".choose-button-prev1",
              clickable: true,
            }}
            
            speed={2000}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 35,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 35,
              },
              480: { 
                slidesPerView: 2,
                spaceBetween: 35,
              },
            }}
            spaceBetween={15}
            slidesPerView={2}
            centeredSlides={false}
            className="choose-us-slid "
          >
            {studentServices.map((service, idx) => (
              <SwiperSlide className="slider-con " key={idx}  onClick={()=>navigate('/services',{state:service.position})}>
                <div className="services-swiper">
                <img src={service.icon} alt="calender" />
                <h3>{service.title}</h3>
                </div>
                {/* <p>{content}</p> */}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="choose-slid-ctrls testBorder">
            <img
              className="choose-button-prev1 "
              src={leftArrow}
              alt="Previous Button"
            />
            <img
              className="choose-button-next1 "
              src={rightArrow}
              alt="Previous Button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
