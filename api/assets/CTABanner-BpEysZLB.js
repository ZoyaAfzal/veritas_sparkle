import { V as jsxRuntimeExports } from "./server-Cz7IVtPL.js";
import { l as motion, L as Link } from "./router-qszA5GkW.js";
import { P as Phone } from "./SectionHeader-D5MkZIr0.js";
function CTABanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 lg:py-36 bg-bg-primary overflow-hidden grain", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        className: "absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none",
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "pattern",
            {
              id: "diag",
              width: "40",
              height: "40",
              patternUnits: "userSpaceOnUse",
              patternTransform: "rotate(45)",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "0", x2: "0", y2: "40", stroke: "#C9A84C", strokeWidth: "0.5" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#diag)" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "relative mx-auto max-w-3xl px-6 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[10px] uppercase tracking-[0.3em] text-gold", children: "Free Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]", children: [
            "Ready to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-light", children: "Protect" }),
            " Your Legal Rights?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-text-secondary max-w-xl mx-auto", children: "Speak with a senior attorney today. Confidential, no obligation, and free of charge." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "bg-gold text-bg-primary font-accent text-[11px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-gold-light transition-colors animate-pulse-gold",
                children: "Book Free Consultation"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+12125550198",
                className: "inline-flex items-center gap-2 border border-text-primary/40 text-text-primary font-accent text-[11px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-text-primary hover:text-bg-primary transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  " Call Us Now"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  CTABanner as C
};
