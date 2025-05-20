import { useRef } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)


const GavelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
    <path d="m16 16 6-6" />
    <path d="m8 8 6-6" />
    <path d="m9 7 8 8" />
    <path d="m21 11-8-8" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const LineChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const FileTextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
)

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
)

const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
)

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const ImageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
)

function FreelancerDashboard() {
  const chartRef = useRef(null)


  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        fill: true,
        label: "Profile Views",
        data: [195, 125, 210, 350, 205, 250],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        pointBackgroundColor: "rgb(59, 130, 246)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-6">
   
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Howdy, Tom!</h1>
            <p className="text-gray-600">We are glad to see you again!</p>
          </div>
          <div className="mt-2 md:mt-0 flex items-center text-sm">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Dashboard</span>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
         
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 mb-1">Task Bids Won</p>
                <h3 className="text-3xl font-bold">22</h3>
              </div>
              <div className="p-3 rounded-md bg-emerald-50">
                <span className="text-emerald-500">
                  <GavelIcon />
                </span>
              </div>
            </div>
          </div>

       
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 mb-1">Jobs Applied</p>
                <h3 className="text-3xl font-bold">4</h3>
              </div>
              <div className="p-3 rounded-md bg-pink-50">
                <span className="text-pink-500">
                  <BriefcaseIcon />
                </span>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 mb-1">Reviews</p>
                <h3 className="text-3xl font-bold">28</h3>
              </div>
              <div className="p-3 rounded-md bg-amber-50">
                <span className="text-amber-500">
                  <StarIcon />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Profile Views Chart */}
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
                <div className="h-[300px] w-full">
                  <Line ref={chartRef} data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Notifications */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">
                      <BellIcon />
                    </span>
                    <h3 className="text-lg font-medium">Notifications</h3>
                  </div>
                  <button className="p-1 rounded-md hover:bg-gray-100">
                    <span className="text-gray-500">
                      <EditIcon />
                    </span>
                  </button>
                </div>
                <div className="divide-y">
                  {/* Notification Item 1 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <UserIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="font-medium">Michael Shannah</span>{" "}
                        <span className="text-gray-600">applied for a job</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Full Stack Software Engineer
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Notification Item 2 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <GavelIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="font-medium">Gilber Allanis</span>{" "}
                        <span className="text-gray-600">placed a bid on your</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          iOS App Development
                        </a>{" "}
                        <span className="text-gray-600">project</span>
                      </p>
                    </div>
                  </div>

                  {/* Notification Item 3 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <ClockIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="text-gray-600">Your job listing</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Full Stack Software Engineer
                        </a>{" "}
                        <span className="text-gray-600">is expiring</span>
                      </p>
                    </div>
                  </div>

                  {/* Notification Item 4 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <UserIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="font-medium">Sindy Forrest</span>{" "}
                        <span className="text-gray-600">applied for a job</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Full Stack Software Engineer
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Notification Item 5 */}
                  <div className="flex items-start p-4 gap-3">
                    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">
                      <span className="text-gray-500">
                        <ImageIcon />
                      </span>
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="font-medium">David Peterson</span>{" "}
                        <span className="text-gray-600">left you a</span>{" "}
                        <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                          5.0
                        </span>{" "}
                        <span className="text-gray-600">rating after finishing</span>{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Logo Design
                        </a>{" "}
                        <span className="text-gray-600">task</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orders */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">
                      <FileTextIcon />
                    </span>
                    <h3 className="text-lg font-medium">Orders</h3>
                  </div>
                </div>
                <div className="divide-y">
                  {/* Order Item 1 */}
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Professional Plan</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                        Unpaid
                      </span>
                      <span>Order: #326</span>
                      <span>|</span>
                      <span>Date: 12/08/2019</span>
                    </div>
                  </div>

                  {/* Order Item 2 */}
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Professional Plan</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Paid
                      </span>
                      <span>Order: #264</span>
                      <span>|</span>
                      <span>Date: 10/07/2019</span>
                    </div>
                  </div>

                  {/* Order Item 3 */}
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Professional Plan</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Paid
                      </span>
                      <span>Order: #211</span>
                      <span>|</span>
                      <span>Date: 12/06/2019</span>
                    </div>
                  </div>

                  {/* Order Item 4 */}
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Professional Plan</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Paid
                      </span>
                      <span>Order: #179</span>
                      <span>|</span>
                      <span>Date: 06/05/2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div>
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">
                    <FileTextIcon />
                  </span>
                  <h3 className="text-lg font-medium">Notes</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-gray-800">
                      Meeting with candidate at 3pm who applied for Bilingual Event Support Specialist
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center rounded-md bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                      High Priority
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-md hover:bg-gray-200">
                        <span className="text-gray-500">
                          <EditIcon />
                        </span>
                      </button>
                      <button className="p-1 rounded-md hover:bg-gray-200">
                        <span className="text-gray-500">
                          <TrashIcon />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreelancerDashboard
