export default function MetricCard({ title, value, unit }) {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value} {unit}</p>
      </div>
    );
  }
  