import { CarFront } from "lucide-react";

function TariffHeading() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-amber-100
          px-4
          py-2
          text-xs
          font-extrabold
          uppercase
          tracking-[0.2em]
          text-amber-700
        "
      >
        <CarFront size={14} />
        Tariff & Packages
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
        Simple & Transparent
        <span className="text-amber-500"> Pricing</span>
      </h2>

      <p
        className="
          mt-5
          text-base
          leading-7
          text-slate-600
          sm:text-lg
        "
      >
        Choose a travel option that suits your journey.
        Contact us for the latest fare based on your
        route, vehicle and travel requirements.
      </p>
    </div>
  );
}

export default TariffHeading;