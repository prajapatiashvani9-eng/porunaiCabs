import { Plane } from "lucide-react";

import { routes } from "./routesData";
import RouteCard from "./RouteCard";

function PopularRoutes() {
  return (
    <div className="mt-14">
      <div className="mb-6 flex items-center gap-3">
        <div
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-xl
            bg-amber-400
            text-slate-950
          "
        >
          <Plane size={20} />
        </div>

        <div>
          <h3 className="text-xl font-black text-white">
            Popular Outstation Routes
          </h3>

          <p className="text-sm text-slate-500">
            Comfortable rides for your long journeys
          </p>
        </div>
      </div>

      <div
        className="
          grid
          gap-4
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {routes.map((route) => (
          <RouteCard
            key={`${route.from}-${route.to}`}
            route={route}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularRoutes;
