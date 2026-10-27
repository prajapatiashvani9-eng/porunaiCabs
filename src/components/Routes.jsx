import RoutesHeading from "./routes/RoutesHeading";
import PopularRoutes from "./routes/PopularRoutes";
import ServiceAreas from "./routes/ServiceAreas";
import RoutesCTA from "./routes/RoutesCTA";

function Routes() {
  return (
    <section
      id="routes"
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-amber-400/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <RoutesHeading />

        {/* Popular Routes */}
        <PopularRoutes />

        {/* Service Areas */}
        <ServiceAreas />

        {/* Bottom CTA */}
        <RoutesCTA />
      </div>
    </section>
  );
}

export default Routes;