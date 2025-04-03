import { NavLink } from "react-router-dom";
import "./Error404.scss";
export default function Error404() {
  return (
    <div className="error">
      <p className="error-404">404</p>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/">
        <p className="error-link">Retourner sur la page d'accueil</p>
      </NavLink>
    </div>
  );
}
