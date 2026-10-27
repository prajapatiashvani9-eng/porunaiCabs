import HeroActions from "./HeroActions";
import TrustPoints from "./TrustPoints";

function HeroContent() {
  return (
    <div className="animate-[fadeIn_800ms_ease-out]">
      {/* Small Badge */}
      <div
        className="
          mb-6
          inline-flex
          items-center
          gap-2
          rounded-full
          border border-amber-300/20
          bg-white/5
          px-4 py-2
          text-sm
          font-semibold
          text-amber-300
          backdrop-blur-md
          transition
          duration-300
          hover:-translate-y-1
          hover:bg-white/10
        "
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

        Available for Local & Outstation Trips
      </div>

      {/* Main Heading */}
      <h1
        className="
          max-w-3xl
          text-5xl
          font-black
          leading-[1.05]
          tracking-tight
          text-white
          sm:text-6xl
          lg:text-7xl
        "
      >
        Your Ride.
        <br />

        <span className="text-gradient">
          Your Time.
        </span>

        <br />

        Your Journey.
      </h1>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-xl
          text-base
          leading-7
          text-slate-300
          sm:text-lg
        "
      >
        Reliable call taxi service for city rides, airport
        transfers, outstation trips and customized travel
        across your preferred routes.
      </p>

      {/* Buttons */}
      <HeroActions />

      {/* Trust Points */}
      <TrustPoints />
    </div>
  );
}

export default HeroContent;