import "./threecard.css";
import React from "react";

import off from "../../assets/cart/threecard.png"

//import off from "../assets/home-page/threecard.png";
import Group9 from "../../assets/cart/Group 9.png";
import Group8 from "../../assets/cart/Group 8.png";
import Group12 from "../../assets/cart/Group 12.png";



const ThreeCard = () => {
  return (
    <>
      <div className="maindiv">
        <div className="fistdiv">
          <div className="imgediv">
            <img src={off} alt="imge" className="baner-img" />
          </div>
          <nav>
            <ul>
              <li>Vegan</li>
              <li>Sushi</li>
              <li>Pizza & Fast food</li>
              <li>Others</li>
            </ul>
          </nav>
        </div>

        {/* ................. */}

        <div className="seconddiv">
          <div className="card">
            <img src={Group9} alt="cardimage"   className="fstcard"/>
           
          </div>
          <div className="card">
          <img src={Group8} alt="cardimage" className="stcard" />
          </div>
          <div className="card">
          <img src={Group12} alt="cardimage" className="ttcard"/>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeCard;
