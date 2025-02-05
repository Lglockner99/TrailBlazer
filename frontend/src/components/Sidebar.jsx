import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <ul>
        <li><Link to="/" className="block py-2">Dashboard</Link></li>
        <li><Link to="/alerts" className="block py-2">Alerts</Link></li>
      </ul>
    </div>
  );
}