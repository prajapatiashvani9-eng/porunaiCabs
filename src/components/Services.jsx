import { services } from "./services/servicesData";

import ServicesHeading from "./services/ServicesHeading";
import ServiceCard from "./services/ServiceCard";
import ServicesCTA from "./services/ServicesCTA";

function Services() {
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
      {/* Background Decoration */}
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
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <ServicesHeading />

        {/* Service Cards */}
        <div
          className="
            mt-14
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <ServicesCTA />
      </div>
    </section>
  );
}

export default Services;
