import React from "react";
import "./knowmore.css";

import order from"../../assets/webdetails/order-food 1.png"
import food from "../../assets/webdetails/food 1.png"
import getyour from "../../assets/webdetails/order 1.png"

const KnowMore = () => {
  return (
    <>
      <div className="kcontainer">


        <div className="heding-section">
          <h2>Konw more about us!</h2>

          <nav>
            <ul>
              <li>Frequent Questions</li>
              <li>Who we are?</li>
              <li>Partner Program</li>
              <li>Help & Support</li>
            </ul>
          </nav>
        </div>



        

        <div className="main-section">
          <div className="div-one">
            <p className="div-one-p">How does Order.uk work?</p>
            <p>What payment methods are accepted?</p>
            <p>Can I track my order in real-time?</p>
            <p>Are there any special discounts or promotions available?</p>
            <p>Is Order.UK available in my area?</p>
          </div>

          <div className="div-two">
            <div>
              <div className="inerdiv-two">
                <div className="cardx">
                  <h3>Place an order!</h3>
                  <img src={order} alt="order-image" className="order-image" />
                  <p>Place order through our</p>
                  <p className="card-p"> website or Mobile app</p>
                </div>
                <div className="cardx">
                  <h3>Track Progress</h3>
                  <img src={food} alt="food-image" className="food-image"/>

                  <p>Your can track your order</p>
                  <p className="card-p">status with delivery time</p>
                </div>
                <div className="cardx">
                  <h3>Get your Order!</h3>
                  <img src={getyour} alt="getyou-image"  className="getyou-image"/>

                  <p>Receive your order at a</p>
                  <p className="card-p"> lighting fast speed!</p>
                </div>
              </div>


              <div className="footer-p">
                <p>Order.UK simplifies the food ordering process. Browse through
                our diverse menu,</p>
                <p> select your favorite dishes, and proceed to
                checkout. Your delicious meal will be </p>
                <p> on its way to your doorstep in no time!</p>


              </div>

             
               
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowMore;
