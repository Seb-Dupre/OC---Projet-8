import { useParams } from "react-router-dom";
import logement from "../../logements.json";
import "./host.scss";

const Host = () => {
  const { id } = useParams();
  const { host } = logement.find((i) => i.id === id);
  const { name, picture } = host;

  // Split the name into first and last name
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="host">
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <img src={picture} alt={`Host: ${name}`} />
    </div>
  );
};

export default Host;
