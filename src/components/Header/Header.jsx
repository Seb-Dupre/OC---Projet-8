import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/LOGO.png";
import "./header.scss";
export default function Header() {
  return (
    <header>
      <div className="app">
        <NavLink to="/">
          <img className="app_logo" src={Logo} alt="Logo" />
        </NavLink>
        <ul className="app_menu">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "active" : "",
            })}
          >
            <li>ACCUEIL</li>
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "active" : "",
            })}
          >
            <li>A PROPOS</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
