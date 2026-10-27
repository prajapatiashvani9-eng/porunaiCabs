import { reviews } from "./reviewsData";
import ReviewCard from "./ReviewCard";

function ReviewsGrid() {
  return (
    <div
      className="
        mt-14
        grid
        gap-5
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {reviews.map((review) => (
        <ReviewCard
          key={review.name}
          review={review}
        />
      ))}
    </div>
  );
}

export default ReviewsGrid;