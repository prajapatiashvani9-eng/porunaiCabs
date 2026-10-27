import { CarFront } from "lucide-react";

function FleetHeading() {
  return (
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <div className="max-w-2xl">
        <span
          className="
            inline-flex
            rounded-full
            bg-slate-100
            px-4
            py-2
            text-xs
            font-extrabold
            uppercase
            tracking-[0.2em]
            text-slate-600
          "
        >
          Our Fleet
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
          Choose the Right
          <span className="text-amber-500"> Ride</span>
        </h2>

        <p
          className="
            mt-5
            max-w-xl
            text-base
            leading-7
            text-slate-600
          "
        >
          Travel comfortably with vehicle options suited
          for solo trips, families, groups and premium
          business travel.
        </p>
      </div>

      {/* Small Badge */}
      <div
        className="
          hidden
          items-center
          gap-3
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-4
          lg:flex
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
          <CarFront size={22} />
        </div>

        <div>
          <p className="text-sm font-black text-slate-900">
            Comfortable Fleet
          </p>

          <p className="text-xs text-slate-500">
            Clean • Reliable • Well Maintained
          </p>
        </div>
      </div>
    </div>
  );
}

export default FleetHeading;