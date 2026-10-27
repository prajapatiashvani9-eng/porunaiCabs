import { Navigation } from "lucide-react";

function ContactHeading() {
  return (
    <div className="max-w-3xl">
      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-amber-400/20
          bg-amber-400/10
          px-4
          py-2
          text-xs
          font-extrabold
          uppercase
          tracking-[0.2em]
          text-amber-300
        "
      >
        <Navigation size={14} />
        Contact Us
      </span>

      <h2
        className="
          mt-5
          text-3xl
          font-black
          tracking-tight
          text-white
          sm:text-4xl
          lg:text-5xl
        "
      >
        Ready for Your
        <span className="text-amber-400">
          {" "}
          Next Ride?
        </span>
      </h2>

      <p
        className="
          mt-5
          max-w-2xl
          text-base
          leading-7
          text-slate-400
          sm:text-lg
        "
      >
        Call or message us with your pickup location,
        destination and travel requirements. Our team
        will help you with the available options.
      </p>
    </div>
  );
}

export default ContactHeading;