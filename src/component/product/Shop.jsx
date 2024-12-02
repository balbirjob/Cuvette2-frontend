import React from 'react'
import "./shop.css";
import backimg from "../../assets/product/Group.png"
//import barga from "../../assets/product/Rectangle.png"
import bick from "../../assets/product/Motocross.png"
import orde from "../../assets/product/Order Completed.png"

const Shop = ({ tagline, title, heroImage }) => {
  return (
    <>
    <div className="hero-section" style={{ backgroundImage: `url(${backimg})` }}>
     
     
     
     
      <div className="hero-content">
        <p className="hero-tagline">{tagline}</p>
        <h1 className="hero-title">{title}</h1>


        <div className="hero-info">
          <div className="info-item">
            <span><img src={orde} alt="order-icon" /></span>
            <p className='info-item-p'>Minimum Order: 12 GBP</p>
          </div>
          <div className="info-item">
            <span><img src={bick} alt="bick-icon" /></span>
            <p className='info-item-p'>Delivery in 20–25 Minutes</p>
          </div>
        </div>


        <div className="hero-footer">
          <span>Open until 3:00 AM</span>
        </div>
      </div>




       {/* image */}
      <div className="hero-image">
        <img src={heroImage.main} alt="Burger and fries"  className="img-bur"/>
      </div>



    </div>



    </>

  )
}

export default Shop