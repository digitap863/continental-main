import React, { useState } from "react";
import useStickyNav from "../../Hooks/useStickyNav";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/HomePage/logo-min.png";
import flagg from '../../assets/HomePage/europe-flag-small-2.png'
import { CgMenu, CgClose } from "react-icons/cg";
import { SchengenCountries, abroadCountries, studentServices, testprep, valueServices } from "../../Constants/Constants";
import bgimg from '../../assets/HomePage/blog_bg-min.png'
import fb from "../../assets/HomePage/fb-icon.svg";
import insta from "../../assets/HomePage/Icon awesome-instagram.svg";
import twitter from "../../assets/HomePage/Icon awesome-twitter.svg";
import linkedin from "../../assets/HomePage/Icon awesome-linkedin-in.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [migrateDropdownVisible, setMigrateDropdownVisible] = useState(false);
  const [testPrepDropdownVisible, setTestPrepDropdownVisible] = useState(false)
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
  const [schengenDropdownVisible, setSchengenDropdownVisible] = useState(false);
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

  const toggleMigrateDropdown = () => {
    setMigrateDropdownVisible(!migrateDropdownVisible);
  };

  const toggleSchengenDropdown = () => {
    setSchengenDropdownVisible(!schengenDropdownVisible);
  };

  return (
    <nav className={`${isSticky ? "sticky_nav" : "nav_active "} `}>
      <div className='logo' onClick={() => navigate("/")}>
        <img src={logo} alt="logo" draggable={false} className="" />
      </div>

      <div className='links ' style={{ top: postion }}>
        <ul className={`nav_links `}>
          <li className={`list_item`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `lactive_class` : `notactive_class`
              }
            >
              Home
            </NavLink>
          </li>
          <li >
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `lactive_class` : `notactive_class`
              }
            >
              About Us
            </NavLink>
          </li>
          <li
            onMouseEnter={toggleMigrateDropdown}
            onMouseLeave={toggleMigrateDropdown}
          >
            <span className="notactive_class" style={{ fontFamily: "Montserrat,sans-serif", color: "#666571", cursor: "pointer", display: 'flex', alignItems: 'center' }} onClick={() => navigate('/study-abroad')}

            >
              Destinations
              <span style={{ marginTop: '0.5rem' }}>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </span>
            {migrateDropdownVisible && (
              <div
                style={{
                  backgroundImage: `url(${bgimg})`,
                  backgroundSize: "cover",

                  backgroundPosition: "center",
                  minHeight: "45vh",
                  borderRadius: "4px",
                  position: "absolute",
                  left: "33%",
                  minWidth: "18rem",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                  zIndex: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(1, 1fr)",
                  gap: "8px",
                  padding: "10px 20px",
                }}
              >
                {abroadCountries.map((elem) => (
                  <div
                    onClick={() => {
                      navigate(`${elem.link}`, { state: elem })
                      setMigrateDropdownVisible(!migrateDropdownVisible);
                    }}
                    key={elem.name}
                    style={{
                      width: '100%',
                      display: "flex",
                      alignItems: "center",
                      padding: "8px",
                      cursor: "pointer",
                      borderBottom: "1px solid #ccc",
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "orange"; // Change text color on hover
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "black"; // Revert text color after hover
                    }}
                  >
                    {elem.flag ? <span className={`fi fi-${elem.flag}`}></span> : <span><img src={flagg} style={{ width: "1.5rem", height: "1.5rem", objectFit: "cover" }} alt="" /></span>}
                    <span style={{ marginLeft: '5px', fontSize: '1.1rem', fontFamily: "Montserrat,sans-serif", width: '90%' }}>
                      {elem.name}
                    </span>
                    {!elem.flag && (
                      <span
                        //  style={{border:'1px solid #ccc',padding:'0.3rem',borderRadius:'100%'}}
                        onMouseEnter={toggleSchengenDropdown}
                        onMouseLeave={toggleSchengenDropdown}
                      >
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                        {schengenDropdownVisible && (
                          <div
                            style={{
                              backgroundImage: `url(${bgimg})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              minHeight: "45vh",
                              borderRadius: "4px",
                              top: "50%",
                              position: "absolute",
                              left: "80%",
                              minWidth: "30rem",
                              boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                              zIndex: 1,
                              display: "grid",
                              gridTemplateColumns: "repeat(3, 1fr)",
                              gap: "8px",
                              padding: "10px 20px",
                            }}
                          >
                            {/* Render the list of 14 countries here */}
                            {SchengenCountries.map((elem) => (
                              <div
                              // onClick={()=>navigate('/contact',{state:'dummy'})}
                                key={elem.flag}
                                style={{
                                  width: '100%',
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "8px",
                                  cursor: "pointer",
                                  borderBottom: "1px solid #ccc",
                                  color: 'black'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.color = "orange"; // Change text color on hover
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.color = "black"; // Revert text color after hover
                                }}
                              >
                                {elem.flag ? <span className={`fi fi-${elem.flag}`}></span> : <span><img src={flagg} style={{ width: "1.5rem", height: "1.5rem", objectFit: "cover" }} alt="" /></span>}
                                <span style={{ marginLeft: '5px', fontSize: '1rem', fontFamily: "Montserrat,sans-serif", width: '60%' }}>{elem.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setServicesDropdownVisible(true)}
            onMouseLeave={() => setServicesDropdownVisible(false)}
          >
            <span onClick={() => {
              navigate('/services')
              setServicesDropdownVisible(false)
            }}
              style={{
                fontFamily: "Montserrat,sans-serif",
                color: "#666571",
                cursor: "pointer", display: 'flex', alignItems: 'center'
              }}
              className="notactive_class"
            >
              Services
              <span style={{ marginTop: '0.5rem' }}>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </span>
            {servicesDropdownVisible && (

              <div
                style={{
                  backgroundImage: `url(${bgimg})`,
                  backgroundSize: "cover",
                  fontFamily: 'Montserrat',
                  backgroundPosition: "center",
                  minHeight: "45vh",
                  borderRadius: "4px",
                  position: "absolute",
                  left: "45%",
                  minWidth: "520px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                  zIndex: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "8px",
                  padding: "10px 20px",
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', borderRight: "1px solid #ccc" }}>
                  <h5 style={{ textAlign: 'center', borderBottom: "0.5px solid #000", paddingBottom: "0.5rem", marginBottom: "0.5rem" }}>Student Services</h5>
                  {studentServices.map((service) => (
                    <span key={service.id} onClick={() => {
                      navigate("/services", { state: service });
                      setServicesDropdownVisible(false);
                    }} style={{
                      padding: "8px",
                      cursor: "pointer",
                      borderBottom: "0.5px solid #e0dfdd"
                    }} onMouseEnter={(e) => {
                      e.target.style.color = "orange";
                    }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "black";
                      }}>{service.title}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ textAlign: 'center', borderBottom: "0.5px solid #000", paddingBottom: "0.5rem", marginBottom: "0.5rem" }}>Value Added Services</h5>
                  {valueServices.map((service) => (
                    <span key={service.id} onClick={() => {
                      navigate("/services", { state: service });
                      setServicesDropdownVisible(false);
                    }} style={{
                      padding: "8px",
                      cursor: "pointer",
                      borderBottom: "0.5px solid #e0dfdd"
                    }} onMouseEnter={(e) => {
                      e.target.style.color = "orange";
                    }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "black";
                      }}>{service.title}</span>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `lactive_class` : `notactive_class`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className={`connect_links `}>
        <a href="https://www.facebook.com/Continental-Overseas-Education-101745543001362">
              <img src={fb} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/continentaloverseaseducation_">
              <img src={insta} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/continental-overseas-education/">
              <img src={linkedin} alt="linkedIn" />
            </a>
        </div>
        <button onClick={() => navigate('/counselling')} className={`contactBtn `}>Digital Office</button>
      </div>
      {navOpen ? closeIcon : hamIcon}
    </nav>
  );
};

export default NavBar;
