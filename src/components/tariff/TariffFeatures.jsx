import { Check } from "lucide-react";

function TariffFeatures({ features }) {
  return (
    <div className="space-y-4">
      {features.map((feature) => (
        <div
          key={feature}
          className="
            flex
            items-center
            gap-3
            text-sm
            text-slate-600
          "
        >
          <span
            className="
              grid
              h-5
              w-5
              shrink-0
              place-items-center
              rounded-full
              bg-amber-100
              text-amber-600
            "
          >
            <Check size={13} strokeWidth={3} />
          </span>

          {feature}
        </div>
      ))}
    </div>
  );
}

export default TariffFeatures;