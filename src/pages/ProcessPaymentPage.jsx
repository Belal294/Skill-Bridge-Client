// src/pages/ProcessPaymentPage.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ProcessPaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, product } = location.state || {};

  useEffect(() => {
    const initiateStripeSession = async () => {
      if (!orderId || !product?.id) {
        alert("Missing order or product details.");
        navigate("/"); 
        return;
      }

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/create-checkout-session/`,
          {
            order_uuid: orderId,
            service_id: product.id,
          }
        );

        const { checkout_url } = response.data;
        if (checkout_url) {
          window.location.href = checkout_url;
        } else {
          throw new Error("No checkout URL returned");
        }
      } catch (error) {
        console.error("Stripe session creation failed:", error);
        alert("Failed to initiate payment. Please try again.");
        navigate("/dashboard/orders");
      }
    };

    initiateStripeSession();
  }, [orderId, product, navigate]);

  return (
    <div className="h-screen flex justify-center items-center">
      <p className="text-xl font-semibold text-gray-700">
        Redirecting to payment...
      </p>
    </div>
  );
};

export default ProcessPaymentPage;
