import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// import testiIcon from "../../assets/HomePage/testiIcon.svg";
import leftArrow from "../../assets/HomePage/dest_left_arrow.svg";
import rightArrow from "../../assets/HomePage/dest_right_arrow.svg";
import { containerStyle, testiMonialsArr } from "../../Constants/Constants";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-sec testBorder">
      <div className="testimonials-wrap testBorder">
        <div className="test-head-part testBorder">
          {/* <p className="test-title">what they Say </p> */}
          <h1 className="test-head">Let’s hear from our students</h1>
          <p className="test-desc">
          Read the stories and experiences of our satisfied clients who have achieved their dreams with our guidance. Their testimonials showcase our commitment to excellence and the transformative power of our services.
          </p>
        </div>

        <div className="test-slider-part ">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".testi-button-next1",
              prevEl: ".testi-button-prev1",
              clickable: true,
            }}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 35,
              },
            }}
            speed={2000}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={false}
            className="testi-slid"
          >
            {testiMonialsArr.map(
              ({ img, head, description, author, place }, idx) => (
                <SwiperSlide className="test-slider-con" key={idx}>
                  <div className="msgSlideWrap">
                    <h3>{head}</h3>
                    <p style={containerStyle}>{description}</p>
                  </div>
                  <img src={img} alt="avatar" />
                  <h4>{author}</h4>
                  <h6>{place}</h6>
                </SwiperSlide>
              )
            )}
          </Swiper>

          <div className="test-slider-controls ">
            <img
              className="testi-button-prev1"
              src={leftArrow}
              alt="Previous Button"
            />
            <img
              className="testi-button-next1"
              src={rightArrow}
              alt="Previous Button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
