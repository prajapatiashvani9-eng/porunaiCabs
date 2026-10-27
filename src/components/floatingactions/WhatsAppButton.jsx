import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        group
        relative
        grid
        h-14
        w-14
        place-items-center
        rounded-full
        bg-emerald-500
        text-white
        shadow-xl
        shadow-emerald-500/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:bg-emerald-400
        sm:h-16
        sm:w-16
      "
    >
      {/* Pulse */}
      <span
        className="
          absolute
          inset-0
          -z-10
          animate-ping
          rounded-full
          bg-emerald-400/40
        "
      />

      <MessageCircle
        size={24}
        className="
          transition-transform
          duration-300
          group-hover:rotate-6
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
        Chat on WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;