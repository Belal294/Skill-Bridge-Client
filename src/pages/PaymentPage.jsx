import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const PaymentPage = () => {
  const location = useLocation();
  const { orderId, product } = location.state || {};
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!orderId || !product) {
      setError("Missing order or product information.");
      return;
    }

    const initiateStripeCheckout = async () => {
      try {
        const response = await authApiClient.post("/create-checkout-session/", {
          order_id: orderId, // ✅ changed from order_uuid to order_id (integer)
          service_id: product.id,
        });

        const { checkout_url } = response.data;

        if (checkout_url) {
          window.location.href = checkout_url;
        } else {
          setError("Checkout URL not found.");
        }
      } catch (err) {
        console.error("Stripe Checkout error:", err.response?.data || err.message);
        setError(err.response?.data?.error || "Payment failed. Please try again.");
      }
    };

    initiateStripeCheckout();
  }, [orderId, product]);

  if (!orderId || !product || error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow text-center text-red-600 font-semibold">
          {error || "No payment information found!"}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-lg text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-700 font-semibold">
          Redirecting to payment gateway...
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
