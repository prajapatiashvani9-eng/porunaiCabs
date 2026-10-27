import {
  MapPin,
  ArrowRight,
  Navigation,
} from "lucide-react";

function RouteCard({ route }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-5
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-amber-400/30
        hover:bg-white/[0.07]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-amber-400/10
          opacity-0
          blur-2xl
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Route Type */}
      <span
        className="
          relative
          inline-flex
          rounded-full
          bg-amber-400/10
          px-3
          py-1
          text-[10px]
          font-extrabold
          uppercase
          tracking-wider
          text-amber-300
        "
      >
        {route.type}
      </span>

      {/* Route Details */}
      <div className="relative mt-6">
        <div className="flex items-center gap-3">
          <div
            className="
              grid
              h-9
              w-9
              shrink-0
              place-items-center
              rounded-full
              bg-slate-800
              text-amber-400
              transition
              duration-300
              group-hover:scale-110
            "
          >
            <MapPin size={17} />
          </div>

          <div className="h-px flex-1 border-t border-dashed border-slate-700" />

          <div
            className="
              grid
              h-9
              w-9
              shrink-0
              place-items-center
              rounded-full
              bg-amber-400
              text-slate-950
              transition
              duration-300
              group-hover:scale-110
            "
          >
            <Navigation size={16} />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="font-bold text-white">
            {route.from}
          </span>

          <ArrowRight
            size={16}
            className="
              text-slate-600
              transition
              duration-300
              group-hover:translate-x-1
              group-hover:text-amber-400
            "
          />

          <span className="font-bold text-white">
            {route.to}
          </span>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          {route.distance}
        </p>
      </div>
    </div>
  );
}

export default RouteCard;