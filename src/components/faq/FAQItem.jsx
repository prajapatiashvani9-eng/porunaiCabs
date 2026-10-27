import { ChevronDown } from "lucide-react";

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <div
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        bg-white
        transition-all
        duration-500

        ${
          isOpen
            ? "border-amber-300 shadow-lg shadow-amber-100/50"
            : "border-slate-200 hover:border-amber-200 hover:shadow-md"
        }
      `}
    >
      {/* Question Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-5
          px-5
          py-5
          text-left
          sm:px-6
          sm:py-6
        "
      >
        <div className="flex items-center gap-4">
          {/* Number */}
          <span
            className={`
              grid
              h-9
              w-9
              shrink-0
              place-items-center
              rounded-xl
              text-xs
              font-black
              transition-all
              duration-300

              ${
                isOpen
                  ? "bg-amber-400 text-slate-950"
                  : "bg-slate-100 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-700"
              }
            `}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Question */}
          <span
            className={`
              text-sm
              font-bold
              sm:text-base

              ${isOpen ? "text-slate-950" : "text-slate-700"}
            `}
          >
            {faq.question}
          </span>
        </div>

        {/* Chevron */}
        <span
          className={`
            grid
            h-9
            w-9
            shrink-0
            place-items-center
            rounded-full
            transition-all
            duration-500

            ${
              isOpen
                ? "rotate-180 bg-slate-950 text-amber-400"
                : "bg-slate-100 text-slate-600 group-hover:bg-amber-100"
            }
          `}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      {/* Answer */}
      <div
        className={`
          grid
          transition-all
          duration-500
          ease-in-out

          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              border-t
              border-slate-100
              px-5
              pb-6
              pt-4
              pl-[4.5rem]
              sm:px-6
              sm:pl-[4.75rem]
            "
          >
            <p
              className="
                text-sm
                leading-7
                text-slate-500
              "
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;