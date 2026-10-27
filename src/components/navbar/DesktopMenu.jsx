import navLinks from "./navLinks";
import CallButton from "./CallButton";

function DesktopMenu() {
  return (
    <div className="hidden items-center gap-5 lg:flex xl:gap-7">
      {/* Navigation Links */}
      {navLinks.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="
            group relative whitespace-nowrap
            py-2
            text-sm font-semibold
            text-slate-300
            transition duration-300
            hover:text-amber-300
            focus-visible:outline-none
            focus-visible:text-amber-300
          "
        >
          {item.name}

          {/* Hover Underline */}
          <span
            className="
              absolute -bottom-0.5 left-0
              h-0.5 w-0
              rounded-full
              bg-amber-400
              transition-all duration-300
              group-hover:w-full
            "
          />
        </a>
      ))}

      {/* Call Button */}
      <CallButton />
    </div>
  );
}

export default DesktopMenu;