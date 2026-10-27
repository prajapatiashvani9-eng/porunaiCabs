import { ShieldCheck, ArrowUpRight } from "lucide-react";

function WhyChooseUsCTA() {
  return (
    <div
      className="
        mt-12
        flex
        flex-col
        gap-6
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-7
        sm:p-9
        lg:flex-row
        lg:items-center
        lg:justify-between
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
            bg-amber-400
            text-slate-950
          "
        >
          <ShieldCheck size={23} />
        </div>

        <div>
          <h3 className="text-xl font-black text-white">
            Ready for a comfortable journey?
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Contact our team and discuss your travel
            requirements.
          </p>
        </div>
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
          px-6
          py-3.5
          text-sm
          font-extrabold
          text-slate-950
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-amber-300
          hover:shadow-xl
          hover:shadow-amber-400/20
        "
      >
        Contact Us
        <ArrowUpRight size={17} />
      </a>
    </div>
  );
}

export default WhyChooseUsCTA;