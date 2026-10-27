import FooterBrand from "./footer/FooterBrand";
import FooterQuickLinks from "./footer/FooterQuickLinks";
import FooterServices from "./footer/FooterServices";
import FooterContact from "./footer/FooterContact";
import FooterBottom from "./footer/FooterBottom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          pb-12
          pt-16
        "
      >
        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]
          "
        >
          {/* Company */}
          <FooterBrand />

          {/* Quick Links */}
          <FooterQuickLinks />

          {/* Services */}
          <FooterServices />

          {/* Contact */}
          <FooterContact />
        </div>

        {/* Bottom */}
        <FooterBottom />
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-amber-400" />
    </footer>
  );
}

export default Footer;