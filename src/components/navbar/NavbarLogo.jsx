function NavbarLogo() {
  return (
    <a
      href="#home"
      aria-label="Porunai Cabs - Home"
      className="group flex shrink-0 items-center transition duration-300"
    >
      {/* Logo Image */}
      <div
        className="
          flex h-16 w-28 shrink-0 items-center justify-center
          overflow-hidden
          sm:h-20 sm:w-36
          lg:h-24 lg:w-44
        "
      >
        <img
          src="/logo.png"
          alt="Porunai Cabs Logo"
          className="
            h-full w-full object-contain object-center
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/*
      <div className="flex min-w-0 flex-col justify-center">
        <p className="whitespace-nowrap text-base font-black tracking-tight text-white sm:text-lg lg:text-xl">
          Porunai Cabs
        </p>

        <p className="mt-0.5 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.13em] text-amber-300 sm:text-[9px]">
          Your Journey, Our Priority
        </p>
      </div>
      */}
    </a>
  );
}

export default NavbarLogo;