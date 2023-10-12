import React from "react";
import NavBar from "../Header/NavBar";
import globe from "../../assets/HomePage/World.svg";
import search from "../../assets/HomePage/Search Icon.svg";
import countryMainBg from "../../assets/HomePage/country-min.png";
import dateWhite from "../../assets/HomePage/DateIco_white.svg";
import downIcon from "../../assets/HomePage/Down Icon.svg";
import "./HeaderCountry.css";

const HeaderCountry = (props) => {
  const { name } = props;
  return (
    <section className="country_head_wrap">
      <NavBar />
      <div className=" hero_section country_hero_section">
        <div className="country_search ">
          {/* <div className={`abroad_title`}>
            Study Abroad
            <span style={{ marginLeft: "1rem", marginTop: "0.45rem" }}>
              <img src={globe} alt="globe" />
            </span>
          </div> */}
          <div className=" country_search_curv">
            <h3 className="">{name}</h3>
            {/* <button className={`search_part`}>
              <img draggable={false} src={search} />
            </button> */}
          </div>
        </div>

        <div className="countryMainImage  country">
          <img src={countryMainBg} className="country-main" alt="bg-circle" />

          <div className={`course_panel `}>
            <div className={`select_item `}>
              <p>
                Country{" "}
                <span>
                  <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
                </span>
              </p>
              <select className={`location_select`}>
                <option value="" disabled selected>
                  Select
                </option>
                <option value="New York">Pontianak, USA</option>
                <option value="London">London</option>
              </select>
            </div>
            <div className={`select_item `}>
              <p>
                Stream{" "}
                <span>
                  <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
                </span>
              </p>
              <select className={`location_select`}>
                <option value="" disabled selected>
                  Select
                </option>
                <option value="New York">Pontianak, USA</option>
                <option value="London">London</option>
              </select>
            </div>
            <div className={`select_item `}>
              <p>
                Courses{" "}
                <span>
                  <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
                </span>
              </p>
              <select className={`location_select`}>
                <option value="" disabled selected>
                  Select
                </option>
                <option value="New York">Pontianak, USA</option>
                <option value="London">London</option>
              </select>
            </div>
            <div className={`enroll_btn`}>
              <img src={dateWhite} />
              <p>Enquire Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderCountry;
