import logement from "../logements.json";
import LogementCarousel from "../components/Logement_Carousel/Logement_Carousel.jsx";
import LogementDetails from "../components/Logement_Details/Logement_Details.jsx";
import AccordeonButton from "../components/Accordeon/Accordeon.jsx";

const Logement = () => {
  // Supposons que tu veux afficher les détails du premier appartement
  const accommodation = logement[0];

  return (
    <div>
      <LogementCarousel />
      <LogementDetails />

      <div className="accordeon-logement">
        {/* Afficher la description */}
        <div className="Accordeon-button-wrapper">
          <AccordeonButton
            label="Description"
            content={accommodation.description}
          />
        </div>

        {/* Afficher les équipements */}
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
