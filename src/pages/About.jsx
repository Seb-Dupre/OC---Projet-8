import ImageBanner from "../components/Image_Banner/Image_Banner.jsx";
import AccordeonButton from "../components/Accordeon/Accordeon.jsx";
const About = () => {
  // Supposons que tu veux afficher les détails du premier appartement

  return (
    <div className="">
      <ImageBanner />
      <div className="accordeon-about">
        <div className="accordeon-about-wrapper">
          <AccordeonButton
            label="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilté totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
        </div>

        <div className="accordeon-about-wrapper">
          <AccordeonButton
            label="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className="accordeon-about-wrapper">
          <AccordeonButton
            label="Service"
            content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          />
        </div>
        <div className="accordeon-about-wrapper">
          <AccordeonButton
            label="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurtié établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </div>
  );
};
export default About;
