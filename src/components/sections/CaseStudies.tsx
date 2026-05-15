import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "../SectionHeader";

const cases = [
  {
    tag: "Corporate",
    title: "Corporate Merger Compliance",
    slug: "merger-compliance",
    outcome: "$200M Deal Protected",
    desc: "Guided a multinational client through a complex cross-border merger, navigating regulatory hurdles in three jurisdictions.",
  },
  {
    tag: "Family",
    title: "Wrongful Termination Settlement",
    slug: "termination-settlement",
    outcome: "$4.2M Secured",
    desc: "Represented a senior executive in a contested termination dispute, reaching a record-setting confidential settlement.",
  },
  {
    tag: "Immigration",
    title: "Family Asylum Granted",
    slug: "asylum-granted",
    outcome: "Permanent Residency for 6",
    desc: "Secured asylum and permanent residency for a family fleeing political persecution after a four-year proceeding.",
  },
  {
    tag: "Criminal",
    title: "IP Theft Defense — Fortune 500",
    slug: "ip-theft-defense",
    outcome: "All Charges Cleared",
    desc: "Defended a senior officer of a Fortune 500 company in a high-profile trade-secrets case, resulting in full acquittal.",
  },
  {
    tag: "Corporate",
    title: "Hostile Takeover Defense",
    slug: "takeover-defense",
    outcome: "Independence Preserved",
    desc: "Designed a poison-pill strategy that preserved board independence against an unsolicited acquisition attempt.",
  },
  {
    tag: "Family",
    title: "Custody & Relocation Dispute",
    slug: "custody-dispute",
    outcome: "Full Custody Awarded",
    desc: "Protected a parent's relocation and custody rights in a precedent-setting interstate matter.",
  },
];

const tabs = ["All", "Corporate", "Criminal", "Family", "Immigration"] as const;

export function CaseStudies() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.tag === active);

  return (
    <section className="py-28 lg:py-40 bg-bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            label="Case Files"
            title={
              <>
                Our <span className="text-gold font-light">Landmark</span> Cases.
              </>
            }
          />
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`relative px-4 py-2 font-accent text-[10px] uppercase tracking-[0.22em] border transition-colors ${
                  active === t
                    ? "border-gold text-gold"
                    : "border-border text-text-secondary hover:text-gold hover:border-gold/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.article
                layout
                key={c.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 40px -20px rgba(201,168,76,0.3)",
                  borderColor: "rgba(201,168,76,0.4)",
                }}
                transition={{ duration: 0.4 }}
                className="relative bg-bg-primary border border-border border-l-[3px] border-l-gold p-8 group transition-all"
              >
                <span className="font-accent text-[10px] uppercase tracking-[0.25em] text-gold">
                  {c.tag}
                </span>
                <h3 className="font-display text-2xl mt-3 text-text-primary">{c.title}</h3>
                <p className="font-display text-gold-light text-lg mt-2">{c.outcome}</p>
                <p className="mt-4 text-sm text-text-secondary leading-relaxed">{c.desc}</p>
                <Link
                  to="/case-studies"
                  hash={c.slug}
                  className="mt-6 inline-flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.22em] text-gold group-hover:text-gold/80 transition-colors"
                >
                  Read Full Case
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
