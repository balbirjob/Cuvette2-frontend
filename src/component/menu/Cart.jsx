import React from "react";
import "./Cart.css"; // Add your own styles for the cart

const Cart = ({ cart, handleRemoveFromCart }) => {
  // Calculate the total, discount, and delivery fee
  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.totalPrice, 0);
    const discount = 3; // Discount ₹3
    const deliveryFee = 3; // Delivery fee ₹3
    const total = subtotal - discount + deliveryFee;

    return { subtotal, discount, deliveryFee, total };
  };

  const { subtotal, discount, deliveryFee, total } = calculateTotal();

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-details">
              <p>{item.title}</p>
              <p>₹{item.price} x {item.quantity}</p>
              <p>Total: ₹{item.totalPrice}</p>
              <button
                className="delete-button"
                onClick={() => handleRemoveFromCart(item.title)}
              >
                &#10005; {/* Unicode cross mark for delete */}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Displaying Total Calculation */}
      <div className="cart-summary">
        <div className="cart-summary-item">
          <p>Subtotal:</p>
          <p>₹{subtotal}</p>
        </div>
        <div className="cart-summary-item">
          <p>Discount (- ₹3):</p>
          <p>- ₹{discount}</p>
        </div>
        <div className="cart-summary-item">
          <p>Delivery Fee (+ ₹3):</p>
          <p>+ ₹{deliveryFee}</p>
        </div>
        <div className="cart-summary-item">
          <p><strong>Total:</strong></p>
          <p><strong>₹{total}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
