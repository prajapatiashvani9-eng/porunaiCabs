import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-amber-200
        hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
      "
    >
      {/* Animated Background Circle */}
      <div
        className="
          absolute
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-amber-100
          opacity-0
          transition-all
          duration-500
          group-hover:scale-150
          group-hover:opacity-100
        "
      />

      {/* Card Number */}
      <span
        className="
          absolute
          right-6
          top-6
          text-xs
          font-black
          text-slate-200
          transition
          duration-300
          group-hover:text-amber-200
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
          bg-slate-950
          text-amber-400
          transition-all
          duration-500
          group-hover:rotate-6
          group-hover:scale-110
          group-hover:bg-amber-400
          group-hover:text-slate-950
        "
      >
        <Icon size={25} />
      </div>

      {/* Content */}
      <div className="relative mt-6">
        <h3
          className="
            text-xl
            font-black
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-amber-600
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-slate-500
          "
        >
          {service.description}
        </p>

        {/* Learn More */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            text-sm
            font-bold
            text-slate-900
          "
        >
          <span>Learn More</span>

          <ArrowUpRight
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-amber-500
            "
          />
        </div>
      </div>

      {/* Bottom Hover Line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
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

export default ServiceCard;