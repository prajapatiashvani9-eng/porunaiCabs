import { Sparkles } from "lucide-react";

function WhyChooseUsHeading() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-amber-400/20
          bg-amber-400/10
          px-4
          py-2
          text-xs
          font-extrabold
          uppercase
          tracking-[0.2em]
          text-amber-300
        "
      >
        <Sparkles size={14} />
        Why Choose Us
      </span>

      <h2
        className="
          mt-5
          text-3xl
          font-black
          tracking-tight
          text-white
          sm:text-4xl
          lg:text-5xl
        "
      >
        More Than Just a
        <span className="text-amber-400">
          {" "}
          Taxi Ride
        </span>
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          text-base
          leading-7
          text-slate-400
          sm:text-lg
        "
      >
        We focus on making every journey comfortable,
        convenient and easy from pickup to drop-off.
      </p>
    </div>
  );
}

export default WhyChooseUsHeading;