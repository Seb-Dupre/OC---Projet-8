import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/LOGO.png";
import "./header.scss";
export default function Header() {
  return (
    <header>
      <div className="app">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <ul className="app__menu">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "active" : "",
            })}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "active" : "",
            })}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
