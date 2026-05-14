import { k as createLucideIcon, l as motion } from "./router-qszA5GkW.js";
import { V as jsxRuntimeExports } from "./server-Cz7IVtPL.js";
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function SectionHeader({
  label,
  title,
  intro,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      variants: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
      },
      className: `max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
            className: `flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[10px] uppercase text-gold tracking-[0.3em]", children: label })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            variants: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
            className: "font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]",
            children: title
          }
        ),
        intro && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            variants: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
            className: "mt-5 text-text-secondary leading-relaxed",
            children: intro
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: {
              hidden: { width: 0 },
              visible: {
                width: align === "center" ? 64 : 96,
                transition: { duration: 0.8, delay: 0.3 }
              }
            },
            className: `mt-8 h-px bg-gold ${align === "center" ? "mx-auto" : ""}`
          }
        )
      ]
    }
  );
}
export {
  Phone as P,
  SectionHeader as S
};
