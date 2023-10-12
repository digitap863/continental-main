import React from "react";
import edusysImg from "../../assets/HomePage/edusysImg-min.png";
import "./EducationSystem.css";
import { containerStyle } from "../../Constants/Constants";

const EducationSystem = ({data}) => {
  return (
    <section className="education-sys testBorder">
      <div className="education-wrap testBorder">
        <div className="eduSys-text testBorder">
          <h3>OUR EXPERIENCE</h3>
          <h1>
            Education System <br /> in {data?.name}
          </h1>
          <p style={containerStyle}>{data?.edu1}<br />
            <br />{data?.edu2}</p>
        </div>
        <div className="eduSys-Img ">
          <img src={edusysImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default EducationSystem;
