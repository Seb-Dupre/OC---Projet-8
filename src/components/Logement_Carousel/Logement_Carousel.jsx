import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logement from "../../logements.json";
import leftArrow from "../../assets/images/arrows/arrow-left.png";
import rightArrow from "../../assets/images/arrows/arrow-right.png";
import "./Logement_Carousel.scss";
const LogementCarousel = () => {
  const { id } = useParams(); // pour recupérer l'id depuis l'URL
  const caroursel = logement.find((data) => data.id === id);

  if (!caroursel) {
    return <div>Appartement non trouvé</div>;
  }

  const [slide, setSlide] = useState(0);

  const nextImage = () => {
    setSlide((currantSlide) => (currantSlide + 1) % caroursel.pictures.length); // "%" pour boucler
  };

  const prevImage = () => {
    setSlide((currantSlide) =>
      currantSlide === 0 ? caroursel.pictures.length - 1 : currantSlide - 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={leftArrow}
        alt="left-arrrow"
        className="arrow arrow-left"
        onClick={prevImage}
      />
      <img
        className="carousel_slide"
        src={caroursel.pictures[slide]}
        alt={`Image ${slide + 1}`}
      />
      <div className="carousel_indicator">
        {slide + 1} / {caroursel.pictures.length}
      </div>
      <img
        src={rightArrow}
        alt="right-arrrow"
        className="arrow arrow-right"
        onClick={nextImage}
      />
    </div>
  );
};

export default LogementCarousel;
