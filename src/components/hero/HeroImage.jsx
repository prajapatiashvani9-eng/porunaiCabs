import {
  ShieldCheck,
  Clock3,
} from "lucide-react";

import FloatingCard from "./FloatingCard";

function HeroImage() {
  return (
    <div
      className="
        relative
        flex
        min-h-[450px]
        items-center
        justify-center
        animate-[fadeIn_1000ms_ease-out]
        lg:min-h-[600px]
      "
    >
      {/* Main Glow */}
      <div
        className="
          absolute
          h-72
          w-72
          rounded-full
          bg-amber-400/20
          blur-3xl
        "
      />

      {/* Taxi Image Container */}
      <div
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-white/5
          p-3
          shadow-2xl
          backdrop-blur-sm
          transition
          duration-500
          hover:scale-[1.02]
        "
      >
        <img
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85"
          alt="Modern taxi car"
          className="
            h-[350px]
            w-full
            rounded-[1.5rem]
            object-cover
            sm:h-[430px]
            lg:h-[500px]
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute
            inset-3
            rounded-[1.5rem]
            bg-gradient-to-t
            from-slate-950/70
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Floating Card - Top */}
      <FloatingCard
        icon={<ShieldCheck size={20} />}
        title="Safe & Reliable"
        description="Professional Drivers"
        position="-left-2 top-8 sm:left-0 lg:-left-8"
        variant="success"
        animated={true}
      />

      {/* Floating Card - Bottom */}
      <FloatingCard
        icon={<Clock3 size={20} />}
        title="Quick Response"
        description="Easy Call Booking"
        position="-bottom-2 -right-2 sm:right-0 lg:-right-8"
      />
    </div>
  );
}

export default HeroImage;