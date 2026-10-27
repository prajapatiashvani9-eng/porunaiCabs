import WhatsAppButton from "./floatingactions/WhatsAppButton";
import CallButton from "./floatingactions/CallButton";

function FloatingActions() {
  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        z-40
        flex
        flex-col
        gap-3
      "
    >
      <WhatsAppButton />

      <CallButton />
    </div>
  );
}

export default FloatingActions;