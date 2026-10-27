import { ArrowUpRight } from "lucide-react";

function ServicesCTA() {
  return (
    <div
      className="
        mt-12
        flex
        flex-col
        items-center
        justify-between
        gap-5
        rounded-3xl
        bg-slate-950
        px-7
        py-7
        sm:flex-row
        sm:px-10
      "
    >
      <div>
        <h3 className="text-xl font-black text-white">
          Need a ride for your next journey?
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Call us and discuss your travel requirements.
        </p>
      </div>

      <a
        href="tel:+919999999999"
        className="
          inline-flex
          shrink-0
          items-center
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
        Call Now

        <ArrowUpRight size={17} />
      </a>
    </div>
  );
}

export default ServicesCTA;