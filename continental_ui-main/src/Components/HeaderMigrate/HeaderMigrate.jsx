import React from "react";
import NavBar from "../Header/NavBar";
import globe from "../../assets/HomePage/World.svg";
import search from "../../assets/HomePage/Search Icon.svg";
import bgCircle from "../../assets/HomePage/bgCircle.png";
import booksShelf from "../../assets/HomePage/bookShelf.svg";
import launchRocket from "../../assets/HomePage/Launch.png";
import migrateMainBg from "../../assets/HomePage/migrateMain.png";
import book from "../../assets/HomePage/book.svg";
import cloud from "../../assets/HomePage/cloud.png";
import dateWhite from "../../assets/HomePage/DateIco_white.svg";
import downIcon from "../../assets/HomePage/Down Icon.svg";
import "./HeaderMigrate.css";

const HeaderMigrate = () => {
  return (
    <section className="migrate_head_wrap">
      <NavBar />
      <div className=" hero_section migrate_hero_section">
        <div className="migrate_search ">
          {/* <div className={`abroad_title`}>
            Study Abroad
            <span style={{ marginLeft: "1rem", marginTop: "0.45rem" }}>
              <img src={globe} alt="globe" />
            </span>
          </div> */}
          <div className=" migrate_search_curv">
            <h3 className="">Top Destination</h3>
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

        <div className="migrateMainImage    migrate">
          <img src={migrateMainBg} className="migrate-main" alt="bg-circle" />
          <img src={cloud} className="cloud migrage-cloud" alt="bg-circle" />
          <img src={cloud} className="cloud migrage-cloud" alt="bg-circle" />

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

export default HeaderMigrate;
