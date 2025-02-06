import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar bg-white shadow-md">
      <div className="navbar-container px-4 py-2 flex items-center justify-between">
        <div className="navbar-title">
          <h1 className="text-xl font-bold text-blue-600">TrailBlazer</h1>
        </div>
        <div className="navbar-links flex space-x-2">
          <Link
            to="/"
            className={`icon-button p-2 rounded-lg ${
              isActive('/') 
                ? 'bg-gray-100 text-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="text-[15px]">Dashboard </span>
          </Link>
          <Link
            to="/alerts"
            className={`icon-button p-2 rounded-lg ${
              isActive('/alerts') 
                ? 'bg-gray-100 text-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="text-[15px]"> Alerting </span>
          </Link>
          <Link
            to="/server-stats"
            className={`icon-button p-2 rounded-lg ${
              isActive('/server-stats') 
                ? 'bg-gray-100 text-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="text-[15px]"> Server Statistics</span>
          </Link>
        </div>
        <div className="navbar-actions flex space-x-2">
          <button className="icon-button p-2 rounded-lg hover:bg-gray-100">
            <span className="material-icons icon text-gray-600">notifications</span>
          </button>
          <button className="icon-button p-2 rounded-lg hover:bg-gray-100">
            <span className="material-icons icon text-gray-600">account_circle</span>
          </button>
        </div>
      </div>
    </nav>
  );
}