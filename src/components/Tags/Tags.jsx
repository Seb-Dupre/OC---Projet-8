import { useParams } from "react-router-dom";
import logement from "../../logements.json";
import "./tags.scss";

const Tags = () => {
  const { id } = useParams();
  const { tags } = logement.find((i) => i.id === id);
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <p key={index} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
