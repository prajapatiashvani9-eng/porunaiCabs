function NavbarLogo() {
  return (
    <a
      href="#home"
      className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
      aria-label="Porunai Cabs - Home"
    >
      {/* Logo */}
      <div
        className="
          grid h-10 w-10 shrink-0
          place-items-center
          rounded-xl
          bg-amber-400
          text-xl font-black
          text-slate-950
          transition duration-300
          group-hover:rotate-6
          group-hover:scale-105
        "
      >
        P
      </div>

      {/* Company Name */}
      <div className="min-w-0">
        <p className="whitespace-nowrap text-base font-black tracking-tight text-white sm:text-lg">
          Porunai Cabs
        </p>

        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-amber-300 sm:text-[10px] sm:tracking-[0.22em]">
          Book & Call Taxi
        </p>
      </div>
    </a>
  );
}

export default NavbarLogo;