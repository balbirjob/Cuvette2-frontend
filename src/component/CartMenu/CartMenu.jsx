import React from 'react'
import { products } from "./products";
import Category from "./Category";

const CartMenu = () => {
  return (
   
    <div className="App">
      <Category products={products} />
    </div>
    
  )
}

export default CartMenu