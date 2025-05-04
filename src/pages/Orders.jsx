import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authApiClient.get("/orders/")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await authApiClient.patch(`/orders/${orderId}/`, {
        status: "canceled"
      });
      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId ? { ...order, status: "canceled" } : order
          )
        );
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Service Title</th>
                <th className="py-2 px-4">Service Price</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Payment Status</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.service?.title || "N/A"}</td>
                  <td className="py-2 px-4">${order.service?.price ?? "N/A"}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        order.status === "pending" ? "bg-yellow-500" :
                        order.status === "in_progress" ? "bg-blue-500" :
                        order.status === "completed" ? "bg-green-500" :
                        "bg-gray-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        order.is_paid ? "bg-green-600" : "bg-red-500"
                      }`}
                    >
                      {order.is_paid ? "Paid" : "Not Paid"}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    {order.status === "pending" && (
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleCancelOrder(order.id)}
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
