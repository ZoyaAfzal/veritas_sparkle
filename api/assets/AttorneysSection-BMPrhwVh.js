import { V as jsxRuntimeExports } from "./server-Cz7IVtPL.js";
import { S as SectionHeader } from "./SectionHeader-D5MkZIr0.js";
import { s as stagger, f as fadeUp } from "./animations-B6IlXGQN.js";
import { l as motion, o as Linkedin } from "./router-qszA5GkW.js";
import { A as ArrowUpRight } from "./arrow-up-right-BuSwavEi.js";
const attorneys = [
  {
    name: "James Harrington",
    role: "Senior Partner",
    spec: "Corporate Law",
    img: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Amara Osei",
    role: "Partner",
    spec: "Criminal Defense",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Sofia Marchetti",
    role: "Partner",
    spec: "Immigration Law",
    img: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "David Chen",
    role: "Associate",
    spec: "Family Law",
    img: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];
function AttorneysSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 lg:py-40 bg-bg-primary grain", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        label: "Our Team",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Meet Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-light", children: "Legal" }),
          " Experts."
        ] }),
        intro: "Decorated attorneys from the country's leading law schools, united by a single ethic: relentless advocacy."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: stagger,
        className: "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
        children: attorneys.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: fadeUp,
            whileHover: { y: -10 },
            className: "group relative overflow-hidden bg-bg-secondary transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(201,168,76,0.3)]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: a.img,
                  alt: a.name,
                  className: "h-full w-full object-cover grayscale transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) group-hover:grayscale-0 group-hover:scale-110"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-[10px] uppercase tracking-[0.25em] text-gold", children: a.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-text-primary mt-1", children: a.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-text-secondary mt-1", children: a.spec }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#",
                      className: "inline-flex items-center gap-1 text-gold text-xs font-accent uppercase tracking-[0.2em]",
                      children: [
                        "Profile ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" })
            ] })
          },
          a.name
        ))
      }
    )
  ] }) });
}
export {
  AttorneysSection as A
};
