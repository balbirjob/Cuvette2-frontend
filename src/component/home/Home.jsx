import React from 'react'
//import "../../style/home.css"
import Divone from "../header/Deivone"
import Nav from '../header/Nav'
import ThreeCard from '../cart/ThreeCard'
import SixCard from '../cart/SixCard'
import Restaurants from '../cart/Restaurants'
import Partner from "../webdetails/Partner"
import KnowMore from "../webdetails/Knowmore"
import Last from "../webdetails/Last"
import More from "./More"


const Home = () => {
  return (
   <>
    <Divone />
    <Nav/>
    {/* not completed */}
    <ThreeCard/>
    <SixCard/>
    <Restaurants/>
    <More/>
    <Partner/>
    <KnowMore/>
    <Last/>
    
   
   
   </>
  )
}

export default Home