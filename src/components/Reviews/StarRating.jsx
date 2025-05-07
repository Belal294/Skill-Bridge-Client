import { FaStar } from "react-icons/fa";

const StarRating = ({ onChange, rating = 0 }) => {
  return (
    <div className="flex space-x-1 mb-2" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <FaStar
          key={value}
          size={24}
          onClick={() => onChange(value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onChange(value);
            }
          }}
          role="radio"
          aria-checked={rating === value}
          tabIndex={0}
          className={`cursor-pointer transition-colors duration-200 focus:outline-none ${
            value <= rating ? "text-yellow-300" : "text-gray-300"
          } hover:text-yellow-300`}
        />
      ))}
    </div>
  );
};

export default StarRating;
