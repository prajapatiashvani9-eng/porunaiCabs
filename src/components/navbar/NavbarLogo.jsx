function NavbarLogo() {
  return (
    <a
      href="#home"
      className="flex items-center shrink-0"
    >
      {/* Logo */}
      <div
        className="
          flex items-center justify-between w-full
        "
      >
<img
  src="/img/logo1.jpeg"
  alt="Porunaicabs-copy"
  className="w-full h-[100px] object-contain object-left"
/>
      </div>
  

      

      {/* Company Name */}
      <div className="min-w-0">
        <p className="whitespace-nowrap text-base font-black tracking-tight text-white sm:text-lg">
          
        </p>

        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-amber-300 sm:text-[10px] sm:tracking-[0.22em]">
          
        </p>
      </div>
    </a>
  );
}

export default NavbarLogo;