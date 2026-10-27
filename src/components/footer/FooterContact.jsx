import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

function FooterContact() {
  return (
    <div>
      <h3
        className="
          text-sm
          font-black
          uppercase
          tracking-widest
          text-white
        "
      >
        Contact Us
      </h3>

      <div className="mt-5 space-y-4">
        {/* Phone */}
        <a
          href="tel:+919999999999"
          className="
            group
            flex
            items-start
            gap-3
            text-sm
            text-slate-400
            transition-colors
            duration-300
            hover:text-white
          "
        >
          <Phone
            size={18}
            className="
              mt-0.5
              shrink-0
              text-amber-400
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <span>+91 99999 99999</span>
        </a>

        {/* Email */}
        <a
          href="mailto:hello@swiftridecabs.in"
          className="
            group
            flex
            items-start
            gap-3
            text-sm
            text-slate-400
            transition-colors
            duration-300
            hover:text-white
          "
        >
          <Mail
            size={18}
            className="
              mt-0.5
              shrink-0
              text-amber-400
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <span className="break-all">
            hello@swiftridecabs.in
          </span>
        </a>

        {/* Location */}
        <div
          className="
            flex
            items-start
            gap-3
            text-sm
            text-slate-400
          "
        >
          <MapPin
            size={18}
            className="mt-0.5 shrink-0 text-amber-400"
          />

          <span>
            Mumbai, Maharashtra, India
          </span>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-emerald-500
          px-5
          py-3
          text-sm
          font-extrabold
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-emerald-400
          hover:shadow-lg
          hover:shadow-emerald-500/20
        "
      >
        <MessageCircle size={17} />
        WhatsApp Us

        <ArrowUpRight
          size={15}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </a>
    </div>
  );
}

export default FooterContact;