import {
  MapPin,
  Building2,
} from "lucide-react";

import { serviceAreas } from "./routesData";

function ServiceAreas() {
  return (
    <div className="mt-16">
      <div className="mb-6 flex items-center gap-3">
        <div
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-xl
            bg-white/10
            text-amber-400
          "
        >
          <Building2 size={20} />
        </div>

        <div>
          <h3 className="text-xl font-black text-white">
            Areas We Serve
          </h3>

          <p className="text-sm text-slate-500">
            Local taxi services across major areas
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {serviceAreas.map((area) => (
          <div
            key={area}
            className="
              group
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-3
              text-sm
              font-semibold
              text-slate-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-amber-400/30
              hover:bg-amber-400
              hover:text-slate-950
            "
          >
            <MapPin
              size={15}
              className="
                text-amber-400
                transition
                duration-300
                group-hover:text-slate-950
              "
            />

            {area}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceAreas;