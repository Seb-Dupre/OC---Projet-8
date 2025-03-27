import "./Image_Banner.scss";
import { useLocation } from "react-router-dom";
import CoverHome from "../../assets/Images/banners/Home.png";
import CoverAbout from "../../assets/Images/banners/About.png";

const ImageBanner = () => {
  const location = useLocation();

  // Choisir l'image à afficher en fonction de l'URL
  let bannerSrc;
  let text;
  let filter;
  let boxShadow;

  switch (location.pathname) {
    case "/":
      bannerSrc = CoverHome;
      text = "Chez vous, partout et ailleurs";
      filter = "brightness(0.4)";
      boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
      break;
    case "/about":
      bannerSrc = CoverAbout;
      filter = "brightness(0.7)";
      boxShadow = "none";
      break;
  }

  return (
    <div className="banner">
      <img src={bannerSrc} alt="Banner" style={{ filter, boxShadow }} />
      <p>{text}</p>
    </div>
  );
};

export default ImageBanner;
