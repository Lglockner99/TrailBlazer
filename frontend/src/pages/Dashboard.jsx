import { useEffect, useState } from "react";

import axios from "axios";
import MetricCard from "../components/MetricCard";
import api from "../services/api.js";

export default function Dashboard() {
  const [metrics, setMetrics] = useState({ cpu: 0, memory: 0, network: 0 });

  useEffect(() => {
    axios.get("/metrics").then(response => {
      setMetrics(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <MetricCard title="CPU Usage" value={metrics.cpu} unit="%" />
        <MetricCard title="Memory Usage" value={metrics.memory} unit="GB" />
        <MetricCard title="Network Speed" value={metrics.network} unit="Mbps" />
      </div>
    </div>
  );
}