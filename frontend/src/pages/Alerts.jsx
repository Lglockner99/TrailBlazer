import { useState } from "react";

export default function Alerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      message: "High CPU usage detected: Server 1 at 95%",
      severity: "high",
      timestamp: "2025-02-06T12:00:00Z"
    },
    {
      id: 2,
      message: "Memory usage above threshold: 85% utilized",
      severity: "medium",
      timestamp: "2025-02-06T11:45:00Z"
    },
    {
      id: 3,
      message: "Disk space running low: 90% full on /dev/sda1",
      severity: "high",
      timestamp: "2025-02-06T11:30:00Z"
    }
  ]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-red-100";
      case "medium":
        return "bg-yellow-100";
      case "low":
        return "bg-blue-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Active Alerts</h1>
      {alerts.length === 0 ? (
        <p>No active alerts</p>
      ) : (
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(alert.timestamp).toLocaleString()}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded text-sm capitalize ${
                  alert.severity === "high" ? "bg-red-200 text-red-800" :
                  alert.severity === "medium" ? "bg-yellow-200 text-yellow-800" :
                  "bg-blue-200 text-blue-800"
                }`}>
                  {alert.severity}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}