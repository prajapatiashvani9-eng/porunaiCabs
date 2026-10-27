function FooterBottom() {
  return (
    <>
      {/* Divider */}
      <div
        className="
          mt-14
          h-px
          bg-white/10
        "
      />

      {/* Bottom */}
      <div
        className="
          flex
          flex-col
          gap-4
          pt-7
          text-xs
          text-slate-500
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p>
          © {new Date().getFullYear()} SwiftRide Cabs.
          All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="
              transition-colors
              duration-300
              hover:text-amber-300
            "
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="
              transition-colors
              duration-300
              hover:text-amber-300
            "
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;