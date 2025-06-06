import { useState } from "react";
import leftArrow from "../../assets/images/arrows/arrow-left.png";
import rightArrow from "../../assets/images/arrows/arrow-right.png";
import "./carousel.scss";

const Carousel = ({ pictures = [], animationDuration = 500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [direction, setDirection] = useState("");
  const [animation, setAnimation] = useState(false);

  const handleDirection = (dir) => {
    if (animation || pictures.length <= 1) return;

    const targetIndex =
      dir === "right"
        ? (currentIndex + 1) % pictures.length
        : (currentIndex - 1 + pictures.length) % pictures.length;

    setNextIndex(targetIndex);
    setDirection(dir);
    setAnimation(true);

    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setNextIndex(null);
      setAnimation(false);
    }, animationDuration);
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <img
          src={leftArrow}
          alt="left-arrow"
          className="arrow arrow-left"
          onClick={() => handleDirection("left")}
        />
      )}

      <div className="carousel_viewport">
        <img
          key={currentIndex}
          className="carousel_image current"
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />

        {nextIndex !== null && (
          <img
            key={nextIndex}
            className={`carousel_image incoming slide-from-${direction}`}
            src={pictures[nextIndex]}
            alt={`Slide ${nextIndex + 1}`}
          />
        )}
      </div>

      {pictures.length > 1 && (
        <>
          <div className="carousel_indicator">
            {currentIndex + 1} / {pictures.length}
          </div>

          <img
            src={rightArrow}
            alt="right-arrow"
            className="arrow arrow-right"
            onClick={() => handleDirection("right")}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
