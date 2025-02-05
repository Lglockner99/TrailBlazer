import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-white flex justify-between items-center">
      <h1 className="text-xl font-bold">App Monitor</h1>
      <div>
        <Link to="/" className="mr-4">Dashboard</Link>
        <Link to="/alerts">Alerts</Link>
      </div>
    </nav>
  );
}