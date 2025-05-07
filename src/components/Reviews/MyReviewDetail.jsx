import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/auth-api-client";

const MyReviewDetail = () => {
  const { serviceId } = useParams();
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await apiClient.get(`/services/${serviceId}/reviews/my_review/`);
        setReview(response.data); 
      } catch (error) {
        setError("Could not fetch your review.");
        console.error(error);
      }
    };
  
    fetchReview();
  }, [serviceId]);
  

  if (error) return <div>{error}</div>;
  if (!review) return <div>Loading...</div>;

  return (
    <div>
      <h3>Your Review on Service #{serviceId}</h3>
      <p><strong>Rating:</strong> {review.rating}</p>
      <p><strong>Comment:</strong> {review.comment}</p>
    </div>
  );
};

export default MyReviewDetail;
