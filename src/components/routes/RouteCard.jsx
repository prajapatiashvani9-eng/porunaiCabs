import {
  MapPin,
  ArrowRight,
  Navigation,
  Clock,
  IndianRupee,
  Route as RouteIcon,
} from "lucide-react";

function RouteCard({ route, index = 0 }) {
  const whatsappMessage = encodeURIComponent(
    `Hello, I want to enquire about an outstation cab.\n\nPickup: ${route.from}\nDestination: ${route.to}\nDistance: ${route.distance}\nDuration: ${route.duration}\nPackage Cost: ${route.packageCost}`
  );

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-slate-900/80
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-amber-400/40
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]
      "
    >
      {/* Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-transparent" />

      <div className="flex flex-1 flex-col p-5">
        {/* Card Header */}
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
            <RouteIcon size={13} />
            {route.type}
          </span>

          <span className="text-xs font-medium text-slate-500">
            Route {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Pickup */}
        <div className="mt-6 flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-amber-400 transition-colors duration-300 group-hover:bg-amber-400/10">
            <MapPin size={19} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Pickup Location
            </p>

            <h4 className="mt-1 break-words text-base font-bold text-white">
              {route.from}
            </h4>
          </div>
        </div>

        {/* Route Connector */}
        <div className="ml-5 flex h-9 items-center">
          <div className="h-full border-l-2 border-dashed border-slate-700" />

          <ArrowRight
            size={15}
            className="ml-3 text-amber-400"
          />
        </div>

        {/* Destination */}
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-400 text-slate-950 transition-transform duration-300 group-hover:scale-105">
            <Navigation size={18} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Destination
            </p>

            <h4 className="mt-1 break-words text-base font-bold text-white">
              {route.to}
            </h4>
          </div>
        </div>

        {/* Trip Information */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/[0.07] bg-black/20 p-3">
            <div className="flex items-center gap-2 text-slate-400">
              <RouteIcon size={15} className="text-amber-400" />

              <span className="text-[10px] font-bold uppercase tracking-wider">
                Distance
              </span>
            </div>

            <p className="mt-2 text-lg font-extrabold text-white">
              {route.distance}
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-black/20 p-3">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock size={15} className="text-amber-400" />

              <span className="text-[10px] font-bold uppercase tracking-wider">
                Duration
              </span>
            </div>

            <p className="mt-2 text-lg font-extrabold text-white">
              {route.duration}
            </p>
          </div>
        </div>

        {/* Flexible Space */}
        <div className="flex-1" />

        {/* Package Price */}
        <div className="mt-5 border-t border-white/10 pt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Package Cost
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1 text-2xl font-black text-amber-400">
              <IndianRupee size={22} strokeWidth={2.5} />

              <span>{route.packageCost?.replace("₹", "")}</span>
            </div>

            <a
              href={`https://wa.me/919999999999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about a taxi from ${route.from} to ${route.to}`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-amber-400
                px-4
                py-3
                text-xs
                font-extrabold
                text-slate-950
                transition-all
                duration-300
                hover:bg-amber-300
                hover:shadow-lg
                hover:shadow-amber-400/10
              "
            >
              Enquire Now

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RouteCard;