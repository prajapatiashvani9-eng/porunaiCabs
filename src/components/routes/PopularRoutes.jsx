import { Plane, MapPinned } from "lucide-react";

import { routes } from "./routesData";
import RouteCard from "./RouteCard";

function PopularRoutes() {
  return (
    <div className="mt-14">

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