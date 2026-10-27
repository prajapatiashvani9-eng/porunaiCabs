import { Menu, X } from "lucide-react";

function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      className="
        grid h-11 w-11 shrink-0
        place-items-center
        rounded-xl
        text-white
        transition duration-300
        hover:bg-white/10
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-amber-400
        lg:hidden
      "
    >
      {isOpen ? <X size={25} /> : <Menu size={25} />}
    </button>
  );
}

export default MobileMenuButton;