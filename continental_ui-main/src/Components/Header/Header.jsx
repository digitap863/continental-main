import React, { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import dateWhite from "../../assets/HomePage/DateIco_white.svg";
import downIcon from "../../assets/HomePage/Down Icon.svg";
import globeTransp from "../../assets/HomePage/transparentGlobe.png";
import ladyGlobe from "../../assets/HomePage/flying-student-min.png";
import heroCircle from "../../assets/HomePage/homeHero-circle-min.png";
import { gsap } from "gsap";
import "./Header.css";
import NavBar from "./NavBar";
import HeaderSelect from "../HeaderSelect/HeaderSelect";

const Header = () => {
  const rotateImage = () => {
    gsap.to(".rotate-globe", {
      rotation: 360 * 4,
      repeat: -1,
      duration: 70, //  duration of the first rotation
      ease: "none",
    });
  };

  const pulseGirl = () => {
    const t1 = gsap.timeline();
    t1.to(".ladyGlobe", {
      x: "-=10",
      y: "-=20",
      rotationZ: "-=1.5",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  };

  const pulseHeroText = () => {
    const duration = 3;
    const scale = 0.96;
    gsap.to(".heroCircleText", {
      scale: scale,
      duration: duration / 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  };

  useEffect(() => {
    rotateImage();
    pulseGirl();
    pulseHeroText();
  }, []);
  return (
    <section className={`header_wrap testBorder`}>
      <NavBar />
      <div className={`hero_section  testBorder`}>
        <div className={`hero_content testBorder`}>

       <div className="floatingbutton">
       </div>

          <div className={`circle_text testBorder`}>
            <p>
              “Study & Explore <br /> The World”
            </p>
          </div>

          <div className="heroCircleText testBorder">
            <img src={heroCircle} alt="circle-background" />
          </div>

          <div className="ladyGlobe ">
            <img src={ladyGlobe} alt="" />
          </div>

          <div className="globe-container ">
            <img
              src={globeTransp}
              className="rotate-globe"
              alt="globe-transparent"
            />
          </div>
        </div>

        {/* <div className={`course_panel testBorder`}>
          <div className={`select_item testBorder`}>
            <p>
              Country{" "}
              <span>
                <img
                  src={downIcon}
                  alt="down-icon"
                  style={{ marginBottom: "0.3rem" }}
                />
              </span>
            </p>
            <select
              className={`location_select testBorder`}
              defaultValue={"select"}
            >
              <option value="select" disabled>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`select_item testBorder`}>
            <p>
              Stream{" "}
              <span>
                <img
                  src={downIcon}
                  alt="down-icon"
                  style={{ marginBottom: "0.3rem" }}
                />
              </span>
            </p>
            <select
              className={`location_select testBorder`}
              defaultValue={"select"}
            >
              <option value="select" disabled>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`select_item testBorder`}>
            <p>
              Courses{" "}
              <span>
                <img
                  src={downIcon}
                  alt="down-icon"
                  style={{ marginBottom: "0.3rem" }}
                />
              </span>
            </p>
            <select className={`location_select`} defaultValue={"select"}>
              <option value="select" disabled>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`enroll_btn`}>
            <img src={dateWhite} alt="date" />
            <p>Enquire Now</p>
          </div>
        </div> */}
        <HeaderSelect/>
      </div>
    </section>
  );
};

export default Header;
