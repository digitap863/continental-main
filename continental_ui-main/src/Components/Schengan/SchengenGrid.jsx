import React from "react";
import  { SchengenCountries } from "../../Constants/Constants";
import { useNavigate } from "react-router-dom";

const SchengenGrid = () => {
  const navigate = useNavigate();
  return (
    <section className="DreamDestiGrid SchengenGrid testBorder">
      <div className="dream-dest-wrap testBorder">
        <h4>Top Destination</h4>
        <h1>Discover the Schengen</h1>
        <div className="desti-grid schenegen-grid">
          {SchengenCountries.map((elem, index) => (
            <div
              key={index}
              className="destImages schengenImages"
            //   onClick={() => navigate(`${elem.link}`,{state:elem})}
            >
              <img src={elem?.countryimg} alt="countries"  onClick={()=>navigate('/contact',{state:'dummy'})}/>
              <div className="country-name schengencountry-name">
                <h3>{elem?.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchengenGrid;
