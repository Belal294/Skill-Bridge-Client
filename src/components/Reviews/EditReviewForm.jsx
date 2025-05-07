import StarRating from "./StarRating";

const EditReviewForm = ({
  editReview,
  setEditReview,
  onCancelEdit,
  onSave,
}) => {
  const handleRatingChange = (value) => {
 
    setEditReview((prev) => ({ ...prev, rating: value }));
  };

  const handleCommentChange = (e) => {
    setEditReview((prev) => ({ ...prev, comment: e.target.value }));
  };

  return (
    <div className="mt-4 space-y-4 bg-base-200 p-4 rounded-lg">
      <div>
        <label className="label-text font-medium mb-1 block">Rating</label>
        <StarRating
          rating={editReview.rating} 
          onChange={handleRatingChange}
        />
      </div>
      <div>
        <label className="label-text font-medium mb-1 block">Comment</label>
        <textarea
          value={editReview.comment}
          onChange={handleCommentChange}
          className="textarea textarea-bordered w-full min-h-[100px]"
          placeholder="Write your review..."
        />
      </div>
      <div className="flex gap-2">
        <button onClick={onSave} className="btn btn-sm btn-success">
          Save Changes
        </button>
        <button onClick={onCancelEdit} className="btn btn-sm btn-ghost">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditReviewForm;
