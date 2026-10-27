import { tariffs } from "./tariff/tariffData";

import TariffHeading from "./tariff/TariffHeading";
import TariffCard from "./tariff/TariffCard";
import TariffNote from "./tariff/TariffNote";

function Tariff() {
  return (
    <section
      id="tariff"
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Decorations */}
      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-amber-100
          blur-3xl
          opacity-70
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-blue-100
          blur-3xl
          opacity-50
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <TariffHeading />

        {/* Pricing Cards */}
        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-3
            lg:items-stretch
          "
        >
          {tariffs.map((tariff) => (
            <TariffCard
              key={tariff.title}
              tariff={tariff}
            />
          ))}
        </div>

        {/* Pricing Note */}
        <TariffNote />
      </div>
    </section>
  );
}

export default Tariff;