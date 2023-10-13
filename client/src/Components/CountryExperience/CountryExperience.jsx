import React from "react";
import countryExpImage from "../../assets/HomePage/country-exp-image-min.png";
import "./CountryExperience.css";
import Spiral from '../../assets/animatedContent/spiral.png'
import icons from '../../assets/animatedContent/ICON.png'
import { containerStyle } from "../../Constants/Constants";

const CountryExperience = ({ data }) => {

  return (
    <section className="countryExp testBorder">
      <div className="country-expWrap testBorder">
        <div className="country-image">
          <img src={Spiral} className="animspr" alt="" />
          <img src={icons} className="animic" alt="" />
          <img src={data.countryimg} alt="" className="countryimg" />
        </div>
        <div className="country-text-sec ">
          <h3>OUR EXPERIENCE</h3>
          <h1>
            Studying in <br /> {data?.name} !
          </h1>
          <h6>
            Studying in {data?.name} !
          </h6>
          <p style={containerStyle}>{data?.exp1}<br /> <br />{data?.exp2}</p>

        </div>
      </div>
    </section>
  );
};

export default CountryExperience;
