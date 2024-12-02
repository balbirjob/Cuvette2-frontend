import React from 'react';
import "./partner.css";
import Bvail from "../../assets/webdetails/Bvail.png"
import Avail from "../../assets/webdetails/Avail.png"

const Partner = () => {
  return (
    <div className='partner'>
        <div className="partner-woith">
            <img src={Bvail} alt="partenr-image"  className='partenr-image'/>

        </div>
        <div className="rider">
            <img src={Avail} alt="rider-image" className='rider-image'/>

        </div>

    </div>
  )
}

export default Partner