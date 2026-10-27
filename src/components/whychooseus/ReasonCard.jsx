import { ArrowUpRight } from "lucide-react";

function ReasonCard({ reason, index }) {
  const Icon = reason.icon;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        backdrop-blur-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-amber-400/30
        hover:bg-white/[0.07]
      "
    >
      {/* Card Glow */}
      <div
        className="
          absolute
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-amber-400/10
          opacity-0
          blur-2xl
          transition-all
          duration-500
          group-hover:scale-150
          group-hover:opacity-100
        "
      />

      {/* Number */}
      <span
        className="
          absolute
          right-5
          top-5
          text-xs
          font-black
          text-white/10
          transition
          duration-300
          group-hover:text-amber-400/30
        "
      >
        0{index + 1}
      </span>

      {/* Icon */}
      <div
        className="
          relative
          grid
          h-14
          w-14
          place-items-center
          rounded-2xl
          bg-amber-400
          text-slate-950
          transition-all
          duration-500
          group-hover:rotate-6
          group-hover:scale-110
          group-hover:shadow-lg
          group-hover:shadow-amber-400/20
        "
      >
        <Icon size={24} />
      </div>

      {/* Content */}
      <div className="relative mt-6">
        <h3
          className="
            text-xl
            font-black
            text-white
            transition
            duration-300
            group-hover:text-amber-300
          "
        >
          {reason.title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-slate-400
          "
        >
          {reason.description}
        </p>

        {/* Small Arrow */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-2
            text-xs
            font-bold
            text-slate-500
            transition
            duration-300
            group-hover:text-amber-300
          "
        >
          <span>Travel with confidence</span>

          <ArrowUpRight
            size={15}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
            "
          />
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-0.5
          w-0
          bg-amber-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </div>
  );
}

export default ReasonCard;