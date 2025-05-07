import ReviewCard from "./ReviewCard";

const ReviewList = ({
  reviews,
  user,
  editReview,
  setEditReview,
  editingId,
  setEditingId,
  handleUpdateReview,
  handleDeleteReview,
}) => {
  const reviewArray = Array.isArray(reviews?.results)
    ? reviews.results
    : Array.isArray(reviews)
    ? reviews
    : [];

  if (reviewArray.length === 0) {
    return <p className="text-gray-500 italic">No reviews to display.</p>;
  }

  return reviewArray.map((review) => {
    const reviewId = Number(review.id);
    const isEditing = Number(editingId) === reviewId;

    return (
      <ReviewCard
        key={reviewId}
        review={review}
        isEditing={isEditing}
        user={user}
        editReview={editReview}
        setEditReview={setEditReview}
        onEditClick={() => {
          setEditingId(reviewId);
          setEditReview({
            ratings: review.ratings,
            comment: review.comment,
          });
        }}
        onCancelEdit={() => setEditingId(null)}
        onSaveEdit={() => handleUpdateReview(reviewId)}
        onDeleteClick={() => handleDeleteReview(reviewId)}
      />
    );
  });
};

export default ReviewList;
