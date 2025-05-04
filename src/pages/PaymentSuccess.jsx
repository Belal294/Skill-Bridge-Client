import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const PaymentSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderUUID = queryParams.get("order_uuid");

  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderUUID) {
      setError("Order UUID not found in URL.");
      setLoading(false);
      return;
    }
  
    const confirmPaymentAndFetchOrder = async () => {
      try {
        // Payment confirmation POST request with body (safer)
        await authApiClient.post("/payment/success/", { order_uuid: orderUUID });

  
        // Fetch order by UUID
        const response = await authApiClient.get(`/orders/by-uuid/${orderUUID}/`);
        setOrder(response.data);
      } catch (err) {
        console.error("Error confirming payment or fetching order:", err);
        setError(`Error: ${err.response ? err.response.data : err.message}`);
      }
       finally {
        setLoading(false);
      }
    };
  
    confirmPaymentAndFetchOrder();
  }, [orderUUID]);
  
  if (loading) {
    return <div className="text-center mt-10">Loading order details...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (!order) {
    return <div className="text-center mt-10 text-gray-600">No order data found.</div>;
  }

  const { id, service } = order;
  const { title, price, seller, image } = service || {};

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md border border-green-200">
      <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">🎉 Payment Successful!</h2>
      <div className="space-y-2 text-gray-800">
        <p><span className="font-semibold">Order ID:</span> {id}</p>
        <p><span className="font-semibold">Service:</span> {title}</p>
        <p><span className="font-semibold">Price:</span> ${price}</p>
        <p><span className="font-semibold">Seller:</span> {seller?.full_name}</p>
        {image && image !== "null" && (
          <img src={image} alt={title} className="w-full rounded-lg mt-2" />
        )}
        <p className="text-sm text-gray-600">✅ Thank you for your order!</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
