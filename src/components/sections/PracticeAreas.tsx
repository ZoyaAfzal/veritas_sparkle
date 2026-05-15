import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  Shield,
  Heart,
  Plane,
  Gavel,
  Home,
  Lightbulb,
  Briefcase,
  Globe2,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { stagger, fadeUp } from "@/lib/animations";

const areas = [
  {
    icon: Building2,
    title: "Corporate Law & Business",
    slug: "corporate",
    desc: "Mergers, acquisitions, governance, and contracts for companies of every size.",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    slug: "criminal",
    desc: "Aggressive, principled defense for state and federal criminal matters.",
  },
  {
    icon: Heart,
    title: "Family Law & Divorce",
    slug: "family",
    desc: "Compassionate counsel through divorce, custody, and family disputes.",
  },
  {
    icon: Plane,
    title: "Immigration Law",
    slug: "immigration",
    desc: "Visas, green cards, asylum, and citizenship — across borders and stages of life.",
  },
  {
    icon: Gavel,
    title: "Personal Injury & Litigation",
    slug: "litigation",
    desc: "Recovering what you're owed after accidents, malpractice, and serious harm.",
  },
  {
    icon: Home,
    title: "Real Estate Law",
    slug: "real-estate",
    desc: "Closings, disputes, and complex commercial real estate transactions.",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    slug: "intellectual-property",
    desc: "Trademarks, patents, copyrights and trade secret enforcement.",
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    slug: "employment",
    desc: "Workplace investigations, contracts, and litigation on both sides.",
  },
  {
    icon: Globe2,
    title: "International Law",
    slug: "international",
    desc: "Cross-border disputes, treaties, and global compliance strategy.",
  },
];

export function PracticeAreas() {
  return (
    <section id="practice" className="relative py-28 lg:py-40 grain bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          label="What We Do"
          title={
            <>
              Areas of <span className="text-gold font-light">Legal</span> Expertise.
            </>
          }
          intro="Nine practice groups, one standard of excellence. Discover where Veritas Law can stand for you."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {areas.map(({ icon: Icon, title, desc, slug }, idx) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="magnetic-card group relative bg-bg-primary p-8 lg:p-10 transition-all duration-500 hover:bg-bg-secondary hover:shadow-[0_20px_50px_-15px_rgba(201,168,76,0.15)] overflow-hidden"
            >
              {/* gold wash on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 0%, rgba(201,168,76,0.12), transparent 60%)",
                }}
              />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <div className="relative">
                <div className="relative inline-block">
                  <div
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "rgba(201,168,76,0.25)" }}
                  />
                  <Icon
                    className="relative h-8 w-8 text-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    strokeWidth={1.25}
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl text-text-primary">{title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{desc}</p>
                <Link
                  to="/practice-areas"
                  hash={slug}
                  className="mt-6 inline-flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.25em] text-gold group-hover:text-gold/80 transition-colors"
                >
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
