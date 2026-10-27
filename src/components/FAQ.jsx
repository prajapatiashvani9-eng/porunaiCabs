import { useState } from "react";

import FAQHeading from "./faq/FAQHeading";
import FAQList from "./faq/FAQList";
import FAQContact from "./faq/FAQContact";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
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
          h-96
          w-96
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
          bottom-0
          h-80
          w-80
          rounded-full
          bg-blue-100
          blur-3xl
          opacity-50
        "
      />

      <div className="relative mx-auto max-w-6xl">
        <FAQHeading />

        <FAQList
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />

        <FAQContact />
      </div>
    </section>
  );
}

export default FAQ;