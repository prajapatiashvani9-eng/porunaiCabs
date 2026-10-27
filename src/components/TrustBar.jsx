import TrustGrid from "./trustbar/TrustGrid";

function TrustBar() {
  return (
    <section className="relative z-10 -mt-4 px-5">
      <div
        className="
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.10)]
        "
      >
        <TrustGrid />
      </div>
    </section>
  );
}

export default TrustBar;