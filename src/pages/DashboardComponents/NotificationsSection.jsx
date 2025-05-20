import { useState, useEffect } from "react"
import {
  BellIcon,
  EditIcon,
  UserIcon,
  GavelIcon,
  ClockIcon,
} from "./Icons"
import authApiClient from "../../services/auth-api-client"

const NotificationsSection = () => {
  const [notifications, setNotifications] = useState({ results: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authApiClient.get("/notifications/")
      .then(res => {
        setNotifications(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to load notifications", err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading notifications...</p>
  if (!notifications.results || notifications.results.length === 0)
    return <p>No notifications available.</p>

  const getIcon = (type) => {
    switch (type) {
      case "bid": return <GavelIcon />
      case "expire": return <ClockIcon />
      case "user":
      default: return <UserIcon />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-600 mr-2">
            <BellIcon />
          </span>
          <h3 className="text-lg font-medium">Notifications</h3>
        </div>
        {/* <button className="p-1 rounded-md hover:bg-gray-100">
          <span className="text-gray-500 cursor-pointer">
            <EditIcon />
          </span>
        </button> */}
      </div>

      <div>
        {notifications.results.map(({ id, message, timestamp, type }, index) => (
          <div
            key={id}
            className={`flex items-start p-4 gap-3 transition-all ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } hover:bg-blue-50 hover:shadow-sm`}
          >
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full">
              {getIcon(type)}
            </div>
            <div className="text-sm">
              <p className="text-gray-800 leading-snug">
                <span className="font-medium text-blue-700">{message}</span>
              </p>
              {timestamp && (
                <small className="text-gray-400 block mt-1">
                  {new Date(timestamp).toLocaleString()}
                </small>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationsSection
