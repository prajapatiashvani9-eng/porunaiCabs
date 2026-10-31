import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  X,
  CheckCircle2,
  ShieldCheck,
  CalendarCheck,
  Phone,
  Sparkles,
  ArrowRight,
  Clock,
  CarFront,
} from "lucide-react";

function ServiceModal({ service, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!service) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Smooth opening animation
    setIsVisible(false);

    const animationFrame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const Icon = service.icon;

  const modalContent = (
    <div
      className={`
        fixed
        inset-0
        z-50
        flex
        items-end
        justify-center
        bg-slate-950/85
        backdrop-blur-sm
        p-0
        transition-all
        duration-300
        ease-out
        sm:items-center
        sm:p-5
        ${
          isVisible
            ? "opacity-100"
            : "opacity-0"
        }
      `}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        className={`
          relative
          flex
          max-h-[94dvh]
          w-full
          max-w-2xl
          flex-col
          overflow-hidden
          rounded-t-3xl
          border
          border-slate-200
          bg-white
          shadow-2xl
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          sm:max-h-[90dvh]
          sm:rounded-3xl
          ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-12 scale-[0.98] opacity-0 sm:translate-y-5"
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent */}
        <div className="h-1.5 shrink-0 bg-gradient-to-r from-amber-500 via-amber-300 to-transparent" />

        {/* Mobile Drag Indicator */}
        <div className="flex justify-center pt-2 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-slate-300" />
        </div>

        {/* Header */}
        <div className="relative shrink-0 border-b border-slate-100 bg-slate-950 px-5 py-5 pr-16 sm:px-7 sm:py-7">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="
              absolute
              right-4
              top-4
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              border
              border-white/10
              bg-white/10
              text-white
              transition
              hover:bg-white/20
            "
          >
            <X size={19} />
          </button>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-400 sm:h-16 sm:w-16">
              {Icon && <Icon size={26} />}
            </div>

            <div className="min-w-0">
              {service.tagline && (
                <span className="inline-block rounded-full bg-amber-400/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-amber-300 sm:text-[10px]">
                  {service.tagline}
                </span>
              )}

              <h2
                id="modal-service-title"
                className="mt-1 break-words text-xl font-black text-white sm:text-2xl"
              >
                {service.title}
              </h2>

              <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                SwiftRide Cabs • Tirunelveli
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 space-y-5 overflow-y-auto overscroll-contain p-4 sm:space-y-6 sm:p-7">

          {/* Description */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <Sparkles size={17} className="text-amber-500" />

              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                About This Service
              </h3>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              {service.detailedDescription || service.description}
            </p>
          </section>

          {/* Features */}
          {service.features?.length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber-400/15 text-amber-600">
                  <CheckCircle2 size={19} />
                </div>

                <h3 className="text-sm font-extrabold text-slate-900">
                  What's Included
                </h3>
              </div>

              <div className="mt-4 space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-amber-500"
                    />

                    <p className="text-sm leading-6 text-slate-600">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Benefits */}
          {service.benefits?.length > 0 && (
            <section>
              <div className="mb-4 flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={19} />
                </div>

                <h3 className="text-sm font-extrabold text-slate-900">
                  Why Choose SwiftRide?
                </h3>
              </div>

              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-500"
                    />

                    <p className="text-sm leading-6 text-slate-600">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Ideal For */}
          {service.useCases && (
            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-center gap-2 text-amber-800">
                <Sparkles size={17} />

                <h3 className="text-xs font-extrabold uppercase tracking-wider">
                  Ideal For
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-amber-900/80">
                {service.useCases}
              </p>
            </section>
          )}

          {/* Booking Details */}
          {service.bookingDetails && (
            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-center gap-2 text-blue-800">
                <CalendarCheck size={17} />

                <h3 className="text-xs font-extrabold uppercase tracking-wider">
                  Booking Details
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-blue-900/80">
                {service.bookingDetails}
              </p>
            </section>
          )}

          {/* Bottom Information */}
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-950 text-amber-400">
              <Clock size={19} />
            </div>

            <div>
              <p className="text-sm font-extrabold text-slate-900">
                Plan Your Journey
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Contact our team to discuss your travel requirements,
                vehicle availability and package details.
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="shrink-0 border-t border-slate-200 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 sm:px-7 sm:py-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-3">

            {/* Call Now */}
            <a
              href="tel:+917358559444"
              className="
                flex
                min-h-[52px]
                w-full
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
                shadow-lg
                shadow-amber-400/20
                transition
                hover:bg-amber-300
                sm:order-2
                sm:w-auto
              "
            >
              <Phone size={19} />
              Call Now
            </a>

            {/* Book Your Ride */}
            <a
              href="#contact"
              onClick={onClose}
              className="
                flex
                min-h-[48px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-5
                py-3
                text-sm
                font-bold
                text-slate-800
                transition
                hover:border-amber-300
                hover:bg-amber-50
                sm:order-1
                sm:w-auto
              "
            >
              <CarFront size={18} />
              Book Your Ride
              <ArrowRight size={15} />
            </a>

            {/* Desktop Close */}
            <button
              type="button"
              onClick={onClose}
              className="
                hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                px-5
                py-3
                text-sm
                font-bold
                text-slate-600
                transition
                hover:bg-slate-100
                sm:order-3
                sm:block
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default ServiceModal;