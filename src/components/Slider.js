import React, { useState } from "react";
import styles from "../styles/slider.module.css";
import { Link } from "react-router-dom";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.slider}>
      <Link to={"/home/1"}>
        <div className={styles["slider-images"]}>
          {images && images.length && (
            <img
              src={images[currentIndex].image}
              alt={`Slide`}
              className={`${styles.sliderImage} ${styles.slide}`}
            />
          )}
        </div>
      </Link>
      <div className={styles["slider-arrows"]}>
        <div className={styles["arrow"]} onClick={goToPrevSlide}>
          {"<"}
        </div>
        <div className={styles["arrow"]} onClick={goToNextSlide}>
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Slider;
