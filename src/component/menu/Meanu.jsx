import React from 'react'
import { products } from "./products";
import Category from "./Category";

const Meanu = () => {
  return (
   
    <div className="App">
      <Category products={products} />
    </div>
    
  )
}

export default Meanu