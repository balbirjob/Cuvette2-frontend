import React from 'react'
import Divone from '../header/Deivone' 
import Nav from '../header/Nav'

import Restaurants from '../cart/Restaurants'
import CustomerReviews from '../product/CustomerReviews'
import ProductNav from '../product/ProductNav'
import Shop from '../product/Shop'
import CartMenu from '../CartMenu/CartMenu'
//import barga from "../../assets/product/Rectangle.png"
import barga from "../../assets/product/Rectangle.png"


const Shaurma = () => {
  return (
    <>
    <Divone />
    <Nav/>
    <Shop
        tagline="I'm lovin' it!"
        title="Shaurma1"
        heroImage={{main: barga}}
    
    
    />

    <ProductNav/>

    {/* some file missing */}


    <CartMenu/>
    <CustomerReviews/>
    <Restaurants/>
   
   
   
   
   </>
  )
}

export default Shaurma