import { Clock3, MapPin } from "lucide-react";

function ContactDetails() {
  return (
    <div className="space-y-4">
      {/* Working Hours */}
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-6
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              grid
              h-12
              w-12
              shrink-0
              place-items-center
              rounded-2xl
              bg-white/10
              text-amber-400
            "
          >
            <Clock3 size={21} />
          </div>

          <div>
            <p className="text-sm font-black text-white">
              Customer Support
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Available for travel enquiries and
              route assistance.
            </p>

            <p className="mt-3 text-xs font-bold text-amber-300">
              24/7 Support
            </p>
          </div>
        </div>
      </div>

      {/* Service Location */}
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-6
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              grid
              h-12
              w-12
              shrink-0
              place-items-center
              rounded-2xl
              bg-white/10
              text-amber-400
            "
          >
            <MapPin size={21} />
          </div>

          <div>
            <p className="text-sm font-black text-white">
              Service Area
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Mumbai, Navi Mumbai, Thane and selected
              outstation destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;