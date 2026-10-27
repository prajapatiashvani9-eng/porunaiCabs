import {
  Users,
  BriefcaseBusiness,
} from "lucide-react";

function FleetDetails({ passengers, luggage }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      {/* Passengers */}
      <div
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-3
          py-3
        "
      >
        <Users
          size={17}
          className="text-amber-400"
        />

        <span className="text-xs font-semibold text-slate-300">
          {passengers}
        </span>
      </div>

      {/* Luggage */}
      <div
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-3
          py-3
        "
      >
        <BriefcaseBusiness
          size={17}
          className="text-amber-400"
        />

        <span className="text-xs font-semibold text-slate-300">
          {luggage}
        </span>
      </div>
    </div>
  );
}

export default FleetDetails;