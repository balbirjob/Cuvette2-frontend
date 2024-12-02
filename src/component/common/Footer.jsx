import React from 'react'
import "../../style/footer.css"
import Searchbar from './Searchbar'


// import "../../style/footer.css"
import logo from "../../assets/footer/logo.png"
import appstore from "../../assets/footer/app-store-badges-en 1.png"
import fb from "../../assets/footer/Facebook.png"
import ins from "../../assets/footer/Instagram.png"
import tik from "../../assets/footer/TikTok.png"
import snap from "../../assets/footer/Snapchat.png"

const Footer = () => {
  return (
    <div className="footerheader">

      <div className="footercontaint">
        {/* first part */}
        <div>
          <div>
            <img src={logo} className='logimg' alt="logoimage" width={250} />
          </div>
          <div>
            <img src={appstore} className='appstore' alt="imageaapandplaystore"  width={300}/>
          </div>
          <p className='add'>Company # 490039-445, Registered with</p>
          <p>House of companies.</p>
        </div>

        {/* second part */}
        <div className='second-div'>
          <h3 className='scond-heding'>Get Exclusive Deals in your Inbox</h3>
          <Searchbar className="search"/>
          <p className='second-p'>we wont spam, read our <u>email policy</u></p>
          <img src={fb} className="second-img" alt="facebook" />
          <img src={ins} className="second-img"  alt="instagram" />
          <img src={tik} className="second-img"   alt="tiktok" />
          <img src={snap} className="second-img"  alt="snapchat" />
        </div>

        {/* third part */}

        <div className='third-div'>
          <h3 className='third-heding'>Legal Pages</h3>
          <p className='third-p'><u>Terms and conditions</u></p>
          <p className='third-p'><u>Privacy</u></p>
          <p className='third-p'><u>Cookies</u></p>
          <p className='third-p'><u>Modern Slavery Statement</u></p>
        </div>

        {/* fourth part */}
        <div className='fourth-div'>
          <h3 className='fourth-heding'>Important Links</h3>
          <p className='fourt-p'><u>Get help</u></p>
          <p className='fourt-p'><u>Add your restaurant</u></p>
          <p className='fourt-p'><u>Sign up to deliver</u></p>
          <p className='fourt-p'><u>Create a business account</u></p>

        </div>

      </div>






     {/* copyright section */}
      <div className="footerend">
        <div>Order.uk Copyright 2024, All Rights Reserved.</div>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Pricing </li>
          <li>Do not sell or share my personal information</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer