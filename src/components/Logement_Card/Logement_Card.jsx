import "./Logement_Card.scss";
import { Link } from "react-router-dom";
import logement from "../../logements.json";
export default function LogementCard() {
  return (
    <div className="card_container">
      {logement.map((item) => (
        <div key={item.id}>
          <Link to={`/logement/${item.id}`}>
            <div className="card">
              <div className="card_gradiant"></div>
              <img src={item.cover} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
