import React from 'react'
import "./restaurants.css"

import Rectangle13 from "../../assets/cart/Group 16.png";
import Rectangle15 from "../../assets/cart/Group 17.png";
import Rectangle17 from "../../assets/cart/Group 18.png";
import Rectangle19 from "../../assets/cart/Group 19.png";
import Rectangle21 from "../../assets/cart/Group 20.png";
import Rectangle23 from "../../assets/cart/Group 21.png";
import {useNavigate } from 'react-router-dom';

const Restaurants = () => {

   const navigate = useNavigate()


  const mcDonals = ()=>{
    navigate('/macdonal');
  }
  const papajohns =()=>{
    navigate("/papaj")
  }
  const kfcKFC =()=>{
    navigate("/kfc")
  }
  const texasChicken =()=>{
    navigate("/texas")
  }
  const burKing =()=>{
    navigate("/burger")
  }
  const shaurma =()=>{
    navigate("/shaurma")
  }






  return (
    <>
      <div className="Rmaindivf">
        <h1>Popular Restaurants</h1>
        <div className="Rseconddiv">
          <div className="Rcard">
            <img src={Rectangle13} alt="cardimage" onClick={mcDonals} className="Rcard-imge"/>
            
          </div>
          <div className="Rcard">
            <img src={Rectangle15} alt="cardimage"  onClick={papajohns} className="Rcard-imge"/>

            
          </div>
          <div className="Rcard">
            <img src={Rectangle17} alt="cardimage"   onClick={kfcKFC} className="Rcard-imge"/>

            
          </div>
          <div className="Rcard">
            <img src={Rectangle19} alt="cardimage"   onClick={texasChicken} className="Rcard-imge" />

            
          </div>
          <div className="Rcard">
            <img src={Rectangle21} alt="cardimage"   onClick={burKing} className="Rcard-imge" />
            
          </div>
          <div className="Rcard">
            <img src={Rectangle23} alt="cardimage"   onClick={shaurma} className="Rcard-imge"/>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Restaurants