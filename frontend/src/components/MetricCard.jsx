export default function MetricCard({ title, value, unit, change, icon }) {
  const isPositive = change > 0;
  
  const formatValue = (val) => {
    if (typeof val === 'number') {
      return val.toFixed(1);
    }
    return val;
  };
  
  return (
    <div className="metric-card">
      <div className="metric-title">
        {icon && <span className="material-icons icon mr-1">{icon}</span>}
        {title}
      </div>
      <div className="metric-value">
        {formatValue(value)}
        {unit && <span className="metric-unit">{unit}</span>}
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