import { Line } from "react-chartjs-2"
import { LineChartIcon, ChevronDownIcon } from "./Icons"

const ProfileViewsChart = ({ timelineLabels, profileViews, chartRef, loading }) => {
  const chartData = {
    labels: timelineLabels,
    datasets: [
      {
        label: "Profile Views",
        data: profileViews,
        fill: true,
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        tension: 0.4,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          drawBorder: false,
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  }

  return (
    <div className="bg-white rounded-lg shadow-sm mb-6">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-600 mr-2">
            <LineChartIcon />
          </span>
          <h3 className="text-lg font-medium">Your Profile Views</h3>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Last 6 Months</span>
          <span className="text-gray-500">
            <ChevronDownIcon />
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="h-[300px] w-full flex items-center justify-center">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <Line ref={chartRef} data={chartData} options={chartOptions} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileViewsChart
