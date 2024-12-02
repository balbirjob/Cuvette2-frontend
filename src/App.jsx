import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Login from './component/frontpage/Login'
import Signup from './component/frontpage/Signup'
import Footer from './component/common/Footer'
import Home from './component/home/Home'
import Product from "./component/product/Product"
import Checkout from "./component/order/Checkout"
import Address from "./component/order/Address"
import Profile from "./component/profile/Profile"
import OrderSuccess from "./component/payment/OrderSuccess"
import Payment from "./component/payment/Payment"
import EditProfile from "./component/profile/EditProfile"
import CardProduct from './component/CardProduct/CardProduct'
import Burger from './component/CardProduct/Burger'
import Kfc from './component/CardProduct/Kfc'
import Shaurma from './component/CardProduct/Shaurma'
import Texas from './component/CardProduct/Texas'
import PapaJohns from './component/CardProduct/PapaJohns'


function App() {


  return (
    <>
      {/* <Login/> */}
      {/* <Signup/> */} 


      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home  />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home  />} />


          {/*product card */}
          <Route path="/macdonal" element={<CardProduct />} />
          
          <Route path="/burger" element={<Burger/>} />
          <Route path="/kfc" element={<Kfc/>} />
          <Route path="/shaurma" element={<Shaurma  />} />
          <Route path="/texas" element={<Texas/>} />
          <Route path="/papaj" element={<PapaJohns/>} />
            {/*product card ...........*/}


          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment  />} />
          <Route path="/order" element={<OrderSuccess />} />

          
          <Route path="/address" element={<Address  />} />
          <Route path="/profile" element={<Profile  />} />
          <Route path="/edit" element={<EditProfile/>} />
          





          <Route path="/product" element={<Product  />} />


         

         



        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
