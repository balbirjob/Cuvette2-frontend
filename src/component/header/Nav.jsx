
import React from 'react'
import logo from "../../assets/header/logo.png"
import { TfiUser } from "react-icons/tfi";
import "./nav.css"
import { useNavigate } from 'react-router-dom';

const Nav = () => {

  const navigate = useNavigate()

  const backhome =()=>{
    navigate("/home")

  }

  const proFile =()=>{
    navigate("/profile")
  }




  return (
    <>
    <div className="home-2">
        <div className="home-2-img">
            <img src={logo} alt="logo" className=" home-2-log" />

        </div>
        <nav>
            <ul>
                <li onClick={backhome}>Home</li>
                <li>Browse Menu</li>
                <li>Special Offers</li>
                <li>Restaurants</li>
                <li>Track Order</li>
            </ul>
        </nav>
        
        <button className="home-2-butn" onClick={proFile}><TfiUser className='icon-btn' />  Login/Signup</button>
       
      </div>
    
    </>
  )
}

export default Nav