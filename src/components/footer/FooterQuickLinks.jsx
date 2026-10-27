import { quickLinks } from "./footerData";

function FooterQuickLinks() {
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
        Quick Links
      </h3>

      <ul className="mt-5 space-y-3">
        {quickLinks.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                text-slate-400
                transition-colors
                duration-300
                hover:text-amber-300
              "
            >
              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-slate-600
                  transition-all
                  duration-300
                  group-hover:w-3
                  group-hover:bg-amber-400
                "
              />

              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterQuickLinks;