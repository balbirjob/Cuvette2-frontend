import React from 'react'
import "./orderdetails.css"
import arr from "../../assets/orderplace/arrow.png"
import piza from "../../assets/orderplace/piza.png"
// import piza from "../../assets/orderplace"
import map from "../../assets/orderplace/map.png"
import arow from "../../assets/orderplace/ArrowRight.png"
import { useNavigate } from 'react-router-dom'




const OrederDetails = () => {

  const navigate = useNavigate()

  const handaleButtonClik =()=>{
    navigate("/payment")


  }













  return (
    <>
      <div className='ordeDet'>

        {/* heding */}
        <div className='order-heading'>
          <div>
            <span><img src={arr} alt="icon-image" width={20} /></span>
          </div>
          <div>
            <h3>Your Order Details</h3>
          </div>
        </div>



        {/* details */}

        <div className='order-price'>


          <div className='product-price1'>

            {/* three image with name and prics */}
            <div>


              {/* fist item */}
              <div className='item-detatl'>
                <div className='item-details2'>
                  <span><img src={piza} alt="piza-icon" /></span>
                  <span className='prodct-name'>Royal Cheese Burgaer<p className='number'>1x item</p></span>
                </div>
                <div className='item-detia-last1'>₹120</div>
              </div>


              <hr />

              {/* fsecond item */}
              <div className='item-detatl'>
                <div className='item-details2'>
                  <span><img src={piza} alt="piza-icon" /></span>
                  <span className='prodct-name'>Royal Cheese Burgaer<p className='number'>1x item</p></span>
                </div>
                <div className='item-detia-last1'>₹120</div>
              </div>


              <hr />

              {/* third item */}

              <div className='item-detatl'>
                <div className='item-details2'>
                  <span><img src={piza} alt="piza-icon" /></span>
                  <span className='prodct-name'>Royal Cheese Burgaer<p className='number'>1x item</p></span>
                </div>
                <div className='item-detia-last1'>₹120</div>
              </div>



            </div>

            <p className='notes'>Notes</p>
            <input type="text" placeholder='Add order notes' className='noteinput' />


          </div>









          {/* ...........right div...............  */}


          <div className='product-price2'>

            <div className='item-detatl2'>
              <div className='item-details3'>
                <span><img src={map} alt="map-icon" width={60} className='map-icon' /></span>
                <span className='prodct-name2'>Royal Cheese Burgaer<p className='number2'>1x item</p></span>
              </div>
              <div className='item-detia-last'>
                <img src={arow} alt="arro-icon" />
              </div>
            </div>

            <hr />


            <div >
              <div className='subtotal'>
                <p className='itemI'>Items</p>
                <p className='itemP'>220</p>

              </div>
              <div className='subtotal'>
                <p className='itemI'>Sales Tax</p>
                <p className='itemP'>10</p>

              </div>


              <hr />


              <div className='subtotal'>
                <p className='itemI'>Subtotal (3 items)</p>
                <p className='itemP'>10</p>
              </div>
            </div>


            <div className='chobtn'>
              <button className='chobtn-pay' onClick={handaleButtonClik}>Choose Payment method</button>
            </div>







          </div>












        </div>





      </div>


    </>
  )
}

export default OrederDetails