import { useEffect, useState } from "react";

import NavbarLogo from "./navbar/NavbarLogo";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";
import MobileMenuButton from "./navbar/MobileMenuButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close mobile menu when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto mt-3 w-full max-w-7xl px-3 sm:px-4">
        <div
          className="
            rounded-2xl
            border border-white/10
            bg-slate-950/95
            px-3 py-3
            shadow-2xl
            backdrop-blur-xl
            sm:px-4
          "
        >
          {/* Navbar Top Section */}
          <div className="flex items-center justify-between gap-3">
            <NavbarLogo />

            {/* Desktop Navigation */}
            <DesktopMenu />

            {/* Mobile & Tablet Menu Button */}
            <MobileMenuButton
              isOpen={isOpen}
              onClick={() => setIsOpen((previous) => !previous)}
            />
          </div>

          {/* Mobile & Tablet Navigation */}
          {isOpen && (
            <MobileMenu onClose={closeMenu} />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;