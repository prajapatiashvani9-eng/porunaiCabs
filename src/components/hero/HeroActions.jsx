import {
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

function HeroActions() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      {/* Call Button */}
      <a
        href="tel:+91 7358559444"
        className="
          group
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-amber-400
          px-6 py-4
          font-extrabold
          text-slate-950
          shadow-xl
          shadow-amber-400/10
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-amber-300
          hover:shadow-2xl
          hover:shadow-amber-400/20
        "
      >
        <Phone size={19} />

        Call Now

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91 7358559444"
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-white/15
          bg-white/5
          px-6 py-4
          font-extrabold
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-emerald-400/40
          hover:bg-emerald-500
          hover:text-white
        "
      >
        <MessageCircle size={20} />

        WhatsApp Us
      </a>
    </div>
  );
}

export default HeroActions;