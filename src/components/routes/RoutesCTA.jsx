import { ArrowRight } from "lucide-react";

function RoutesCTA() {
  return (
    <div
      className="
        mt-14
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-r
        from-white/[0.06]
        to-white/[0.02]
        p-7
        sm:p-9
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Don't see your destination?
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            Tell us where you want to go.
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Contact us to check availability for your
            preferred route.
          </p>
        </div>

        <a
          href="#contact"
          className="
            inline-flex
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-amber-400
            px-5
            py-3
            text-sm
            font-extrabold
            text-slate-950
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-amber-300
            hover:shadow-lg
            hover:shadow-amber-400/20
          "
        >
          Check Your Route

          <ArrowRight size={17} />
        </a>
      </div>
    </div>
  );
}

export default RoutesCTA;