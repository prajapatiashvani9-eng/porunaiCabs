import {
  CarFront,
  Phone,
  ArrowRight,
  Star,
} from "lucide-react";

import TariffFeatures from "./TariffFeatures";

function TariffCard({ tariff }) {
  return (
    <div
      className={`
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-[2rem]
        border
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]

        ${
          tariff.popular
            ? "border-amber-400 shadow-[0_15px_50px_rgba(251,191,36,0.15)]"
            : "border-slate-200"
        }
      `}
    >
      {/* Popular Badge */}
      {tariff.popular && (
        <div
          className="
            absolute
            right-5
            top-5
            flex
            items-center
            gap-1.5
            rounded-full
            bg-amber-400
            px-3
            py-1.5
            text-[10px]
            font-black
            uppercase
            tracking-wider
            text-slate-950
          "
        >
          <Star size={12} fill="currentColor" />
          Popular
        </div>
      )}

      {/* Top Icon */}
      <div
        className="
          grid
          h-14
          w-14
          place-items-center
          rounded-2xl
          bg-slate-950
          text-amber-400
          transition-all
          duration-500
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        <CarFront size={25} />
      </div>

      {/* Type */}
      <p
        className="
          mt-7
          text-xs
          font-extrabold
          uppercase
          tracking-[0.2em]
          text-amber-600
        "
      >
        {tariff.type}
      </p>

      {/* Title */}
      <h3
        className="
          mt-2
          text-2xl
          font-black
          text-slate-900
        "
      >
        {tariff.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          min-h-[48px]
          text-sm
          leading-6
          text-slate-500
        "
      >
        {tariff.description}
      </p>

      {/* Price */}
      <div className="mt-7 flex items-end gap-1">
        <span
          className="
            text-4xl
            font-black
            tracking-tight
            text-slate-950
          "
        >
          {tariff.price}
        </span>

        <span
          className="
            mb-1
            text-sm
            font-semibold
            text-slate-500
          "
        >
          {tariff.unit}
        </span>
      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-slate-200" />

      {/* Features */}
      <TariffFeatures features={tariff.features} />

      {/* CTA */}
      <a
        href="tel:+91 7358559444"
        className={`
          mt-auto
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          px-5
          py-3.5
          text-sm
          font-extrabold
          transition-all
          duration-300

          ${
            tariff.popular
              ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
              : "bg-slate-950 text-white hover:bg-amber-400 hover:text-slate-950"
          }
        `}
      >
        <Phone size={17} />

        Call to Enquire

        <ArrowRight
          size={17}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </a>
    </div>
  );
}

export default TariffCard;