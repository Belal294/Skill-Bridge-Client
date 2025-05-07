import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/auth-api-client";

const MyReviews = () => {
  const { serviceId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await apiClient.get(`/services/${serviceId}/reviews/my_reviews/`);
        setReviews(response.data);
      } catch (error) {
        setError("Error fetching reviews");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (serviceId) {
      fetchReviews();
    }
  }, [serviceId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Your Reviews for Service #{serviceId}</h2>
      {reviews.length === 0 ? (
        <p>No reviews found</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Rating: {review.rating} Stars</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReviews;
