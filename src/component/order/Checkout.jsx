import React from 'react'
import "./checkout.css"
import Divone from "../header/Deivone"
import Nav from '../header/Nav'
import Restaurants from '../cart/Restaurants'
import  OrederDetails from "./OrederDetails"

const Checkout = () => {
  return (
    <>
    <Divone />
    <Nav/>
    <OrederDetails/>
    <Restaurants/>
    </>
  )
}

export default Checkout