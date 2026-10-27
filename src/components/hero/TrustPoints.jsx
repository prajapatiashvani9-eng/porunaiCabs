import {
  MapPin,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import TrustItem from "./TrustItem";

function TrustPoints() {
  return (
    <div
      className="
        mt-10
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-3
      "
    >
      <TrustItem
        icon={<ShieldCheck size={18} />}
        title="Trusted"
        text="Professional Service"
      />

      <TrustItem
        icon={<Clock3 size={18} />}
        title="On Time"
        text="Timely Pickup"
      />

      <TrustItem
        icon={<MapPin size={18} />}
        title="Easy Travel"
        text="Multiple Routes"
      />
    </div>
  );
}

export default TrustPoints;