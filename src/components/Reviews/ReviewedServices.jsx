import { useEffect, useState } from "react";
import apiClient from "../../services/auth-api-client";

const ReviewedServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewedServices = async () => {
      try {
        const response = await apiClient.get("/reviews/reviewed/");
        const servicesWithReviews = await Promise.all(
          response.data.map(async (service) => {
            try {
              const reviewRes = await apiClient.get(`/services/${service.id}/reviews/my_review/`);
              return { ...service, my_review: reviewRes.data };
            } catch {
              return { ...service, my_review: null };
            }
          })
        );
        setServices(servicesWithReviews);
      } catch (error) {
        setError("Could not fetch reviewed services.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewedServices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-24">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Reviewed Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow rounded-xl p-4 border">
            {service.images?.[0]?.image ? (
              <img
                src={service.images[0].image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 rounded-md mb-3 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <h3 className="text-lg font-bold mb-1">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Seller: {service.seller?.full_name}</p>
            <p className="text-sm text-gray-600 mb-2">Price: ${service.price}</p>
            <p className="text-sm text-gray-600 mb-2">Delivery: {service.delivery_time} days</p>
            <div className="mt-4 bg-blue-50 p-3 rounded-md">
              <p className="font-semibold text-blue-600 mb-1">Your Review</p>
              <p className="text-sm">Rating: {service.my_review?.rating ?? "N/A"}</p>
              <p className="text-sm">Comment: {service.my_review?.comment ?? "No comment"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewedServices;
