import navLinks from "./navLinks";
import WhatsAppButton from "./WhatsAppButton";

function MobileMenu({ onClose }) {
  return (
    <div
      id="mobile-navigation"
      className="
        mt-4
        border-t border-white/10
        pt-4
        animate-[fadeIn_300ms_ease-out]
        lg:hidden
      "
    >
      <nav
        aria-label="Mobile navigation"
        className="grid gap-1"
      >
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.link}
            onClick={onClose}
            className="
              flex min-h-12 items-center
              rounded-xl
              px-4 py-3
              font-semibold
              text-slate-200
              transition duration-200
              hover:bg-white/10
              hover:text-amber-300
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-amber-400
            "
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* WhatsApp Button */}
      <WhatsAppButton onClick={onClose} />
    </div>
  );
}

export default MobileMenu;