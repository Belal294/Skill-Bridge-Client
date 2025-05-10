import { useNavigate } from "react-router-dom";
import { useState } from "react";
import defaultImage from "../assets/carosel/defalut.jpg";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleBuyNow = () => {
    setLoading(true);
    try {
      navigate("/dashboard/confirm-order", {
        state: { product },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto group overflow-hidden mt-6">
      {/* Image Section */}
      <div className="overflow-hidden h-56 bg-gray-100">
        <img
          src={
            product?.images?.length > 0
              ? product.images[0].image
              : defaultImage
          }
          alt={product.title || "Product Image"}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-center space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <h3 className="text-lg font-bold text-red-600">${product.price}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>

        <button
          className="btn btn-secondary w-full"
          onClick={handleBuyNow}
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Buy Now"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
