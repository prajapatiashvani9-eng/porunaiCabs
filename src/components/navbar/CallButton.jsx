import { Phone } from "lucide-react";

function CallButton() {
  return (
    <a
      href="tel:+919919008622"
      className="
        inline-flex min-h-11 shrink-0
        items-center justify-center gap-2
        rounded-xl
        bg-amber-400
        px-4 py-2.5
        text-sm font-extrabold
        text-slate-950
        transition duration-300
        hover:-translate-y-0.5
        hover:bg-amber-300
        hover:shadow-lg
        hover:shadow-amber-400/20
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-amber-300
        focus-visible:ring-offset-2
        focus-visible:ring-offset-slate-950
      "
    >
      <Phone size={17} />
      <span>Call Now</span>
    </a>
  );
}

export default CallButton;