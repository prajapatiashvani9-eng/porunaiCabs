import { ArrowUpRight } from "lucide-react";

function ContactInfoCard({ item }) {
  const Icon = item.icon;
  const isWhatsApp = item.title === "WhatsApp";

  return (
    <a
      href={item.link}
      target={isWhatsApp ? "_blank" : undefined}
      rel={isWhatsApp ? "noreferrer" : undefined}
      className="
        group
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-5
        backdrop-blur-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-amber-400/30
        hover:bg-white/[0.07]
      "
    >
      <div className="flex items-center gap-4">
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
            transition-all
            duration-500
            group-hover:rotate-6
            group-hover:scale-110
          "
        >
          <Icon size={21} />
        </div>

        <div>
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            {item.title}
          </p>

          <p
            className="
              mt-1
              text-sm
              font-bold
              text-white
              sm:text-base
            "
          >
            {item.value}
          </p>
        </div>
      </div>

      <div
        className="
          grid
          h-9
          w-9
          place-items-center
          rounded-full
          bg-white/5
          text-slate-400
          transition-all
          duration-300
          group-hover:bg-amber-400
          group-hover:text-slate-950
        "
      >
        <ArrowUpRight
          size={17}
          className="
            transition-transform
            duration-300
            group-hover:rotate-6
          "
        />
      </div>
    </a>
  );
}

export default ContactInfoCard;