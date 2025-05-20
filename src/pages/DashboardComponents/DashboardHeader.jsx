import React, { useEffect, useState } from "react"
import authApiClient from "../../services/auth-api-client"

const DashboardHeader = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    authApiClient.get("/auth/users/me/")
      .then(res => {
        console.log("user data", res.data)
        setUser(res.data)
      })
      .catch(err => console.error("Failed to fetch user", err))
  }, [])

  const fullName = user ? `${user.first_name} ${user.last_name}` : 'User'

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Howdy, {fullName}!</h1>
        <p className="text-gray-600">We are glad to see you again!</p>
      </div>
      <div className="mt-2 md:mt-0 flex items-center text-sm">
        <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900 font-medium">Dashboard</span>
      </div>
    </div>
  )
}

export default DashboardHeader
