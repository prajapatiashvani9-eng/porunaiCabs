import { Star, Quote } from "lucide-react";

function ReviewCard({ review }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-amber-200
        hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
      "
    >
      {/* Quote Icon */}
      <div
        className="
          absolute
          right-6
          top-6
          text-slate-100
          transition
          duration-500
          group-hover:scale-110
          group-hover:text-amber-100
        "
      >
        <Quote size={50} fill="currentColor" />
      </div>

      {/* Stars */}
      <div className="relative flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className="text-amber-400"
            fill="currentColor"
          />
        ))}
      </div>

      {/* Review Text */}
      <p
        className="
          relative
          mt-6
          min-h-[120px]
          text-sm
          leading-7
          text-slate-600
        "
      >
        “{review.review}”
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-slate-100" />

      {/* Customer */}
      <div className="flex items-center gap-3">
        <div
          className="
            grid
            h-12
            w-12
            shrink-0
            place-items-center
            rounded-full
            bg-slate-950
            text-sm
            font-black
            text-amber-400
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          {review.initials}
        </div>

        <div>
          <h3 className="text-sm font-black text-slate-900">
            {review.name}
          </h3>

          <p className="mt-1 text-xs font-semibold text-slate-400">
            {review.role}
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-amber-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </div>
  );
}

export default ReviewCard;