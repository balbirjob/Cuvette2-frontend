import React from 'react'
import Divone from "../header/Deivone"
import Nav from '../header/Nav'
import Restaurants from '../cart/Restaurants'
import CustomerReviews from './CustomerReviews'
import ProductNav from './ProductNav'
import Shop from './Shop'
import barga from "../../assets/product/Rectangle.png"
import Meanu from '../menu/Meanu'


const Product = () => {
  return (
    <>
     <Divone />
     <Nav/>
     <Shop  
         tagline="I'm lovin' it!"
         title="McDonald's East London"
         heroImage={{main: barga}}

     
     
     />

     <ProductNav/>

     {/* some file missing */}


     < Meanu/>
     <CustomerReviews/>
     <Restaurants/>
    
    
    
    
    </>
  )
}

export default Product