function FooterBrand() {
  return (
    <div>
      <a
        href="#home"
        className="group inline-flex items-center gap-3"
      >
        <div
          className="
            grid
            h-11
            w-11
            place-items-center
            rounded-xl
            bg-amber-400
            text-xl
            font-black
            text-slate-950
            transition-all
            duration-300
            group-hover:rotate-6
            group-hover:scale-105
          "
        >
          S
        </div>

        <div>
          <p className="text-lg font-black">
            SwiftRide
          </p>

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-amber-300
            "
          >
            Call Taxi
          </p>
        </div>
      </a>

      <p
        className="
          mt-6
          max-w-sm
          text-sm
          leading-7
          text-slate-400
        "
      >
        Reliable taxi services for local travel,
        airport transfers and outstation journeys.
        Comfortable rides with easy customer support.
      </p>

      {/* Social Links */}
      <div className="mt-6 flex items-center gap-3">
        <a
          href="#"
          aria-label="Facebook"
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-xs
            font-black
            text-slate-400
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-amber-400/30
            hover:bg-amber-400
            hover:text-slate-950
          "
        >
          FB
        </a>

        <a
          href="#"
          aria-label="Instagram"
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-xs
            font-black
            text-slate-400
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-amber-400/30
            hover:bg-amber-400
            hover:text-slate-950
          "
        >
          IG
        </a>

        <a
          href="#"
          aria-label="LinkedIn"
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-xs
            font-black
            text-slate-400
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-amber-400/30
            hover:bg-amber-400
            hover:text-slate-950
          "
        >
          IN
        </a>
      </div>
    </div>
  );
}

export default FooterBrand;