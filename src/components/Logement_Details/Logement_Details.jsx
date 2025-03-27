import { useParams } from "react-router-dom";
import logement from "../../logements.json";

import "./Logement_Details.scss";
const LogementDetails = () => {
  const { id } = useParams();
  const item = logement.find((i) => i.id === id);

  if (!item) {
    return <p>Objet non trouvé</p>;
  }

  return (
    <div className="detail-page">
      <div>
        <h2>{item.title}</h2>
        <h3> {item.location} </h3>
      </div>
      <div className="host">
        <img src={item.host.picture} alt={item.host.name} />
        <p>{item.host.name}</p>
      </div>
      <p>{item.rating}</p>
      <p></p>
      <div className="equipments">
        {/* en faire un composant bouton pour la page "About" ?*/}
        <h3>Équipements</h3>
        <ul>
          {item.equipments.map((equip, index) => (
            <li key={index}>{equip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogementDetails;
