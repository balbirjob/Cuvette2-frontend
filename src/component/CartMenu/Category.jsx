import React, { useState } from "react";
import ProductCard from "./ProductCard";
// Import the Cart component
import Cart from "./Cart"; 
import "./Category.css";
import orddis from "../../assets/menu/OrdDis.png";
import vegdis from "../../assets/menu/vdis.png";
import iceoff from "../../assets/menu/ice.png";

const Category = ({ products }) => {
  const [cart, setCart] = useState([]);

  // Function to handle adding products to the cart
  const handleAddToCart = (productDetails) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.title === productDetails.title
      );

      if (existingProductIndex !== -1) {
        // If the product exists, update its quantity and total price
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        updatedCart[existingProductIndex].totalPrice =
          updatedCart[existingProductIndex].quantity *
          updatedCart[existingProductIndex].price;

        return updatedCart;
      } else {
        // If the product is not in the cart, add it as a new item
        const newProduct = {
          ...productDetails,
          quantity: 1,
          totalPrice: productDetails.price, // Initial price is the product price
        };

        return [...prevCart, newProduct];
      }
    });
  };

  // Function to handle removing or decreasing quantity of an item in the cart
  const handleRemoveFromCart = (productTitle) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          if (item.title === productTitle && item.quantity > 1) {
            // Decrease quantity if it's more than 1
            return {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.price * (item.quantity - 1),
            };
          } else if (item.title === productTitle && item.quantity === 1) {
            // Remove the item if quantity is 1
            return null;
          }
          return item;
        })
        .filter(Boolean); // Remove null values from cart if any item has been deleted

      return updatedCart;
    });
  };

  return (
    <>
      {/* // ......Burgers section......... */}

      <div className="category">
        {/* three card */}
        <div className="layout-container">
          {/* Card Section */}
          <div className="card-container">
            <div className="card">
              <img
                src={orddis}
                alt="Card 1"
                className="card-image"
              />
            </div>
            <div className="card">
              <img
                src={vegdis}
                alt="Card 2"
                className="card-image"
              />
            </div>
            <div className="card">
              <img
                src={iceoff}
                alt="Card 3"
                className="card-image"
              />
            </div>
          </div>

          {/* Render Cart Component */}
          <div className="cart-section">
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
          </div>
        </div>

        {/* // ......Burgers section......... */}

        {products.map((category) => (
          <div key={category.category}>
            <h2>{category.category}</h2>
            <div className="product-grid">
              {category.items.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  onAddToCart={handleAddToCart} // Passing the function as a prop
                />
              ))}
            </div>
          </div>
        ))}

       
      </div>
    </>
  );
};

export default Category;

// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import Cart from "./Cart"; // Import the Cart component
// import "./Category.css";
// import orddis from "../../assets/menu/OrdDis.png";
// import vegdis from "../../assets/menu/vdis.png";
// import iceoff from "../../assets/menu/ice.png";

// const Category = ({ products }) => {
//   const [cart, setCart] = useState([]);
//   const [isCartVisible, setCartVisible] = useState(false);

//   // Function to handle adding products to the cart
//   const handleAddToCart = (productDetails) => {
//     setCartVisible(true); // Show the cart when an item is added
//     setCart((prevCart) => {
//       const existingProductIndex = prevCart.findIndex(
//         (item) => item.title === productDetails.title
//       );

//       if (existingProductIndex !== -1) {
//         const updatedCart = [...prevCart];
//         updatedCart[existingProductIndex].quantity += 1;
//         updatedCart[existingProductIndex].totalPrice =
//           updatedCart[existingProductIndex].quantity *
//           updatedCart[existingProductIndex].price;

//         return updatedCart;
//       } else {
//         const newProduct = {
//           ...productDetails,
//           quantity: 1,
//           totalPrice: productDetails.price,
//         };

//         return [...prevCart, newProduct];
//       }
//     });
//   };

//   const handleRemoveFromCart = (productTitle) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart
//         .map((item) => {
//           if (item.title === productTitle && item.quantity > 1) {
//             return {
//               ...item,
//               quantity: item.quantity - 1,
//               totalPrice: item.price * (item.quantity - 1),
//             };
//           } else if (item.title === productTitle && item.quantity === 1) {
//             return null;
//           }
//           return item;
//         })
//         .filter(Boolean);

//       return updatedCart;
//     });
//   };

//   return (
//     <div className="category">
//       <div className="layout-container">
//         {/* Card Section */}
//         <div className="card-container">
//           <div className="card">
//             <img src={orddis} alt="Card 1" className="card-image" />
//           </div>
//           <div className="card">
//             <img src={vegdis} alt="Card 2" className="card-image" />
//           </div>
//           <div className="card">
//             <img src={iceoff} alt="Card 3" className="card-image" />
//           </div>
//         </div>

//         {/* Conditional Render for Cart */}
//         {isCartVisible && (
//           <div className="cart-section">
//             <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
//           </div>
//         )}
//       </div>

//       {/* Product Grid Section */}
//       {products.map((category) => (
//         <div key={category.category}>
//           <h2>{category.category}</h2>
//           <div className="product-grid">
//             {category.items.map((item) => (
//               <ProductCard
//                 key={item.id}
//                 title={item.title}
//                 description={item.description}
//                 price={item.price}
//                 image={item.image}
//                 onAddToCart={handleAddToCart}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Category;
