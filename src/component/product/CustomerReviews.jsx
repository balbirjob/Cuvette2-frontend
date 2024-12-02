import React , { useState, useEffect } from "react"
import "./customerreview.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../assets/product/scroll.png";
import img2 from "../../assets/product/scroll.png";
import img3 from "../../assets/product/scroll.png";
import img4 from "../../assets/product/scroll.png";
import img5 from "../../assets/product/scroll.png";

// import img from "../../assets/product"

const CustomerReviews = () => {


        
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalImages = images.length;
  const infiniteImages = [...images, ...images]; // Duplicate images for infinite scrolling

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    if (currentIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalImages - 1);
      }, 500); // Matches CSS transition duration
    } else if (currentIndex === infiniteImages.length - 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalImages);
      }, 500);
    } else {
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [currentIndex, infiniteImages.length, totalImages]);

  





  return (

    <>
    <div className="scroll-main">


      <div className="csroll-main-1">
        <div className="hedingScroll">
          <h1>Customer Reviews</h1>
          <div className="btnspace">
            <button className="btnscroll"  onClick={handlePrev}>
              <IoIosArrowBack />
            </button>
            <button className="btnscroll" onClick={handleNext}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>



      <div className="carousel-container">
        
  
        <div className="carousel-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${(currentIndex + 1) * 33.33}%)`,
              transition: isTransitioning ? "transform 0.5s ease" : "none",
            }}  >

            {infiniteImages.map((image, idx) => (
              <div key={idx} className="carousel-item">
                <img src={image} alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
  
        
      </div>

      

      
      
    </div>
    </>

        
  )
}

export default CustomerReviews