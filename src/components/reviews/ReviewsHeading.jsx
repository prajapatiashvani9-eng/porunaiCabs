import { MessageSquareQuote } from "lucide-react";
import ReviewsRating from "./ReviewsRating";

function ReviewsHeading() {
  return (
    <div
      className="
        flex
        flex-col
        justify-between
        gap-6
        lg:flex-row
        lg:items-end
      "
    >
      <div className="max-w-2xl">
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-amber-100
            px-4
            py-2
            text-xs
            font-extrabold
            uppercase
            tracking-[0.2em]
            text-amber-700
          "
        >
          <MessageSquareQuote size={14} />
          Customer Reviews
        </span>

        <h2
          className="
            mt-5
            text-3xl
            font-black
            tracking-tight
            text-slate-900
            sm:text-4xl
            lg:text-5xl
          "
        >
          What Our Customers
          <span className="text-amber-500">
            {" "}
            Say
          </span>
        </h2>

        <p
          className="
            mt-5
            max-w-xl
            text-base
            leading-7
            text-slate-600
            sm:text-lg
          "
        >
          We aim to make every journey comfortable,
          convenient and stress-free.
        </p>
      </div>

      <ReviewsRating />
    </div>
  );
}

export default ReviewsHeading;