import { HelpCircle } from "lucide-react";

function FAQHeading() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className="
          inline-flex
          items-center
          gap-2
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
        <HelpCircle size={14} />
        FAQ
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
        Frequently Asked
        <span className="text-amber-500">
          {" "}
          Questions
        </span>
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
        Find quick answers to some common questions
        about our taxi services.
      </p>
    </div>
  );
}

export default FAQHeading;