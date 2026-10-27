function ServicesHeading() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className="
          inline-flex
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
        Our Services
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
        Travel Made
        <span className="text-amber-500"> Simple</span>
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
        From quick city rides to long-distance journeys,
        we provide comfortable taxi services designed around
        your travel needs.
      </p>
    </div>
  );
}

export default ServicesHeading;