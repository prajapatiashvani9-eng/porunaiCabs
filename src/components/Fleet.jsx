import { fleet } from "./fleet/fleetData";

import FleetHeading from "./fleet/FleetHeading";
import FleetCard from "./fleet/FleetCard";
import FleetBottomMessage from "./fleet/FleetBottomMessage";

function Fleet() {
  return (
    <section
      id="fleet"
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
          left-1/2
          top-0
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-amber-100/60
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <FleetHeading />

        {/* Fleet Cards */}
        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {fleet.map((vehicle, index) => (
            <FleetCard
              key={vehicle.name}
              vehicle={vehicle}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <FleetBottomMessage />
      </div>
    </section>
  );
}

export default Fleet;