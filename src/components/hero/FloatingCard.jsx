function FloatingCard({
  icon,
  title,
  description,
  position,
  variant = "default",
  animated = false,
}) {
  return (
    <div
      className={`
        glass
        ${animated ? "float-animation" : ""}
        absolute
        ${position}
        rounded-2xl
        px-4
        py-3
        shadow-2xl
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            grid
            h-10
            w-10
            place-items-center
            rounded-xl
            ${
              variant === "success"
                ? "bg-emerald-400/15 text-emerald-300"
                : "bg-amber-400 text-slate-950"
            }
          `}
        >
          {icon}
        </div>

        <div>
          <p className="text-sm font-bold text-white">
            {title}
          </p>

          <p className="text-xs text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FloatingCard;