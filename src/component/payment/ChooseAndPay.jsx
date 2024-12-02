import React from 'react'
import "./choseandpay.css"
import wallet from "../../assets/ChooseAndPay/wallet.png"
import arrow1 from "../../assets/ChooseAndPay/arrow-left.png"
import Add from "../../assets/ChooseAndPay/Add.png"
import Vector from "../../assets/ChooseAndPay/Vector.png"
import meshu from "../../assets/ChooseAndPay/Sociai3.png"
import Radio from "../../assets/ChooseAndPay/Radio.png"
import paypal from "../../assets/ChooseAndPay/Social4.png"
import stripe from "../../assets/ChooseAndPay/Social2.png"
import { useNavigate } from 'react-router-dom'



const ChooseAndPay = () => {


    const navigate = useNavigate()

     const orderSuccessbtn =()=>{
        navigate("/order")
        }






    return (
        <>
            <div className="container">
                {/* Left Section */}


                <div className="payment-options">
            
            
            
            
                    {/* heading */}
                    <div className="pay-heading">
                        <div className="hea-1">
                            <span>
                                <img src={arrow1} alt="pro-icon" width={20} />
                            </span>
                        </div>
                        <div className="hea-1">
                            <h2>Choose and Pay</h2>
                        </div>
                    </div>




                    {/* payment option */}

                    <div className='p-option'>

                        {/*add wallete  */}
                       
                        <div className='Add-button'>
                            <img src={wallet} alt="Addicon" />
                            <span className='last-s'>Wallet₹</span>
                        </div>

                        <div  className='iconsecond'>
                            <img src={Vector} alt="divlast" />
                        </div>

                  

                    </div>



                     {/* ................................. */}
                    <hr  className='wall-hr'/>
                    
                     

                    {/* MaesutroKard */}
                    <div className='p-option'>
                        <div className='Add-button'>
                            <img src={meshu} alt="Addicon" />
                            <span className='last-s'>MaesutroKard</span>
                        </div>

                        <div  className='iconsecond'>
                            <img src={Radio} alt="divlast" />
                        </div>

                    </div> 


                      {/* ................................. */}






                    {/* Paypal */}
                    <div className='p-option'>
                        <div className='Add-button'>
                            <img src={paypal} alt="Addicon" />
                            <span className='last-s'>Paypal</span>
                        </div>
                        <div  className='iconsecond'>
                            <img src={Radio} alt="divlast" />
                        </div>







                    </div>
                    {/* Stripe */}
                    <div className='p-option'>
                        <div className='Add-button'>
                            <img src={stripe} alt="Addicon" />
                            <span className='last-s'>Stripe</span>
                        </div>
                        <div className='iconsecond'>
                            <img src={Radio} alt="divlast"/>
                        </div>







                    </div>

                    {/* Ddd debit card */}
                    <div className='p-option'>
                        <div className='Add-button'>
                            <img src={Add} alt="Addicon" />
                            <span className='last-s'>Add Debit Card</span>
                        </div>

                    </div>









                </div>








                {/* Right Section */}
                <div className="payment-summary">
                    <div className='right-iner'>
                        <p>Amount to be payed</p>
                        <h3>₹240</h3>
                    </div>

                    <hr className='hrtag' />
                    <button className="ps-btn"  onClick={orderSuccessbtn}>Proceed Payment</button>
                </div>
            </div>

        </>
    )
}

export default ChooseAndPay