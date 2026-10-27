import { ArrowLeft, ArrowRight } from "lucide-react";

function ReviewsCTA() {
  return (
    <div
      className="
        mt-10
        flex
        flex-col
        items-center
        justify-between
        gap-5
        rounded-3xl
        bg-slate-950
        px-7
        py-7
        sm:flex-row
        sm:px-9
      "
    >
      <div>
        <p className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
          Your Journey Matters
        </p>

        <h3 className="mt-2 text-xl font-black text-white">
          Have a travel requirement?
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Talk to us about your next ride.
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Previous */}
        <button
          type="button"
          aria-label="Previous reviews"
          className="
            grid
            h-11
            w-11
            place-items-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-white
            transition-all
            duration-300
            hover:-translate-x-1
            hover:border-amber-400/30
            hover:bg-white/10
          "
        >
          <ArrowLeft size={18} />
        </button>

        {/* Next */}
        <button
          type="button"
          aria-label="Next reviews"
          className="
            grid
            h-11
            w-11
            place-items-center
            rounded-xl
            bg-amber-400
            text-slate-950
            transition-all
            duration-300
            hover:translate-x-1
            hover:bg-amber-300
          "
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default ReviewsCTA;