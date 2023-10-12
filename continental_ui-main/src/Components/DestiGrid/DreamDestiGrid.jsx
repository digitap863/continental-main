import React from "react";
import "./DreamDestiGrid.css";
import  { abroadCountries } from "../../Constants/Constants";
import { useNavigate } from "react-router-dom";

const DreamDestiGrid = () => {
  const navigate = useNavigate();
  return (
    <section className="DreamDestiGrid testBorder">
      <div className="dream-dest-wrap testBorder">
        <h4>Top Destination</h4>
        <h1>Explore the Destinations</h1>
        <p>Settle in your dream destination with your dream career</p>
        <div className="desti-grid ">
          {abroadCountries.map((elem, index) => (
            <div
              key={index}
              className="destImages "
              onClick={() => navigate(`${elem.link}`,{state:elem})}
            >
              <img src={elem?.countryimg} alt="countries" />
              <div class="country-name ">
                <h3>{elem?.name}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* <button class="orange-btn">View More</button> */}
      </div>
    </section>
  );
};

export default DreamDestiGrid;
