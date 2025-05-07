import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";
import ReviewSection from "../components/Reviews/ReviewSection";
import authApiClient from "../services/auth-api-client";

const ConfirmOrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleConfirm = async () => {
    if (!product) {
      alert("Product info missing!");
      return;
    }

    setLoading(true);

    try {
      const now = new Date().toISOString();
      const response = await authApiClient.post("/orders/", {
        service_id: product.id,
        order_date: now,
      });

      const newOrderId = response.data.id;
      setOrderId(newOrderId); // for ReviewSection

      navigate("/dashboard/payment", {
        state: { orderId: newOrderId, product },
      });
    } catch (error) {
      console.error("Order creation failed:", error.response?.data || error);
      alert("Failed to confirm order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isOrderInformationMissing = !product;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Product Images */}
        <div className="lg:w-1/2 bg-gray-50 p-6 flex items-center justify-center">
          <ProductImageGallery
            images={product?.images || []}
            ProductName={product?.title}
          />
        </div>

        {/* Right: Order Info */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
              Confirm Your Order
            </h1>

            <div className="text-gray-700 space-y-3 text-base">
              <p><span className="font-semibold">Name:</span> {product?.title}</p>
              <p><span className="font-semibold">Description:</span> {product?.description}</p>
              <p><span className="font-semibold">Price:</span> ${product?.price}</p>
              <p><span className="font-semibold">Category:</span> {product?.category?.name}</p>
              <p><span className="font-semibold">Delivery Time:</span> {product?.delivery_time}</p>
              <p><span className="font-semibold">Created At:</span> {new Date(product?.created_at).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="mt-8">
            <button
              onClick={handleConfirm}
              disabled={isOrderInformationMissing || loading}
              className={`w-full py-3 rounded-xl text-lg font-bold transition duration-300 flex items-center justify-center ${
                loading || isOrderInformationMissing
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                "Confirm Order"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-12 w-full max-w-6xl">
        <ReviewSection productId={product.id}/>
      </div>
    </div>
  );
};

export default ConfirmOrderPage;
