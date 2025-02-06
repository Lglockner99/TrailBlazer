import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <h1>TrailBlazer</h1>
        </div>
        <div className="navbar-actions">
          <button className="icon-button">
            <span className="material-icons icon">notifications</span>
          </button>
          <button className="icon-button">
            <span className="material-icons icon">account_circle</span>
          </button>
        </div>
      </div>
    </nav>
  );
}