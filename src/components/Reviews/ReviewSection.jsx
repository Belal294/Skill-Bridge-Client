import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import authApiClient from "../../services/auth-api-client";
import apiClient from "../../services/api-client";
import useAuthContext from "../../hooks/useAuthContext";

const ReviewSection = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [userCanReview, setUserCanReview] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [editReview, setEditReview] = useState({ ratings: 0, comment: "" });
  const [editingId, setEditingId] = useState(null);
  const { user } = useAuthContext();

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get(`/services/${productId}/reviews/`);
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews", error);
    } finally {
      setLoading(false);
    }
  };

  const checkUserPermission = async () => {
    try {
      const res = await authApiClient.get(`/orders/has-ordered/${productId}/`);
      setUserCanReview(res.data.hasOrdered);
    } catch (error) {
      console.error("Error checking user permission", error);
    }
  };

  const handleUpdateReview = async (reviewId) => {
    try {
      await authApiClient.put(`/services/${productId}/reviews/${reviewId}/`, editReview);
      // Update the review locally
      setReviews((prevReviews) => {
        const updated = Array.isArray(prevReviews.results) ? [...prevReviews.results] : [...prevReviews];
        const index = updated.findIndex((r) => Number(r.id) === Number(reviewId));
        if (index !== -1) {
          updated[index] = { ...updated[index], ...editReview };
        }
        return Array.isArray(prevReviews.results)
          ? { ...prevReviews, results: updated }
          : updated;
      });
      setEditingId(null);
    } catch (error) {
      console.error("Error updating review", error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await authApiClient.delete(`/services/${productId}/reviews/${reviewId}/`);
      setReviews((prevReviews) => {
        const filtered = Array.isArray(prevReviews.results)
          ? prevReviews.results.filter((r) => Number(r.id) !== Number(reviewId))
          : prevReviews.filter((r) => Number(r.id) !== Number(reviewId));
        return Array.isArray(prevReviews.results)
          ? { ...prevReviews, results: filtered }
          : filtered;
      });
    } catch (error) {
      console.error("Error deleting review", error);
    }
  };

  useEffect(() => {
    if (productId) {
      checkUserPermission();
      fetchReviews();
    }
  }, [productId]);

  return (
    <div className="space-y-8 mt-10 max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="badge badge-lg">
          {Array.isArray(reviews?.results) ? reviews.results.length : reviews.length}{" "}
          {reviews.length === 1 ? "Review" : "Reviews"}
        </div>
      </div>

      {userCanReview && (
        <div className="card bg-base-100 shadow-lg border border-base-200 rounded-xl overflow-hidden">
          <div className="card-body">
            <h3 className="card-title text-lg">Write a Review</h3>
            <ReviewForm productId={productId} fetchReviews={fetchReviews} />
          </div>
        </div>
      )}

      <div className="divider"></div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <ReviewList
          reviews={reviews}
          user={user}
          editReview={editReview}
          setEditReview={setEditReview}
          editingId={editingId}
          setEditingId={setEditingId}
          handleUpdateReview={handleUpdateReview}
          handleDeleteReview={handleDeleteReview}
        />
      )}
    </div>
  );
};

export default ReviewSection;
