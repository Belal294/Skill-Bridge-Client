import { useForm } from "react-hook-form";
import StarRating from "./StarRating";
import { toast } from "react-hot-toast";
import authApiClient from "../../services/auth-api-client";

const ReviewForm = ({ productId, fetchReviews }) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const ratingValue = watch("ratings", 0);

  const onSubmit = async (data) => {
    const payload = {
      rating: data.ratings,
      comment: data.comment,
    };

    try {
      await authApiClient.post(`/services/${productId}/reviews/`, payload);
      toast.success("Review submitted successfully!");
      reset();
      fetchReviews();
    } catch (error) {
      console.error("Review submit error:", error.response?.data || error.message);
      const serverMessage =
        error.response?.data?.error ||
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Failed to submit review.";
      toast.error(serverMessage);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto w-full"
    >
      {/* Rating Input */}
      <div className="w-full">
        <label className="block font-semibold mb-2 text-gray-700">
          Rating
        </label>
        <StarRating
          onChange={(value) => setValue("ratings", value, { shouldValidate: true })}
          rating={ratingValue}
        />
        <input
          type="hidden"
          {...register("ratings", { required: "Rating is required" })}
        />
        {errors.ratings && (
          <p className="text-red-500 text-sm mt-1">{errors.ratings.message}</p>
        )}
      </div>

      {/* Comment Input */}
      <div className="w-full">
        <label className="block font-semibold mb-2 text-gray-700">
          Your Review
        </label>
        <textarea
          {...register("comment", {
            required: "Comment is required",
            minLength: { value: 5, message: "Comment must be at least 5 characters." },
          })}
          className="w-full textarea textarea-bordered min-h-[120px] focus:textarea-primary resize-none"
          placeholder="Share your experience with this product..."
        />
        {errors.comment && (
          <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-primary w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner loading-xs mr-2"></span>
              Submitting...
            </>
          ) : (
            "Submit Review"
          )}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
