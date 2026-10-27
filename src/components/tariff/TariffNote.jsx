function TariffNote() {
  return (
    <div
      className="
        mx-auto
        mt-10
        max-w-3xl
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        py-4
        text-center
      "
    >
      <p className="text-xs leading-5 text-slate-500 sm:text-sm">
        <span className="font-bold text-slate-700">
          Note:
        </span>{" "}
        Fares shown above are for demonstration purposes.
        Final pricing may vary based on route, vehicle,
        tolls, parking, night charges and other applicable
        travel conditions.
      </p>
    </div>
  );
}

export default TariffNote;