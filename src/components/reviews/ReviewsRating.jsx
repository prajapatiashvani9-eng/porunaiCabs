import { Star } from "lucide-react";

function ReviewsRating() {
  return (
    <div
      className="
        flex
        w-fit
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        px-5
        py-4
      "
    >
      <div
        className="
          grid
          h-11
          w-11
          place-items-center
          rounded-xl
          bg-amber-400
          text-slate-950
        "
      >
        <Star size={21} fill="currentColor" />
      </div>

      <div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              className="text-amber-400"
              fill="currentColor"
            />
          ))}
        </div>

        <p className="mt-1 text-xs font-semibold text-slate-500">
          Customer Experience
        </p>
      </div>
    </div>
  );
}

export default ReviewsRating;