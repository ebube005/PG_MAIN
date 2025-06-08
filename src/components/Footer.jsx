import "./Footer.css";
import pglogo from "/logo2.svg";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src={pglogo} alt="Logo" className="footer-logo" />
        <span className="footer-title">Preference Grammar Generator</span>
      </div>
      <div className="footer-rights">
        © 2025 Preference Grammar Generator. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
