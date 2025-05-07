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
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={
            product?.images?.length > 0
              ? product.images[0].image
              : defaultImage
          }
          alt={product.title || "Product Image"}
          className="rounded-xl object-cover w-48 h-48"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.title}</h2>
        <h3 className="font-bold text-xl text-red-700">${product.price}</h3>
        <p className="text-gray-600">{product.description}</p>
        <div className="card-actions mt-4 w-full">
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
    </div>
  );
};

export default ProductItem;
