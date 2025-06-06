import LogementCard from "../components/Logement_Card/Logement_Card.jsx";
import ImageBanner from "../components/Image_Banner/Image_Banner.jsx";
import homeBanner from "../assets/Images/banners/Home.png";

export default function Home() {
  return (
    <div className="">
      <ImageBanner
        bannerSrc={homeBanner}
        text="Chez vous, partout et ailleurs"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        filter="brightness(0.4)"
      />
      <LogementCard />
    </div>
  );
}
