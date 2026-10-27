import { Navigation } from "lucide-react";

function RoutesHeading() {
  return (
    <div className="mx-auto max-w-2xl text-center">
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
        <Navigation size={14} />
        Routes & Areas
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
        We Take You
        <span className="text-amber-400"> Anywhere</span>
      </h2>

      <p
        className="
          mt-5
          text-base
          leading-7
          text-slate-400
          sm:text-lg
        "
      >
        From local city rides to popular outstation
        destinations, travel comfortably on the routes
        that matter to you.
      </p>
    </div>
  );
}

export default RoutesHeading;