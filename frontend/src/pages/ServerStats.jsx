import { useState, useEffect } from 'react';
import MetricCard from '../components/MetricCard';

export default function ServerStats() {
  const [stats, setStats] = useState({
    cpuUsage: Math.floor(Math.random() * 100),
    memoryUsage: Math.floor(Math.random() * 100),
    diskSpace: Math.floor(Math.random() * 1000),
    activeUsers: Math.floor(Math.random() * 500),
    uptime: Math.floor(Math.random() * 30),
    requestsPerMinute: Math.floor(Math.random() * 1000)
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpuUsage: Math.floor(Math.random() * 100),
        memoryUsage: Math.floor(Math.random() * 100),
        diskSpace: Math.floor(Math.random() * 1000),
        activeUsers: Math.floor(Math.random() * 500),
        uptime: Math.floor(Math.random() * 30),
        requestsPerMinute: Math.floor(Math.random() * 1000)
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="server-stats">
      <h1>Server Statistics</h1>
      <div className="stats-grid">
        <MetricCard
          title="CPU Usage"
          value={stats.cpuUsage}
          unit="%"
          icon="memory"
        />
        <MetricCard
          title="Memory Usage"
          value={stats.memoryUsage}
          unit="%"
          icon="storage"
        />
        <MetricCard
          title="Disk Space"
          value={stats.diskSpace}
          unit="GB"
          icon="hard_drive"
        />
        <MetricCard
          title="Active Users"
          value={stats.activeUsers}
          icon="group"
        />
        <MetricCard
          title="Uptime"
          value={stats.uptime}
          unit="days"
          icon="timer"
        />
        <MetricCard
          title="Requests/min"
          value={stats.requestsPerMinute}
          icon="speed"
        />
      </div>
    </div>
  );
}
