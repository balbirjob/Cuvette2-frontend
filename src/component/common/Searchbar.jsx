import React from 'react'
import "../../style/search.css"

const Searchbar = () => {
  return (
    <div className="subscribe-container">
      <input
        type="email"
        placeholder="youremail@gmail.com"
        className="subscribe-input"
      />
      <button className="subscribe-button">Subscribe</button>
    </div>
  )
}

export default Searchbar