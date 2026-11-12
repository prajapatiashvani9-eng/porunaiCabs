function NavbarContact() {
  return (
    <a
      href="tel:+917358559444"
      aria-label="Porunai Cabs"
      className="
        flex shrink-0 items-center justify-center
        gap-1.5 sm:gap-2
        rounded-full
        border border-amber-400/30
        bg-amber-400/10
        px-2 py-2
        text-[10px] font-bold text-white
        transition-all duration-300

        sm:px-3 sm:text-xs
        md:px-4 md:text-sm

        hover:border-amber-400
        hover:bg-amber-400
        hover:text-slate-950 ">

      <span className="text-amber-400 transition-colors duration-300 group-hover:text-slate-950">
        ☎
      </span>

      <span className="whitespace-nowrap">
        +91 73585 55944
      </span>
    </a>
  );
}

export default NavbarContact;