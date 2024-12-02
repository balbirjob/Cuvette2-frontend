import "./myprofile.css";
import React from "react";
import arro from "../../assets/profile/arrow-left.png"
import proimage from "../../assets/profile/Ellipse 11.png"
import { useNavigate } from "react-router-dom";

const MyProfile = () => {


  const navigate = useNavigate()
   
    const editBtn =()=>{
      navigate("/edit")
    }


  return (
    <>
      {/* profile image aND HEDING */}


      <div className="profile">

        <div className="pro-heading">
          <div className="hea-1">
            <span>
              <img src={arro} alt="pro-icon" width={20} />
            </span>
          </div>
          <div className="hea-1">
            <h2> My Profile</h2>
          </div>
        </div>

        <div className="pro-heading">
          <div className="hea-2">
            <span>
              <img src={proimage} alt="pro-icon" width={40} />
            </span>
          </div>
          <div className="hea-2">
            <p> My Profile</p>
          </div>
          <div className="hea-2">
            <button className="edit-btn-p" onClick={editBtn}>Edit</button>
          </div>
        </div>
      </div>




      {/* ......form......... */}


      <div className='form-started'>

        <form>
          <div class="form-grid">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Mike Ross" />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="text" placeholder="mikeross@gmail.com" />
            </div>
            <div class="form-group">
              <label>Gender</label>
              <input type="text" placeholder="Male" />
            </div>
            <div class="form-group">
              <label>Country</label>
              <input type="text" placeholder="India" />
            </div>
          </div>
          <hr  className="linehr"/>
        </form>



      </div>

    </>
  );
};

export default MyProfile;