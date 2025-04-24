import { useParams, Navigate } from "react-router-dom";
import logementData from "../logements.json";
import Carousel from "../components/Carousel/Carousel.jsx";
import LogementDetails from "../components/Logement_Details/Logement_Details.jsx";
import AccordeonButton from "../components/Accordeon/Accordeon.jsx";

const Logement = () => {
  const { id } = useParams();

  const accommodation = logementData.find((logement) => logement.id === id);

  if (!accommodation) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div>
      <Carousel pictures={accommodation.pictures} />
      <LogementDetails />

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
