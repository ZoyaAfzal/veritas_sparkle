import { r as reactExports, V as jsxRuntimeExports } from "./server-Cz7IVtPL.js";
import { S as SectionHeader, P as Phone } from "./SectionHeader-D5MkZIr0.js";
import { k as createLucideIcon, l as motion } from "./router-qszA5GkW.js";
import { C as Check } from "./check-BALCcIkd.js";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
function ContactSection() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-28 lg:py-40 bg-bg-primary grain", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          label: "Get in Touch",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Begin Your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-light", children: "Consultation" }),
            "."
          ] }),
          intro: "Tell us about your matter. A senior attorney will respond within one business day."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid lg:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Info,
              {
                icon: MapPin,
                title: "Office",
                text: "1100 Liberty Avenue, Suite 4400, New York, NY 10013"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Phone, title: "Phone", text: "+1 (212) 555-0198" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Mail, title: "Email", text: "hello@veritaslaw.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Clock, title: "Hours", text: "Mon – Fri, 8:00 AM – 7:00 PM ET" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              title: "Map",
              src: "https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.71%2C-73.99%2C40.72&layer=mapnik",
              className: "w-full h-full",
              style: { filter: "grayscale(1) invert(0.92) contrast(0.85)" }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              setSent(true);
            },
            className: "border border-border bg-bg-secondary p-8 lg:p-10 space-y-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "input", placeholder: "Jane Doe" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", className: "input", placeholder: "you@email.com" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", placeholder: "+1 (555) 000 0000" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Practice Area", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Corporate Law" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Criminal Defense" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Family Law" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Immigration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Personal Injury" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Case Description", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  required: true,
                  rows: 5,
                  className: "input resize-none",
                  placeholder: "Briefly describe your matter…"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: sent,
                  className: "w-full bg-gold text-bg-primary font-accent text-[11px] uppercase tracking-[0.22em] py-4 hover:bg-gold-light transition-colors disabled:opacity-70",
                  children: sent ? "Message Received" : "Submit Inquiry"
                }
              ),
              sent && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  className: "flex items-center gap-3 text-gold text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-6 w-6 border border-gold rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5", strokeWidth: 2.5 }) }),
                    "We've received your message. An attorney will reach out shortly."
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-primary);
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .input:focus { border-color: var(--gold); }
        .input::placeholder { color: var(--text-tertiary); }
        select.input { appearance: none; }
      ` })
  ] });
}
function Info({ icon: Icon, title, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-10 w-10 border border-border-gold text-gold flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-[10px] uppercase tracking-[0.22em] text-gold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-text-secondary mt-1", children: text })
    ] })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[10px] uppercase tracking-[0.22em] text-text-secondary mb-2 block", children: label }),
    children
  ] });
}
export {
  ContactSection as C
};
