import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ErroAlert from "../components/ErroAlert";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValidArray = (arr) => Array.isArray(arr) && arr.length > 0;

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/services")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setServices(res.data);
        } else if (Array.isArray(res.data.results)) {
          setServices(res.data.results);
        } else {
          setServices([]);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleViewAllClick = () => {
    navigate("/shop");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Trending Products
          </h2>
          <button
            onClick={handleViewAllClick}
            className="btn btn-secondary px-6 py-3 rounded-full text-lg"
          >
            View All
          </button>
        </div>

        {/* Loader */}
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-spinner loading-xl text-secondary"></span>
          </div>
        )}

        {/* Error */}
        {error && <ErroAlert error={error} />}

        {/* Products */}
        {!isLoading && !error && isValidArray(services) && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            className="pb-4"
          >
            {services.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* No Product */}
        {!isLoading && !error && !isValidArray(services) && (
          <p className="text-center text-gray-500 mt-6">No Products Available</p>
        )}
      </div>
    </section>
  );
};

export default Product;
