import { useParams, Navigate } from "react-router-dom";
import logementData from "../logements.json";
import LogementCarousel from "../components/Logement_Carousel/Logement_Carousel.jsx";
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
      <LogementCarousel images={accommodation.pictures} />
      <LogementDetails logement={accommodation} />

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
