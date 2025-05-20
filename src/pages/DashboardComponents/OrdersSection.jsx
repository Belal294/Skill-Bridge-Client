import { useState, useEffect } from "react"
import { FileTextIcon } from "./Icons"
import authApiClient from "../../services/auth-api-client"

const OrdersSection = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authApiClient.get("/orders/")
      .then(res => {
        setOrders(res.data.results)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to load orders", err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading orders...</p>
  if (orders.length === 0) return <p>No orders found.</p>

  return (
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
        {orders.map(order => {
          const { id, status, order_date, service } = order
          const serviceImage = service.images?.[0]?.image
          const {
            title,
            price,
            delivery_time,
            seller
          } = service

          // Normalize status
          const normalizedStatus = status?.toLowerCase()

          // Determine badge color
          let badgeClass = "bg-gray-100 text-gray-700"
          if (normalizedStatus === "pending") {
            badgeClass = "bg-yellow-100 text-yellow-700"
          } else if (normalizedStatus === "completed") {
            badgeClass = "bg-green-100 text-green-700"
          }

          return (
            <div key={id} className="p-4 flex gap-4 items-start">
              {/* Service Image */}
              {serviceImage && (
                <img
                  src={serviceImage}
                  alt={title}
                  className="w-20 h-20 object-cover rounded-md"
                />
              )}

              <div className="flex-1">
                {/* Service Title */}
                <h4 className="font-semibold text-lg mb-1">{title}</h4>

                {/* Order Info */}
                <div className="text-sm text-gray-600 mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-medium">Order #{id}</span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    Status:
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${badgeClass}`}
                    >
                      {normalizedStatus}
                    </span>
                  </span>
                </div>

                {/* Extra Info */}
                <div className="text-sm text-gray-700 space-y-1">
                  <p>Price: <span className="font-medium text-gray-900">৳{price}</span></p>
                  <p>Seller: <span className="text-gray-800">{seller?.full_name}</span></p>
                  <p>Delivery Time: {delivery_time} days</p>
                  <p>Order Date: {new Date(order_date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrdersSection
