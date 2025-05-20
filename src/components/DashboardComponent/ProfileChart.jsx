import { Line } from "react-chartjs-2";

export default function ProfileChart() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Profile Views",
        data: [20, 45, 30, 60, 40, 80],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderColor: "#3b82f6",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 20 },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 h-72 mb-6">
      <div className="mb-2 text-sm font-medium text-gray-700">
        Profile Views
      </div>
      <div className="h-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}