import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, description, price, image, onAddToCart }) => {
  const handleAddToCart = () => {
    const productDetails = {
      title,
      price,
      image
    };

    // Send product details to the parent component
    onAddToCart(productDetails);
  };

  return (
    <div className="product-card">
      <div className="product-content">
        <div className="product-text">
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p>
          <span className="product-price">₹{price}</span>
        </div>
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
          <button className="add-button" onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
