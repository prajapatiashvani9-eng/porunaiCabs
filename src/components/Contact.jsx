import ContactHeading from "./contact/ContactHeading";
import ContactInfo from "./contact/ContactInfo";
import ContactMap from "./contact/ContactMap";
import ContactCTA from "./contact/ContactCTA";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Grid */}
      <div className="hero-grid absolute inset-0 opacity-30" />

      {/* Glow */}
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
          bottom-0
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <ContactHeading />

        {/* Main Grid */}
        <div
          className="
            mt-12
            grid
            gap-6
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* LEFT - Contact Information */}
          <ContactInfo />

          {/* RIGHT - Map */}
          <ContactMap />
        </div>

        {/* Bottom CTA */}
        <ContactCTA />
      </div>
    </section>
  );
}

export default Contact;