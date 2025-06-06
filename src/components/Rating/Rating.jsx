import { useParams } from "react-router-dom";
import logement from "../../logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./rating.scss";

const Rating = () => {
  const { id } = useParams();
  const { rating } = logement.find((i) => i.id === id);

  return (
    <div className="rating">
      {/* Display full stars */}
      {Array.from({ length: rating }, (_, index) => (
        <FontAwesomeIcon
          key={`full-${index}`}
          icon={faStar}
          className="rated"
        />
      ))}
      {/* Display empty stars */}
      {Array.from({ length: 5 - rating }, (_, index) => (
        <FontAwesomeIcon
          key={`empty-${index}`}
          icon={faStar}
          className="unrated"
        />
      ))}
    </div>
  );
};

export default Rating;
