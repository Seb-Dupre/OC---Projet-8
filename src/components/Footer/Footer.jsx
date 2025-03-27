import LogoFooter from "../../assets/images/LOGO footer.png";
import "./footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={LogoFooter} alt="Logo" />
      </div>

      <p> © 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
