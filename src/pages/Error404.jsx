import { NavLink } from "react-router-dom";
import "./pages_style/error404.scss";
export default function Error404() {
  return (
    <div className="error error-page_margin">
      <p className="error-404 error-page_margin">404</p>
      <p className="error-message error-page_margin">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/">
        <p className="error-link error-page_margin">
          Retourner sur la page d'accueil
        </p>
      </NavLink>
    </div>
  );
}
