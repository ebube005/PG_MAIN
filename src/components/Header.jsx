import "./Header.css";
import helplogo from "/help.svg";
import pglogo from "/Symbol.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={pglogo} alt="Logo" className="logo" />
        <h1 className="title">Preference Grammar Generator</h1>
      </div>
      <button className="help-button">
        <img src={helplogo} alt="Help Icon" className="help-icon" />
        <span>Help</span>
      </button>
    </header>
  );
}

export default Header;
