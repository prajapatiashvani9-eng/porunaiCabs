function TrustItem({ icon, title, text }) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/5
        p-3
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-white/10
      "
    >
      <div
        className="
          grid
          h-9
          w-9
          shrink-0
          place-items-center
          rounded-lg
          bg-amber-400/10
          text-amber-300
          transition
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-white">
          {title}
        </p>

        <p className="text-xs text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}

export default TrustItem;