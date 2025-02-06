import { useEffect, useState } from "react";
import MetricCard from "../components/MetricCard";

// Mock data generator
const generateMockData = () => {
  return {
    cpu: {
      value: 45 + Math.random() * 30,
      change: -2.5 + Math.random() * 5
    },
    memory: {
      value: 6 + Math.random() * 2,
      change: 1.2 + Math.random() * 2
    },
    network: {
      value: 180 + Math.random() * 40,
      change: -1 + Math.random() * 4
    },
    requests: {
      value: 1200 + Math.random() * 300,
      change: 3 + Math.random() * 2
    },
    latency: {
      value: 120 + Math.random() * 50,
      change: -0.5 + Math.random() * 3
    },
    errors: {
      value: 0.5 + Math.random() * 1,
      change: -1 + Math.random() * 3
    }
  };
};

export default function Dashboard() {
  const [metrics, setMetrics] = useState(generateMockData());

  useEffect(() => {
    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      setMetrics(generateMockData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">System Metrics</h1>
      <div className="metrics-grid">
        <MetricCard
          title="CPU Usage"
          value={metrics.cpu.value}
          unit="%"
          change={metrics.cpu.change}
          icon="memory"
        />
        <MetricCard
          title="Memory Usage"
          value={metrics.memory.value}
          unit="GB"
          change={metrics.memory.change}
          icon="storage"
        />
        <MetricCard
          title="Network Speed"
          value={metrics.network.value}
          unit="Mbps"
          change={metrics.network.change}
          icon="network_check"
        />
        <MetricCard
          title="Requests/min"
          value={metrics.requests.value}
          unit="req/min"
          change={metrics.requests.change}
          icon="swap_horiz"
        />
        <MetricCard
          title="Avg Latency"
          value={metrics.latency.value}
          unit="ms"
          change={metrics.latency.change}
          icon="timer"
        />
        <MetricCard
          title="Error Rate"
          value={metrics.errors.value}
          unit="%"
          change={metrics.errors.change}
          icon="error_outline"
        />
      </div>
    </div>
  );
}