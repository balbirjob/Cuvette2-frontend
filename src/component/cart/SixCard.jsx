import "./sixcard.css";
import React from "react";

import Rectangle13 from "../../assets/cart/Rectangle 13.png"
import Rectangle15 from "../../assets/cart/Rectangle 15.png";
import Rectangle17 from "../../assets/cart/Rectangle 17.png";
import Rectangle19 from "../../assets/cart/Rectangle 19.png";
import Rectangle21 from "../../assets/cart/Rectangle 21.png";
import Rectangle23 from "../../assets/cart/Rectangle 23.png";

const SixCard = () => {
  return (
    <>
      <div className="maindivf">
        <h1>Order.uk Popular Categories 🤩</h1>
        
        <div className="seconddiv">
          <div className="cards">
            <img src={Rectangle13} alt="carsdimage"  className="card-imge"/>
            <div className="cards-footer">
              <h4>Burgers & Fast food</h4>
              <p>21 Restaurants</p>
            </div>
          </div>

          <div className="cards">
            <img src={Rectangle15} alt="cardsimage" className="card-imge"/>

            <div className="cards-footer">
              <h4>Salads</h4>
              <p>32 Restaurants</p>
            </div>
          </div>

          <div className="cards">
            <img src={Rectangle17} alt="cardsimage" className="cards-imge"/>

            <div className="cards-footer">
              <h4>Pasta & Casuals</h4>
              <p>4 Restaurants</p>
            </div>
          </div>

          <div className="cards">
            <img src={Rectangle19} alt="cardimage" className="cards-imge" />

            <div className="cards-footer">
              <h4>Pizza</h4>
              <p>32 Restaurants</p>
            </div>
          </div>

          <div className="cards">
            <img src={Rectangle21} alt="cardimage" className="cards-imge" />
            <div className="cards-footer">
              <h4>Breakfast</h4>
              <p>4 Restaurants</p>
            </div>
          </div>

          <div className="cards">
            <img src={Rectangle23} alt="cardsimage" className="card-imge"/>
            <div className="cards-footer">
              <h4>Soups</h4>
              <p>32 Restaurants</p>
            </div>
          </div>

        </div>


      </div>
    </>
  );
};

export default SixCard;
