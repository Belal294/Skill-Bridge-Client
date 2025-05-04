import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";

const ConfirmOrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Location state in ConfirmOrderPage:", location.state);
  const { orderId, product } = location.state || {};
  console.log("orderId in ConfirmOrderPage:", orderId);

  const isOrderInformationMissing = !orderId || !product;
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    if (isOrderInformationMissing) {
      alert("Order information is missing!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      navigate("/dashboard/payment", {
        state: { orderId: orderId, product }, 
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl flex flex-col lg:flex-row gap-8 p-8">
        {/* Left: Product Images */}
        <div className="lg:w-1/2">
          <ProductImageGallery
            images={product?.images || []}
            ProductName={product?.title}
          />
        </div>

        {/* Right: Order Info */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              Confirm Your Order
            </h1>

            <div className="text-gray-700 mb-6 space-y-2">
              <p>
                <span className="font-semibold">Name:</span> {product?.title}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {product?.description}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ${product?.price}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product?.category?.name}
              </p>
              <p>
                <span className="font-semibold">Delivery Time:</span>{" "}
                {product?.delivery_time}
              </p>
              <p>
                <span className="font-semibold">Created At:</span>{" "}
                {new Date(product?.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg font-semibold transition duration-300 flex justify-center items-center"
            disabled={isOrderInformationMissing || loading}
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
  );
};

export default ConfirmOrderPage;
