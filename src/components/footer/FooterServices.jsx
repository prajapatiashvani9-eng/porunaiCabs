import { services } from "./footerData";

function FooterServices() {
  return (
    <div>
      <h3
        className="
          text-sm
          font-black
          uppercase
          tracking-widest
          text-white
        "
      >
        Our Services
      </h3>

      <ul className="mt-5 space-y-3">
        {services.map((service) => (
          <li
            key={service}
            className="
              flex
              items-center
              gap-2
              text-sm
              text-slate-400
            "
          >
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterServices;