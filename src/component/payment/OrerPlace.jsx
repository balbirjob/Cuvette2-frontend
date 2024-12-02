import React from 'react'
import "./orderplace.css"
import Icon from "../../assets/orderplace/Icon.png"
import { useNavigate } from 'react-router-dom'



const OrerPlace = () => {

    const navigate = useNavigate()

     const backhome =()=>{
        navigate("/home")

  }




    return (
        <>
        <div className='order-main'>
            <div className="order-container">
                {/* Checkmark Icon */}
                <div className="checkmark">
                    <div className="circle">
                        <span className="check"><img src={Icon} alt="orderplace-icon"  width={150}/></span>
                    </div>
                </div>

                {/* Success Message */}
                <h1>Order Placed Successfully</h1>
                <p>
                    Your order is confirmed and on its way. Get set to savor your chosen delights!
                </p>

                {/* Order Summary */}
                <div className="order-summary">
                    <p>Royal Cheese Burger</p>
                    <p>Potato Veggies</p>
                    <p>Coke Coca Cola</p>

                      {/* Back to Home Button */}
                <button className="back-button" onClick={backhome}>Back to Home</button>
                </div>

              
            </div>
            </div>    


        </>
    )
}

export default OrerPlace