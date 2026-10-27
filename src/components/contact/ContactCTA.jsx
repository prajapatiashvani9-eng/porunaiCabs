import { Phone, MessageCircle } from "lucide-react";

function ContactCTA() {
  return (
    <div
      className="
        mt-8
        overflow-hidden
        rounded-[2rem]
        bg-amber-400
        p-7
        sm:p-9
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <p
            className="
              text-xs
              font-black
              uppercase
              tracking-[0.2em]
              text-slate-700
            "
          >
            Need a Cab?
          </p>

          <h3
            className="
              mt-2
              text-2xl
              font-black
              tracking-tight
              text-slate-950
              sm:text-3xl
            "
          >
            Your destination is just a call away.
          </h3>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+919999999999"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-slate-950
              px-6
              py-3.5
              text-sm
              font-extrabold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-slate-800
            "
          >
            <Phone size={17} />
            Call Now
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-950/10
              bg-white/50
              px-6
              py-3.5
              text-sm
              font-extrabold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white
            "
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCTA;