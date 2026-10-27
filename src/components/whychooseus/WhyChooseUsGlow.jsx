function WhyChooseUsGlow() {
  return (
    <>
      {/* Background Grid */}
      <div className="hero-grid absolute inset-0 opacity-30" />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-amber-400/10
          blur-3xl
        "
      />
    </>
  );
}

export default WhyChooseUsGlow;