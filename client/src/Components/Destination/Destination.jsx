import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Destination.css";
import leftArrow from "../../assets/HomePage/dest_left_arrow.svg";
import rightArrow from "../../assets/HomePage/dest_right_arrow.svg";
import { useNavigate } from "react-router-dom";
import { abroadCountries } from "../../Constants/Constants";

const Destination = () => {
  const navigate = useNavigate();
  return (
    <section className="destination-sec testBorder">
      <div className="desti-content testBorder">
        {/* <p className="title">Top Destination</p> */}
        <h1 className="heading">Your Dream Destination</h1>
      </div>
      <div className="slider-content testBorder">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Navigation]}
          spaceBetween={35}
          centeredSlides={false}
          speed={2000}
          className="destSwiper testBorder"
          breakpoints={{
            768: {
              slidesPerView: 2.65, // Adjust as needed
            },
            1300: {
              slidesPerView: 3.65, // Adjust as needed
            },
            480: {
              slidesPerView: 3.65, // Adjust as needed
            },          }}
          slidesPerView={2.65}
        >
          {abroadCountries.map((elem, idx) => (
            <SwiperSlide className="country-pic testBorder" key={idx} onClick={()=>navigate(`${elem?.link}`,{state:elem})} >
              <img draggable={false} src={elem?.countryimg} alt="country"/>
              <div className="country-name ">
                <h3>{elem?.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="dest-slider-controls">
          <img
            className="swiper-button-prev"
            src={leftArrow}
            alt="Previous Button"
          />
          <img
            className="swiper-button-next"
            src={rightArrow}
            alt="Previous Button"
          />
        </div>

        {/* <button className="migrate-btn" onClick={() => navigate("/study-abroad")}>
          Study Abroad
        </button> */}
      </div>
    </section>
  );
};

export default Destination;
