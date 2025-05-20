// src/components/FreelancerDashboard.jsx
import { useState, useEffect, useRef } from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js"
import authApiClient from "../../services/auth-api-client"

// Import the new components
import DashboardHeader from "./DashboardHeader"
import DashboardSummaryCards from "./DashboardSummaryCards"
import ProfileViewsChart from "./ProfileViewsChart"
import NotificationsSection from "./NotificationsSection"
import OrdersSection from "./OrdersSection"
import NotesSection from "./NotesSection"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

function FreelancerDashboard() {
  const [data, setData] = useState(null)
  const chartRef = useRef(null) // chartRef is used directly by ProfileViewsChart now

  useEffect(() => {
    authApiClient
      .get("/freelancer-dashboard/")
      .then(res => {
        setData(res.data)
        console.log("check data", res.data)
      })
      .catch(err => console.error("Failed to fetch dashboard data", err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-6">
        {/* Dashboard Header */}
        <DashboardHeader/>

        {/* Summary Cards */}
        <DashboardSummaryCards data={data} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Profile Views Chart */}
            <ProfileViewsChart
              timelineLabels={data ? data.timeline_labels : []}
              profileViews={data ? data.profile_views : []}
              chartRef={chartRef}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Notifications */}
              <NotificationsSection />

              {/* Orders */}
              <OrdersSection />
            </div>
          </div>

          {/* Notes Section */}
          <NotesSection />
        </div>
      </div>
    </div>
  )
}

export default FreelancerDashboard