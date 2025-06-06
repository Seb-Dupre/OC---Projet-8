import { useParams } from "react-router-dom";
import logement from "../../logements.json";
import "./logement_Location.scss";

const LogementLocation = () => {
  const { id } = useParams();
  const item = logement.find((i) => i.id === id);
  const { title, location } = item;

  return (
    <div className="detail-page">
      <div className="detail-page_title">
        <h2>{title}</h2>
        <h3>{location}</h3>
      </div>
    </div>
  );
};

export default LogementLocation;
