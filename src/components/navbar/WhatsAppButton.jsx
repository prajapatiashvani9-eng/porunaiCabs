import { MessageCircle } from "lucide-react";

function WhatsAppButton({ onClick }) {
  return (
    <a
      href="https://wa.me/+91 7358559444"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label="Contact Porunai Cabs on WhatsApp"
      className="
        mt-2
        flex min-h-12
        w-full items-center justify-center gap-2
        rounded-xl
        bg-emerald-500
        px-4 py-3
        font-bold text-white
        transition duration-300
        hover:bg-emerald-400
        hover:shadow-lg
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-300
      "
    >
      <MessageCircle size={19} />
      WhatsApp Us
    </a>
  );
}

export default WhatsAppButton;