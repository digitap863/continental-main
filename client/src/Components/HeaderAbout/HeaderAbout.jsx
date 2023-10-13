import React from "react";
import "./HeaderAbout.css";
import NavBar from "../Header/NavBar";
import globe from "../../assets/HomePage/World.svg";
import search from "../../assets/HomePage/Search Icon.svg";
import bgCircle from "../../assets/HomePage/bgCircle.png";
import booksShelf from "../../assets/HomePage/bookShelf.svg";
import launchRocket from "../../assets/HomePage/Launch.png";
import aboutMainBg from "../../assets/HomePage/aboutMainBg.png";
import book from "../../assets/HomePage/book.svg";
import cloud from "../../assets/HomePage/cloud.png";
import dateWhite from "../../assets/HomePage/DateIco_white.svg";
import downIcon from "../../assets/HomePage/Down Icon.svg";
import HeaderSelect from "../HeaderSelect/HeaderSelect";

const HeaderAbout = () => {
  return (
    <section className="about_head_wrap testBorder">
      <NavBar />
      <div className=" hero_section about_hero_section">
        <div className="about_search ">
          {/* <div className={`abroad_title`}>
            Study Abroad
            <span style={{ marginLeft: "1rem", marginTop: "0.45rem" }}>
              <img src={globe} alt="globe" />
            </span>
          </div> */}
          <div className=" about_search_curv">
            <h3 className="">About Us</h3>
            {/* <button className={`search_part`}>
              <img draggable={false} src={search} />
            </button> */}
          </div>
        </div>

        <div className="bgCircle">
          <img src={bgCircle} className="bg-circle" alt="bg-circle" />
          <img src={launchRocket} className="launchRocket" alt="bg-circle" />
          <img
            src={launchRocket}
            className="smallLaunchRocket"
            alt="bg-circle"
          />
          <img src={book} className="book " alt="bg-circle" />
          <div className="bookShelf ">
            <img src={booksShelf} alt="book" />
          </div>
        </div>

        <div className="aboutMainImage ">
          <img src={aboutMainBg} className="about-main" alt="bg-circle" />
          <img src={cloud} className="cloud " alt="bg-circle" />
          <img src={cloud} className="cloud " alt="bg-circle" />

          {/* <div className={`course_panel `}> */}
            <HeaderSelect />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeaderAbout;
