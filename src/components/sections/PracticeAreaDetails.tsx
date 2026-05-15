import { motion } from "framer-motion";
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
} from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const details = [
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Law & Business",
    subtitle: "Strategic Guidance for Modern Enterprise",
    content:
      "Our corporate practice group serves as outside general counsel to emerging startups and established multinational corporations alike. We navigate the complexities of mergers and acquisitions, venture capital financing, and corporate governance with a focus on long-term sustainability and risk mitigation.",
    features: [
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Venture Capital & Private Equity",
      "Commercial Contracts",
    ],
  },
  {
    id: "criminal",
    icon: Shield,
    title: "Criminal Defense",
    subtitle: "Principled Defense of Liberty",
    content:
      "Veritas Law provides rigorous defense for individuals and corporations facing state and federal investigations. From white-collar crime and regulatory enforcement to complex felony charges, our team brings decades of trial experience to protect your rights and reputation.",
    features: [
      "White-Collar Defense",
      "Federal Investigations",
      "Regulatory Enforcement",
      "Complex Litigation",
    ],
  },
  {
    id: "family",
    icon: Heart,
    title: "Family Law & Divorce",
    subtitle: "Compassionate Counsel in Transition",
    content:
      "We understand that family law matters are deeply personal and often emotionally taxing. Our attorneys provide compassionate yet objective guidance through high-net-worth divorces, complex custody arrangements, and delicate family disputes, always prioritizing the well-being of those involved.",
    features: [
      "High-Net-Worth Divorce",
      "Child Custody & Support",
      "Prenuptial Agreements",
      "Asset Division",
    ],
  },
  {
    id: "immigration",
    icon: Plane,
    title: "Immigration Law",
    subtitle: "Navigating Global Mobility",
    content:
      "In an increasingly interconnected world, our immigration group helps businesses and individuals navigate the complexities of global mobility. We handle everything from corporate visa programs and green card applications to asylum cases and citizenship proceedings.",
    features: [
      "Employment-Based Visas",
      "Family Reunification",
      "Asylum & Humanitarian Relief",
      "Compliance & Audits",
    ],
  },
  {
    id: "litigation",
    icon: Gavel,
    title: "Personal Injury & Litigation",
    subtitle: "Restoring Justice and Equity",
    content:
      "When harm is done, we stand as fierce advocates for the injured. Our litigation team has a proven track record of securing significant settlements and verdicts in cases of medical malpractice, catastrophic injury, and complex commercial disputes where equity is at stake.",
    features: [
      "Catastrophic Injury",
      "Medical Malpractice",
      "Commercial Litigation",
      "Class Action Suits",
    ],
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate Law",
    subtitle: "Solid Foundations for Every Transaction",
    content:
      "From skyline-defining commercial developments to residential closings, our real estate practice covers the full spectrum of property law. We assist with land use and zoning, environmental compliance, and the resolution of complex title and boundary disputes.",
    features: [
      "Commercial Development",
      "Residential Transactions",
      "Land Use & Zoning",
      "Real Estate Finance",
    ],
  },
  {
    id: "intellectual-property",
    icon: Lightbulb,
    title: "Intellectual Property",
    subtitle: "Protecting the Future of Innovation",
    content:
      "Innovation is the lifeblood of the modern economy. Our IP attorneys protect your most valuable intangible assets through strategic patent prosecution, trademark registration, and aggressive enforcement of copyrights and trade secrets in a digital-first world.",
    features: [
      "Patent Strategy",
      "Trademark Portfolio Management",
      "Copyright Enforcement",
      "Trade Secret Protection",
    ],
  },
  {
    id: "employment",
    icon: Briefcase,
    title: "Employment Law",
    subtitle: "Defining the Modern Workplace",
    content:
      "We advise both employers and executives on the evolving legal landscape of the workplace. Our expertise ranges from drafting robust employment agreements and non-compete clauses to conducting internal investigations and litigating discrimination and wage claims.",
    features: [
      "Executive Compensation",
      "Workplace Investigations",
      "Employment Litigation",
      "Restrictive Covenants",
    ],
  },
  {
    id: "international",
    icon: Globe2,
    title: "International Law",
    subtitle: "Bridging Jurisdictional Divides",
    content:
      "For clients operating across borders, we provide essential guidance on international treaties, cross-border dispute resolution, and global regulatory compliance. Our network of international partners ensures you have local expertise with global perspective.",
    features: [
      "Cross-Border Disputes",
      "International Arbitration",
      "Global Compliance",
      "Treaty Interpretation",
    ],
  },
];

export function PracticeAreaDetails() {
  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-32"
        >
          {details.map((item, idx) => (
            <motion.div
              key={item.id}
              id={item.id}
              variants={fadeUp}
              className={`flex flex-col ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-24 items-center scroll-mt-32`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] bg-bg-secondary overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <item.icon
                      className="w-32 h-32 text-gold/20 group-hover:scale-110 group-hover:text-gold/40 transition-all duration-700"
                      strokeWidth={0.5}
                    />
                  </div>
                  <div className="absolute inset-0 border border-gold/10" />
                </div>
              </div>

              <div className="flex-1">
                <div className="font-accent text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                  {item.subtitle}
                </div>
                <h2 className="font-display text-4xl lg:text-5xl text-text-primary mb-6">
                  {item.title}
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg mb-10">
                  {item.content}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-sm text-text-primary font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
