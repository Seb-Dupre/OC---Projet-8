import "./image_Banner.scss";

const ImageBanner = ({ bannerSrc, text, boxShadow, filter }) => {
  return (
    <div className="banner">
      <img src={bannerSrc} alt="Banner" style={{ filter, boxShadow }} />
      <h2>{text}</h2>
    </div>
  );
};
export default ImageBanner;
