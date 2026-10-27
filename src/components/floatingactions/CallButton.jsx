import { Phone } from "lucide-react";

function CallButton() {
  return (
    <a
      href="tel:+91 7358559444"
      aria-label="Call SwiftRide Cabs"
      className="
        group
        grid
        h-14
        w-14
        place-items-center
        rounded-full
        bg-amber-400
        text-slate-950
        shadow-xl
        shadow-amber-400/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:bg-amber-300
        sm:h-16
        sm:w-16
      "
    >
      <Phone
        size={24}
        className="
          transition-transform
          duration-300
          group-hover:rotate-12
          sm:h-7
          sm:w-7
        "
      />

      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute
          right-full
          mr-3
          hidden
          whitespace-nowrap
          rounded-lg
          bg-slate-950
          px-3
          py-2
          text-xs
          font-bold
          text-white
          opacity-0
          shadow-lg
          transition-all
          duration-300
          group-hover:opacity-100
          sm:block
        "
      >
        Call Now
      </span>
    </a>
  );
}

export default CallButton;