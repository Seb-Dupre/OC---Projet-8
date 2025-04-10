import { useParams } from "react-router-dom";
import logement from "../../logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Logement_Details.scss";

const LogementDetails = () => {
  const { id } = useParams();
  const item = logement.find((i) => i.id === id);

  const { title, location, host, rating, tags } = item;
  const { name, picture } = host;

  // Split the name into first and last name
  const [firstName, lastName] = name.split(" ");

  const fullStars = rating;

  return (
    <div className="detail-page">
      <div className="detail-page_title">
        <h2>{title}</h2>
        <h3>{location}</h3>
        <div className="detail-page_tags">
          {tags.map((tag, index) => (
            <p key={index} className="tag">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="host-info">
        <div className="host">
          <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <img src={picture} alt={`Host: ${name}`} />
        </div>
        <div className="rating">
          {/* Display full stars */}
          {Array.from({ length: fullStars }, (_, index) => (
            <FontAwesomeIcon
              key={`full-${index}`}
              icon={faStar}
              className="rated"
            />
          ))}
          {/* Display empty stars */}
          {Array.from({ length: 5 - fullStars }, (_, index) => (
            <FontAwesomeIcon
              key={`empty-${index}`}
              icon={faStar}
              className="unrated"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogementDetails;
