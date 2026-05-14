import { r as reactExports, V as jsxRuntimeExports } from "./server-Cz7IVtPL.js";
import { S as SectionHeader } from "./SectionHeader-D5MkZIr0.js";
import { A as AnimatePresence, l as motion } from "./router-qszA5GkW.js";
import { A as ArrowUpRight } from "./arrow-up-right-BuSwavEi.js";
const cases = [
  {
    tag: "Corporate",
    title: "Corporate Merger Compliance",
    outcome: "$200M Deal Protected",
    desc: "Guided a multinational client through a complex cross-border merger, navigating regulatory hurdles in three jurisdictions."
  },
  {
    tag: "Family",
    title: "Wrongful Termination Settlement",
    outcome: "$4.2M Secured",
    desc: "Represented a senior executive in a contested termination dispute, reaching a record-setting confidential settlement."
  },
  {
    tag: "Immigration",
    title: "Family Asylum Granted",
    outcome: "Permanent Residency for 6",
    desc: "Secured asylum and permanent residency for a family fleeing political persecution after a four-year proceeding."
  },
  {
    tag: "Criminal",
    title: "IP Theft Defense — Fortune 500",
    outcome: "All Charges Cleared",
    desc: "Defended a senior officer of a Fortune 500 company in a high-profile trade-secrets case, resulting in full acquittal."
  },
  {
    tag: "Corporate",
    title: "Hostile Takeover Defense",
    outcome: "Independence Preserved",
    desc: "Designed a poison-pill strategy that preserved board independence against an unsolicited acquisition attempt."
  },
  {
    tag: "Family",
    title: "Custody & Relocation Dispute",
    outcome: "Full Custody Awarded",
    desc: "Protected a parent's relocation and custody rights in a precedent-setting interstate matter."
  }
];
const tabs = ["All", "Corporate", "Criminal", "Family", "Immigration"];
function CaseStudies() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.tag === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 lg:py-40 bg-bg-secondary border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          label: "Case Files",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Our ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-light", children: "Landmark" }),
            " Cases."
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActive(t),
          className: `relative px-4 py-2 font-accent text-[10px] uppercase tracking-[0.22em] border transition-colors ${active === t ? "border-gold text-gold" : "border-border text-text-secondary hover:text-gold hover:border-gold/40"}`,
          children: t
        },
        t
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 md:grid-cols-2 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        layout: true,
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
        whileHover: {
          scale: 1.02,
          boxShadow: "0 10px 40px -20px rgba(201,168,76,0.3)",
          borderColor: "rgba(201,168,76,0.4)"
        },
        transition: { duration: 0.4 },
        className: "relative bg-bg-primary border border-border border-l-[3px] border-l-gold p-8 group transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[10px] uppercase tracking-[0.25em] text-gold", children: c.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mt-3 text-text-primary", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-gold-light text-lg mt-2", children: c.outcome }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-text-secondary leading-relaxed", children: c.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#",
              className: "mt-6 inline-flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.22em] text-gold",
              children: [
                "Read Full Case",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
              ]
            }
          )
        ]
      },
      c.title
    )) }) })
  ] }) });
}
export {
  CaseStudies as C
};
