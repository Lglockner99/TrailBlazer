export default function MetricCard({ title, value, unit, change, icon }) {
  const isPositive = change > 0;
  
  return (
    <div className="metric-card">
      <div className="metric-title">
        {icon && <span className="material-icons icon mr-1">{icon}</span>}
        {title}
      </div>
      <div className="metric-value">
        {value.toFixed(1)}
        <span className="metric-unit">{unit}</span>
      </div>
      {change !== undefined && (
        <div className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
          <span className="material-icons">
            {isPositive ? 'trending_up' : 'trending_down'}
          </span>
          <span>{Math.abs(change)}% from last hour</span>
        </div>
      )}
    </div>
  );
}