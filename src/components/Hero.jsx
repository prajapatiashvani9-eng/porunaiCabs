import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        pt-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-amber-400/20
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          absolute
          -right-32
          bottom-10
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-3xl
          animate-pulse
        "
      />

      {/* Grid Background */}
      <div className="hero-grid absolute inset-0 opacity-60" />

      {/* Main Container */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-12
          px-5
          py-16
          lg:grid-cols-2
          lg:py-24
        "
      >
        {/* LEFT CONTENT */}
        <HeroContent />

        {/* RIGHT IMAGE */}
        <HeroImage />
      </div>

      {/* Bottom Curve / Fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-slate-50
          to-transparent
        "
      />
    </section>
  );
}

export default Hero;