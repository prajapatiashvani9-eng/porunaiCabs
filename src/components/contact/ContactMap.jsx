import { MapPin, Navigation } from "lucide-react";

function ContactMap() {
  return (
    <div
      className="
        relative
        min-h-[480px]
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-slate-900
        shadow-2xl
      "
    >
      {/* Google Maps Embed */}
      <iframe
        title="SwiftRide Cabs Location"
        src="https://www.google.com/maps?q=Mumbai,India&output=embed"
        className="
          absolute
          inset-0
          h-full
          w-full
          border-0
          grayscale
          transition
          duration-700
          hover:grayscale-0
        "
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Map Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-slate-950/50
          via-transparent
          to-transparent
        "
      />

      {/* Location Card */}
      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
          rounded-2xl
          border
          border-white/10
          bg-slate-950/90
          p-5
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              grid
              h-11
              w-11
              shrink-0
              place-items-center
              rounded-xl
              bg-amber-400
              text-slate-950
            "
          >
            <MapPin size={20} />
          </div>

          <div>
            <p className="text-sm font-black text-white">
              SwiftRide Cabs
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Mumbai, Maharashtra, India
            </p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Mumbai,India"
          target="_blank"
          rel="noreferrer"
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-white/10
            px-4
            py-3
            text-xs
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-amber-400
            hover:text-slate-950
          "
        >
          <Navigation size={15} />
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export default ContactMap;