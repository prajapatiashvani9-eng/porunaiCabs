import { Phone, MessageCircle } from "lucide-react";

function FAQContact() {
  return (
    <div
      className="
        mx-auto
        mt-12
        max-w-4xl
        overflow-hidden
        rounded-3xl
        bg-slate-950
        p-7
        sm:p-9
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <p
            className="
              text-xs
              font-extrabold
              uppercase
              tracking-widest
              text-amber-400
            "
          >
            Still have questions?
          </p>

          <h3
            className="
              mt-2
              text-xl
              font-black
              text-white
              sm:text-2xl
            "
          >
            Talk to our team.
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            We are happy to help you plan your journey.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Call */}
          <a
            href="tel:+919999999999"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-amber-400
              px-5
              py-3
              text-sm
              font-extrabold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-amber-300
            "
          >
            <Phone size={17} />
            Call Us
          </a>

          {/* WhatsApp */}
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
              border-white/10
              bg-white/5
              px-5
              py-3
              text-sm
              font-extrabold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-emerald-500
              hover:text-white
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

export default FAQContact;