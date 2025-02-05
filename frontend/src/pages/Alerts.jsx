import { useEffect, useState } from "react";
import axios from "axios";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get("/alerts").then(response => {
      setAlerts(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Alerts</h1>
      {alerts.length === 0 ? (
        <p>No active alerts</p>
      ) : (
        <ul className="border p-4 bg-red-100 rounded">
          {alerts.map((alert, index) => (
            <li key={index} className="py-2">{alert.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}