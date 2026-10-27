import WhyChooseUsGlow from "./whychooseus/WhyChooseUsGlow";
import WhyChooseUsHeading from "./whychooseus/WhyChooseUsHeading";
import ReasonsGrid from "./whychooseus/ReasonsGrid";
import WhyChooseUsCTA from "./whychooseus/WhyChooseUsCTA";

function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-5
        py-24
        sm:py-28
      "
    >
      <WhyChooseUsGlow />

      <div className="relative mx-auto max-w-7xl">
        <WhyChooseUsHeading />

        <ReasonsGrid />

        <WhyChooseUsCTA />
      </div>
    </section>
  );
}

export default WhyChooseUs;