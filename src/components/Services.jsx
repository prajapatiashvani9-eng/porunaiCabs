import { useState, useEffect } from "react";
import {
  Plane,
  MapPin,
  Route,
  RefreshCw,
  Briefcase,
  ArrowUpRight,
  X,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  Heart,
  Car,
} from "lucide-react";

export const services = [
  {
    id: "airport-transfer",
    icon: Plane,
    title: "Airport Transfer",
    tagline: "24/7 Airport Pickup & Drop",
    shortDescription:
      "Comfortable and timely airport pickup and drop services with live flight monitoring for a stress-free journey.",
    fullDescription:
      "Eliminate travel anxiety with our dedicated airport taxi service. We track your flight in real time so your chauffeur is ready when you arrive, with zero waiting charges for delayed flights and prompt assistance with your luggage.",
    highlights: [
      "Real-time flight status tracking with zero delay penalties",
      "Punctual doorstep pickup and direct terminal drops",
      "Full assistance with luggage loading and unloading",
      "Fixed upfront fares with no hidden toll or parking surprises",
      "Clean, sanitized, air-conditioned Sedans and spacious SUVs",
      "Available 24 hours a day, 7 days a week including late nights",
    ],
    idealFor:
      "Domestic & international fliers, corporate delegates, family vacations",
    pricingNote:
      "Fixed all-inclusive airport transfer packages & per-km options",
    vehicles: "Sedan (Dzire/Etios), SUV (Ertiga), Luxury (Innova Crysta)",
    badge: "Most Popular",
  },
  {
    id: "local-taxi",
    icon: MapPin,
    title: "Local Taxi",
    tagline: "City Rides & Hourly Rentals",
    shortDescription:
      "Convenient city rides for shopping, office commutes, business meetings, and everyday local travel.",
    fullDescription:
      "Navigate city traffic and parking hassles with complete ease. Whether you need a quick point-to-point drop or an hourly rental cab to run multiple errands across town, our local taxi service offers total flexibility.",
    highlights: [
      "Point-to-point city drops and flexible hourly packages (4hr, 8hr, 12hr)",
      "Zero surge pricing during peak office hours or bad weather",
      "Prompt doorstep dispatch with polite, verified local drivers",
      "Multiple stops allowed across town without rebooking",
      "Economical hatchbacks, comfortable sedans, and family SUVs",
      "Chilled AC and well-maintained clean interiors",
    ],
    idealFor:
      "City shopping, office commutes, hospital visits, family gatherings",
    pricingNote:
      "Transparent 4hr/40km, 8hr/80km & full-day packages available",
    vehicles: "Hatchback (WagonR/Swift), Sedan (Dzire), SUV (Ertiga)",
    badge: "Flexible Fares",
  },
  {
    id: "outstation-trips",
    icon: Route,
    title: "Outstation Trips",
    tagline: "Intercity & Vacation Getaways",
    shortDescription:
      "Travel comfortably to nearby cities and holiday destinations with experienced highway chauffeurs.",
    fullDescription:
      "Embark on refreshing intercity journeys, hill station getaways, and pilgrimage tours without driving fatigue. Our highway-experienced chauffeurs ensure maximum passenger comfort and complete freedom to stop whenever you want.",
    highlights: [
      "Experienced highway chauffeurs with stellar safety records",
      "GPS-equipped commercial vehicles with state permits & fitness",
      "Transparent per-kilometer billing with clear driver batta terms",
      "Flexible multi-day sightseeing stops at your convenience",
      "24/7 round-the-clock roadside assistance and passenger support",
      "Spacious luggage boots for long family holiday luggage",
    ],
    idealFor:
      "Hill station tours, pilgrimage circuits, weekend getaways, family functions",
    pricingNote: "Starting from ₹12/km (Sedan) and ₹17/km (SUV/Innova)",
    vehicles:
      "Sedan (Etios/Dzire), SUV (Ertiga), Premium SUV (Innova Crysta)",
    badge: "Top Rated",
  },
  {
    id: "one-way-round-trip",
    icon: RefreshCw,
    title: "One Way & Round Trip",
    tagline: "Save Up To 40% On Single Drops",
    shortDescription:
      "Choose a flexible one-way or round-trip taxi option and avoid paying return tolls or double-side fares.",
    fullDescription:
      "Why pay double for a single journey? With our dedicated one-way taxi service, you only pay for the distance you travel. Planning to return? Our round-trip packages keep the vehicle and chauffeur dedicated to you at unbeatable rates.",
    highlights: [
      "Pay only for one-side travel on all one-way intercity drops",
      "Save up to 40% compared to traditional return-fare cabs",
      "Dedicated car and driver retained for the full journey on round trips",
      "Guaranteed on-time departure with zero cancellation penalties",
      "Direct doorstep pickup and doorstep drop at destination",
      "Instant digital trip receipts and GST-compliant invoices",
    ],
    idealFor:
      "One-way transfers, relocations, student commutes, weekend returns",
    pricingNote: "Flat one-way drop fares & value-packed round-trip deals",
    vehicles: "Sedan (Dzire/Aura), SUV (Ertiga), Innova Crysta",
    badge: "Maximum Savings",
  },
  {
    id: "corporate-travel",
    icon: Briefcase,
    title: "Corporate Travel",
    tagline: "Executive & Business Mobility",
    shortDescription:
      "Professional transportation solutions for employees, executive meetings, client hospitality, and business events.",
    fullDescription:
      "Deliver a seamless, high-class mobility experience for your executives, clients, and VIP guests. We provide dedicated corporate accounts, GST-compliant invoicing, and top-tier chauffeurs trained in business etiquette.",
    highlights: [
      "Dedicated corporate account manager for priority bookings",
      "Consolidated monthly invoicing with 100% GST compliance",
      "Well-groomed, courteous chauffeurs trained in corporate etiquette",
      "Punctual airport transfers for delegates and VIP board members",
      "Executive sedans and premium multi-seater vans in pristine condition",
      "Customized contracts for daily employee shuttle and company events",
    ],
    idealFor:
      "Corporate executives, VIP client hosting, business summits, staff transport",
    pricingNote:
      "Custom corporate tariff packages and monthly credit billing",
    vehicles: "Executive Sedan (Ciaz/Dzire), Premium SUV (Innova Crysta)",
    badge: "Business Class",
  },
];

function Services() {
  const [activeService, setActiveService] = useState(null);
  const [likedServices, setLikedServices] = useState({});

  // Close modal when Escape key is pressed & manage body overflow
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    };

    if (activeService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService]);

  const toggleLike = (e, serviceId) => {
    e.stopPropagation();
    setLikedServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Glow Decorations */}
      <div
        className="
          absolute
          -right-40
          top-20
          h-80
          w-80
          rounded-full
          bg-amber-100
          blur-3xl
          opacity-60
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -left-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-blue-100
          blur-3xl
          opacity-50
          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-amber-100
              px-4
              py-2
              text-xs
              font-extrabold
              uppercase
              tracking-[0.2em]
              text-amber-700
            "
          >
            Our Services
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Travel Made
            <span className="text-amber-500"> Simple</span>
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            From prompt airport transfers to outstation getaways, explore our
            dedicated cab services crafted for your comfort, reliability, and peace of mind.
          </p>
        </div>

        {/* Service Cards Grid (5 Cards: 3 on top row, 2 on bottom row for desktop) */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLiked = likedServices[service.id];
            // Layout classes: top 3 take 2 cols each (6 total), bottom 2 take 3 cols each (6 total)
            const colSpanClass =
              index < 3 ? "lg:col-span-2" : "lg:col-span-3";
            const tabletSpanClass =
              index === services.length - 1
                ? "sm:col-span-2 lg:col-span-3"
                : "sm:col-span-1";

            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  cursor-pointer
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-amber-300
                  hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
                  ${colSpanClass}
                  ${tabletSpanClass}
                `}
              >
                {/* Animated Background Circle */}
                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-amber-100
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:scale-150
                    group-hover:opacity-100
                  "
                />

                {/* Top Row: Like Heart + Card Number */}
                <div className="relative flex items-center justify-between">
                  <div
                    className="
                      grid
                      h-14
                      w-14
                      place-items-center
                      rounded-2xl
                      bg-slate-950
                      text-amber-400
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:scale-110
                      group-hover:bg-amber-400
                      group-hover:text-slate-950
                    "
                  >
                    <Icon size={26} />
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Like / Favorite Button */}
                    <button
                      type="button"
                      aria-label={isLiked ? "Unlike service" : "Like service"}
                      title={isLiked ? "Liked" : "Like this service"}
                      onClick={(e) => toggleLike(e, service.id)}
                      className="
                        grid
                        h-9
                        w-9
                        place-items-center
                        rounded-full
                        bg-slate-100
                        transition-all
                        hover:scale-110
                        hover:bg-rose-50
                      "
                    >
                      <Heart
                        size={17}
                        className={`transition-colors duration-300 ${
                          isLiked
                            ? "fill-rose-500 text-rose-500"
                            : "text-slate-400 hover:text-rose-500"
                        }`}
                      />
                    </button>

                    {/* Card Number */}
                    <span
                      className="
                        text-xs
                        font-black
                        text-slate-200
                        transition
                        duration-300
                        group-hover:text-amber-300
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-6 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700 border border-amber-200/60">
                      {service.tagline}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-3
                      text-xl
                      font-black
                      text-slate-900
                      transition-colors
                      duration-300
                      group-hover:text-amber-600
                    "
                  >
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-slate-500">
                    {service.shortDescription}
                  </p>

                  {/* Highlights Mini Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.highlights.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 border border-slate-100"
                      >
                        <CheckCircle2
                          size={12}
                          className="text-amber-500 shrink-0"
                        />
                        <span className="truncate max-w-[210px]">{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Learn More Button */}
                <div className="relative mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(service);
                    }}
                    className="
                      group/btn
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-slate-900
                      transition-colors
                      hover:text-amber-600
                    "
                  >
                    <span>Learn More</span>
                    <div
                      className="
                        grid
                        h-7
                        w-7
                        place-items-center
                        rounded-full
                        bg-slate-100
                        text-slate-800
                        transition-all
                        duration-300
                        group-hover/btn:bg-amber-400
                        group-hover/btn:text-slate-950
                        group-hover/btn:translate-x-0.5
                        group-hover/btn:-translate-y-0.5
                      "
                    >
                      <ArrowUpRight size={15} />
                    </div>
                  </button>

                  <span className="text-[11px] font-semibold text-slate-400">
                    View Info
                  </span>
                </div>

                {/* Bottom Amber Hover Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-amber-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-3xl
            bg-slate-950
            px-7
            py-7
            sm:flex-row
            sm:px-10
          "
        >
          <div>
            <h3 className="text-xl font-black text-white">
              Need a ride for your next journey?
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Call us anytime to discuss rates and custom travel arrangements.
            </p>
          </div>

          <a
            href="tel:+91 7358559444"
            className="
              inline-flex
              shrink-0
              items-center
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
              hover:shadow-lg
              hover:shadow-amber-400/20
            "
          >
            Call Now
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      {/* Interactive "Learn More" Service Information Modal */}
      {activeService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-slate-950/75
            p-4
            sm:p-6
            backdrop-blur-sm
          "
          onClick={() => setActiveService(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-2xl
              max-h-[90vh]
              overflow-y-auto
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              sm:p-8
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              type="button"
              aria-label="Close details"
              onClick={() => setActiveService(null)}
              className="
                absolute
                right-5
                top-5
                grid
                h-10
                w-10
                place-items-center
                rounded-full
                bg-slate-100
                text-slate-600
                transition-all
                hover:bg-slate-200
                hover:text-slate-950
              "
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 pr-12">
              <div
                className="
                  grid
                  h-14
                  w-14
                  shrink-0
                  place-items-center
                  rounded-2xl
                  bg-slate-950
                  text-amber-400
                "
              >
                {(() => {
                  const ModalIcon = activeService.icon;
                  return <ModalIcon size={28} />;
                })()}
              </div>

              <div>
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                  {activeService.tagline}
                </span>

                <h3
                  id="service-modal-title"
                  className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl"
                >
                  {activeService.title}
                </h3>
              </div>
            </div>

            {/* Extended Description */}
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              {activeService.fullDescription}
            </p>

            {/* Key Inclusions & Features */}
            <div className="mt-6 rounded-2xl bg-slate-50 p-5 border border-slate-100">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                <ShieldCheck size={18} className="text-amber-500" />
                Key Features & What is Included
              </h4>

              <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                {activeService.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-600 shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Details: Vehicles & Pricing */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Car size={16} className="text-amber-500" />
                  Available Vehicles
                </div>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {activeService.vehicles}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Clock size={16} className="text-amber-500" />
                  Pricing Transparency
                </div>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {activeService.pricingNote}
                </p>
              </div>
            </div>

            {/* Ideal For Recommendation */}
            <div className="mt-4 rounded-xl bg-amber-50/70 p-3.5 border border-amber-200/50">
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong className="font-bold">Recommended for: </strong>
                {activeService.idealFor}
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  text-center
                "
              >
                Close
              </button>

              <a
                href={`https://wa.me/917358559444?text=Hello%20Porunai%20Cabs%2C%20I%20would%20like%20to%20know%20more%20about%20and%20book%20the%20${encodeURIComponent(
                  activeService.title
                )}%20service.`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-emerald-600
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-emerald-500
                "
              >
                <MessageCircle size={18} />
                WhatsApp Inquiry
              </a>

              <a
                href="tel:+91 7358559444"
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
                  shadow-md
                  transition
                  hover:bg-amber-300
                  hover:shadow-amber-400/20
                "
              >
                <Phone size={18} />
                Call To Book
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
