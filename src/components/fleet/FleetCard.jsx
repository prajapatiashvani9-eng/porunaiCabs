import { ArrowUpRight } from "lucide-react";
import FleetDetails from "./FleetDetails";

function FleetCard({ vehicle, index }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        bg-slate-950
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/20
            to-transparent
          "
        />

        {/* Number */}
        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            border
            border-white/20
            bg-black/20
            px-3
            py-1.5
            text-xs
            font-black
            text-white
            backdrop-blur-md
          "
        >
          0{index + 1}
        </span>

        {/* Top Right Arrow */}
        <div
          className="
            absolute
            right-5
            top-5
            grid
            h-11
            w-11
            place-items-center
            rounded-full
            bg-white/10
            text-white
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:rotate-45
            group-hover:bg-amber-400
            group-hover:text-slate-950
          "
        >
          <ArrowUpRight size={20} />
        </div>

        {/* Vehicle Name */}
        <div className="absolute bottom-5 left-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
            Available
          </p>

          <h3 className="mt-1 text-3xl font-black text-white">
            {vehicle.name}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <p className="text-sm leading-6 text-slate-400">
          {vehicle.description}
        </p>

        {/* Vehicle Details */}
        <FleetDetails
          passengers={vehicle.passengers}
          luggage={vehicle.luggage}
        />

        {/* CTA */}
        <a
          href="#contact"
          className="
            mt-6
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-white/10
            px-4
            py-3
            text-sm
            font-bold
            text-white
            transition-all
            duration-300
            hover:border-amber-400
            hover:bg-amber-400
            hover:text-slate-950
          "
        >
          Enquire About This Cab

          <ArrowUpRight
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </a>
      </div>
    </div>
  );
}

export default FleetCard;