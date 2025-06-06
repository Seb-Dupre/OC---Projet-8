import { useParams, Navigate } from "react-router-dom";
import logementData from "../logements.json";
import Carousel from "../components/Carousel/Carousel.jsx";
import LogementLocation from "../components/Logement_Location/Logement_Location.jsx";
import Rating from "../components/Rating/Rating.jsx";
import Tags from "../components/Tags/Tags.jsx";
import Host from "../components/Host/Host.jsx";
import AccordeonButton from "../components/Accordeon/Accordeon.jsx";
import "./pages_style/logement.scss";

const Logement = () => {
  const { id } = useParams();

  const accommodation = logementData.find((logement) => logement.id === id);

  if (!accommodation) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <Carousel pictures={accommodation.pictures} />
      <div className="logement_details">
        <div className="locationAndTags">
          <LogementLocation />
          <Tags />
        </div>
        <div className="HostAndRating">
          <Host />
          <Rating />
        </div>
      </div>

      <div className="accordeon-logement">
        <div className="Accordeon-button-wrapper">
          <AccordeonButton
            label="Description"
            content={accommodation.description}
          />
        </div>

        <div className="Accordeon-button-wrapper">
          <AccordeonButton
            label="Équipements"
            content={accommodation.equipments}
          />
        </div>
      </div>
    </div>
  );
};

export default Logement;
