import "./divone.css"
import React from 'react'
import star from "../../assets/header/star.png"

import Location from "../../assets/header/Location.png";
import card from "../../assets/header/Group 59.png";

const Divone = () => {
  return (
    <>
     {/* fist div */}
     <div className="home-1">
        <div className="home-1-1">
          <img src={star} alt="star" className="home-1-1-img" />
          <p className="home-1-1-p">
            Get 5% Off your first order,
            <span className="home-1-1-span">Promo: ORDER5</span>
          </p>
        </div>

        <div className="home-1-2">
          <img src={Location} alt="location" className="home-1-2-img" />
          <p className="home-1-2-p">
            Regent Street, A4, A4201, London{" "}
            <span className="home-1-2-span">Change Location</span>
          </p>
        </div>

        <div>
          <img src={card} alt="card" home-1-2-img2 />
        </div>
      </div>

    
    
    
    </>
  )
}

export default Divone