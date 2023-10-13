import React, { useState } from "react";
import useStickyNav from "../../Hooks/useStickyNav";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/HomePage/logo-min.png";
import { CgMenu, CgClose } from "react-icons/cg";
import {  testprep } from "../../Constants/Constants";

const TestNav = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const isSticky = useStickyNav();
  const [postion, setPosition] = useState("-100vh");
  const hamIcon = (
    <CgMenu
      className="mob-hamburger"
      size={35}
      onClick={() => {
        setNavOpen(!navOpen);
        setPosition("3.8rem");
      }}
    />
  );

  const closeIcon = (
    <CgClose
      className="mob-hamburger"
      size={35}
      onClick={() => {
        setNavOpen(!navOpen);
        setPosition("-100vh");
      }}
    />
  );

  return (
    <nav className={`${isSticky ? "sticky_nav" : "nav_active "} `}>
      <div className={`logo`} onClick={() => navigate("/")} style={{width:"12rem"}}>
        <img src={logo} alt="logo" draggable={false} />
      </div>

      <div className='links  testlinks' style={{ top: postion}}>
        <ul className={`nav_links `}>
          <li className={`list_item`} style={{ borderRight: "1px solid black", paddingRight: "10px" }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `lactive_class` : `notactive_class`
              }
            >
              Home
            </NavLink>
          </li>
          {testprep.map((elem) => (
                  <li  style={{ borderRight: "1px solid black", paddingRight: "10px" }} onClick={()=>navigate('/testpreperation',{state:elem})}>
                  <span
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      color: "#666571",
                      cursor: "pointer",
                    }}
                    className="notactive_class"
                  >
                    {elem.name}
                  </span>
                </li>
                ))}   
        </ul>

        <button onClick={()=>navigate('/counselling')} className={`contactBtn `}>Digital Office</button>
      </div>
      {navOpen ? closeIcon : hamIcon}
    </nav>
  );
};

export default TestNav;
