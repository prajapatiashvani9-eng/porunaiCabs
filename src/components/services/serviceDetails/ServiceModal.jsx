import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  CalendarCheck,
  Phone,
  Sparkles,
} from "lucide-react";

function ServiceModal({ service, onClose }) {
  // Close on Escape key and prevent background body scrolling
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!service) return null;

  const Icon = service.icon;

  const modalContent = (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/80
        p-3
        backdrop-blur-sm
        transition-opacity
        duration-300
        sm:p-5
        md:p-6
      "
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        className="
          relative
          flex
          max-h-[90dvh]
          w-full
          max-w-lg
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-2xl
          shadow-slate-950/25
          transition-all
          duration-300
          sm:max-w-xl
          sm:rounded-3xl
          md:max-w-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - easily accessible on mobile and desktop */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="
            absolute
            right-3
            top-3
            z-20
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            bg-slate-100
            text-slate-500
            transition-all
            hover:bg-slate-200
            hover:text-slate-950
            focus:outline-none
            cursor-pointer
            sm:right-5
            sm:top-5
            sm:h-10
            sm:w-10
          "
        >
          <X size={18} className="sm:h-5 sm:w-5" />
        </button>

        {/* Modal Header */}
        <div
          className="
            shrink-0
            border-b
            border-slate-100
            p-4
            pr-14
            sm:p-6
            sm:pr-16
            md:p-7
          "
        >
          <div className="flex items-center gap-3 sm:gap-4">
            {Icon && (
              <div
                className="
                  grid
                  h-11
                  w-11
                  shrink-0
                  place-items-center
                  rounded-xl
                  bg-slate-950
                  text-amber-400
                  shadow-md
                  sm:h-14
                  sm:w-14
                  sm:rounded-2xl
                "
              >
                <Icon size={24} className="sm:h-7 sm:w-7" />
              </div>
            )}

            <div className="min-w-0 flex-1">
              {service.tagline && (
                <span
                  className="
                    inline-block
                    rounded-full
                    bg-amber-50
                    px-2.5
                    py-0.5
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-wider
                    text-amber-700
                    border
                    border-amber-200/60
                    sm:text-xs
                  "
                >
                  {service.tagline}
                </span>
              )}

              <h2
                id="modal-service-title"
                className="
                  mt-1
                  truncate
                  text-lg
                  font-black
                  text-slate-900
                  sm:text-2xl
                  md:text-3xl
                "
              >
                {service.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div
          className="
            flex-1
            overflow-y-auto
            overflow-x-hidden
            p-4
            space-y-4
            text-slate-600
            sm:p-6
            sm:space-y-5
            md:p-7
          "
        >
          {/* Main Description */}
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 break-words">
            {service.detailedDescription || service.description}
          </p>

          {/* Key Features & Highlights */}
          {service.features && service.features.length > 0 && (
            <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 sm:p-5 sm:rounded-2xl">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 sm:text-sm">
                <CheckCircle2
                  size={16}
                  className="text-amber-500 shrink-0 sm:h-[18px] sm:w-[18px]"
                />
                Key Features & Highlights
              </h3>

              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug break-words"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Why Choose This Service / Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 sm:p-5 sm:rounded-2xl">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 sm:text-sm">
                <ShieldCheck
                  size={16}
                  className="text-amber-500 shrink-0 sm:h-[18px] sm:w-[18px]"
                />
                Why Choose This Service
              </h3>

              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">
                {service.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug break-words"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ideal For & Booking Info Boxes */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.useCases && (
              <div className="rounded-xl border border-amber-200/60 bg-amber-50/70 p-3 sm:p-4">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                  <Sparkles
                    size={14}
                    className="text-amber-600 shrink-0 sm:h-4 sm:w-4"
                  />
                  Ideal For:
                </span>
                <p className="mt-1 text-xs leading-relaxed text-amber-900/90 sm:text-[13px] break-words">
                  {service.useCases}
                </p>
              </div>
            )}

            {service.bookingDetails && (
              <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/70 p-3 sm:p-4">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
                  <CalendarCheck
                    size={14}
                    className="text-emerald-600 shrink-0 sm:h-4 sm:w-4"
                  />
                  Booking & Rates:
                </span>
                <p className="mt-1 text-xs leading-relaxed text-emerald-900/90 sm:text-[13px] break-words">
                  {service.bookingDetails}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div
          className="
            shrink-0
            border-t
            border-slate-100
            bg-slate-50/50
            p-3.5
            sm:p-5
          "
        >
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
            <button
              type="button"
              onClick={onClose}
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-2.5
                text-xs
                font-bold
                text-slate-700
                transition-colors
                hover:bg-slate-100
                hover:text-slate-900
                focus:outline-none
                cursor-pointer
                sm:w-auto
                sm:text-sm
                sm:py-3
              "
            >
              Close
            </button>

            <a
              href="tel:+91 7358559444"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-2.5
                text-xs
                font-bold
                text-slate-900
                transition-all
                hover:bg-slate-100
                cursor-pointer
                sm:w-auto
                sm:text-sm
                sm:py-3
              "
            >
              <Phone size={15} className="sm:h-4 sm:w-4" />
              <span>Call Now</span>
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-amber-400
                px-5
                py-2.5
                text-xs
                font-extrabold
                text-slate-950
                shadow-md
                shadow-amber-400/20
                transition-all
                hover:bg-amber-300
                hover:shadow-lg
                hover:shadow-amber-400/30
                cursor-pointer
                sm:w-auto
                sm:text-sm
                sm:py-3
              "
            >
              <CalendarCheck size={16} className="sm:h-[17px] sm:w-[17px]" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default ServiceModal;
