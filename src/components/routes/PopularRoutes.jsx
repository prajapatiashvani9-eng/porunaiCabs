import { Plane, MapPinned } from "lucide-react";

import { routes } from "./routesData";
import RouteCard from "./RouteCard";

function PopularRoutes() {
  return (
    <div className="mt-14">
      {/* Section Heading */}
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2">
            <Plane size={15} className="text-amber-400" />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300">
              Outstation Taxi Services
            </span>
          </div>

          <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
            Popular Outstation
            <span className="block text-amber-400">
              Routes from Tirunelveli
            </span>
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Explore our popular travel destinations with route distances,
            estimated journey durations and package prices.
          </p>
        </div>

        {/* Route Count */}
        <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/10 text-amber-400">
            <MapPinned size={20} />
          </div>

          <div>
            <p className="text-xl font-black text-white">
              {routes.length}+
            </p>

            <p className="text-xs text-slate-400">
              Travel Destinations
            </p>
          </div>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {routes.map((route, index) => (
          <RouteCard
            key={`${route.from}-${route.to}`}
            route={route}
            index={index}
          />
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:items-center sm:p-5">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-400/10 text-amber-400">
          <Plane size={18} />
        </div>

        <div>
          <p className="text-sm font-bold text-white">
            Planning an outstation trip?
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
            Contact us to confirm availability, package inclusions and
            your travel requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopularRoutes;