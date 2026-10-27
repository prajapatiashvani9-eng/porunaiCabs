import ReviewsHeading from "./reviews/ReviewsHeading";
import ReviewsGrid from "./reviews/ReviewsGrid";
import ReviewsCTA from "./reviews/ReviewsCTA";

function Reviews() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Decoration */}
      <div
        className="
          absolute
          -left-40
          top-10
          h-80
          w-80
          rounded-full
          bg-amber-100/70
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-10
          h-80
          w-80
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <ReviewsHeading />

        <ReviewsGrid />

        <ReviewsCTA />
      </div>
    </section>
  );
}

export default Reviews;