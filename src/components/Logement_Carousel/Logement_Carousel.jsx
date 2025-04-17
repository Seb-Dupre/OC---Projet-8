import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logement from "../../logements.json";
import leftArrow from "../../assets/images/arrows/arrow-left.png";
import rightArrow from "../../assets/images/arrows/arrow-right.png";
import "./Logement_Carousel.scss";

const LogementCarousel = () => {
  const { id } = useParams();
  const carousel = logement.find((data) => data.id === id);
  const total = carousel.pictures.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [direction, setDirection] = useState("");
  const [animation, setAnimation] = useState(false);

  const handleDirection = (dir) => {
    if (animation) return;

    let newIndex;
    if (dir === "right") {
      newIndex = (currentIndex + 1) % total;
    } else {
      newIndex = (currentIndex - 1 + total) % total;
    }

    setNextIndex(newIndex);
    setDirection(dir);
    setAnimation(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setAnimation(false);
    }, 500);
  };

  return (
    <div className="carousel">
      <img
        src={leftArrow}
        alt="left-arrow"
        className="arrow arrow-left"
        onClick={() => handleDirection("left")}
      />
      <div className="carousel_viewport">
        <img
          key={currentIndex}
          className="carousel_image current"
          src={carousel.pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
        {nextIndex !== null && (
          <img
            key={nextIndex}
            className={`carousel_image incoming slide-from-${direction}`}
            src={carousel.pictures[nextIndex]}
            alt={`Slide ${nextIndex + 1}`}
          />
        )}
      </div>

      <div className="carousel_indicator">
        {currentIndex + 1} / {total}
      </div>

      <img
        src={rightArrow}
        alt="right-arrow"
        className="arrow arrow-right"
        onClick={() => handleDirection("right")}
      />
    </div>
  );
};

export default LogementCarousel;
