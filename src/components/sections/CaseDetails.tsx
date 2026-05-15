import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const caseDetails = [
  {
    id: "merger-compliance",
    tag: "Corporate",
    title: "Corporate Merger Compliance",
    subtitle: "$200M Deal Protected",
    background:
      "A multinational technology firm sought to acquire a European competitor, facing intense scrutiny from anti-trust regulators and complex data privacy requirements across three different jurisdictions.",
    strategy:
      "Our team developed a comprehensive compliance roadmap that addressed specific regulatory concerns in the US, EU, and UK simultaneously. We coordinated with local counsel and lead negotiations with regulatory bodies to ensure all conditions were met without compromising the deal's value.",
    outcome:
      "The merger was approved in record time with minimal divestiture requirements. We successfully protected the $200M valuation and established a new framework for the client's future international acquisitions.",
  },
  {
    id: "termination-settlement",
    tag: "Family",
    title: "Wrongful Termination Settlement",
    subtitle: "$4.2M Secured",
    background:
      "A senior executive at a global financial services firm was abruptly terminated following whistleblowing activities regarding internal compliance failures. The firm alleged performance-based reasons for the dismissal.",
    strategy:
      "Veritas Law conducted an exhaustive forensic review of internal communications and performance records. We demonstrated a clear pattern of retaliation and built a compelling case that linked the termination directly to the client's protected activities.",
    outcome:
      "After intensive mediation, we secured a $4.2M confidential settlement, which included full back pay, front pay, and significant damages for reputational harm, setting a new benchmark for executive settlements in the industry.",
  },
  {
    id: "asylum-granted",
    tag: "Immigration",
    title: "Family Asylum Granted",
    subtitle: "Permanent Residency for 6",
    background:
      "A family of six fled political persecution in their home country, arriving in the US with limited documentation. Their initial application for asylum was met with skepticism and procedural delays.",
    strategy:
      "We gathered extensive documentary evidence of the specific threats faced by the family, including expert testimony on the political climate of their home country. Our attorneys represented the family through multiple grueling hearings, ensuring their story was told with clarity and legal precision.",
    outcome:
      "The immigration judge granted asylum to the entire family. We subsequently navigated the complex process to secure permanent residency for all six members, providing them with a foundation for a new, safe life in the United States.",
  },
  {
    id: "ip-theft-defense",
    tag: "Criminal",
    title: "IP Theft Defense — Fortune 500",
    subtitle: "All Charges Cleared",
    background:
      "A senior officer of a Fortune 500 company was indicted on federal charges of stealing trade secrets and conspiracy, following a high-profile investigation into a failed partnership.",
    strategy:
      "Our defense centered on challenging the technical definition of the 'trade secrets' in question and demonstrating that the information was either public knowledge or appropriately shared under existing agreements. We meticulously cross-examined the government's technical experts to expose gaps in their analysis.",
    outcome:
      "The jury returned a verdict of 'Not Guilty' on all counts. Our client was fully exonerated, and the case has since been cited as a significant precedent regarding the limits of trade secret protection in federal law.",
  },
  {
    id: "takeover-defense",
    tag: "Corporate",
    title: "Hostile Takeover Defense",
    subtitle: "Independence Preserved",
    background:
      "A mid-sized public utility company became the target of an unsolicited, hostile takeover bid from a much larger competitor, threatening the company's community-focused mission and long-term stability.",
    strategy:
      "We implemented a sophisticated 'poison pill' shareholder rights plan and coordinated a strategic communication campaign to highlight the long-term value of remaining independent. Simultaneously, we identified regulatory hurdles that would make the acquisition difficult for the competitor to finalize.",
    outcome:
      "The competitor eventually withdrew its bid. The company remained independent, and the strategy we implemented led to a 15% increase in shareholder value over the following fiscal year through internal restructuring.",
  },
  {
    id: "custody-dispute",
    tag: "Family",
    title: "Custody & Relocation Dispute",
    subtitle: "Full Custody Awarded",
    background:
      "In a highly contentious interstate divorce, one parent sought to relocate across the country with the children, while the other parent contested the move and sought primary custody.",
    strategy:
      "We focused on the 'best interests of the child' standard, presenting comprehensive evidence of the client's primary caretaking role and the superior educational and support opportunities available in the new location. We also proposed a detailed, workable visitation schedule to maintain the bond with the other parent.",
    outcome:
      "The court granted the relocation and awarded our client primary physical custody. The decision established a key precedent in our jurisdiction for how relocation requests should be balanced against traditional custody arrangements.",
  },
];

export function CaseDetails() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="space-y-24">
          {caseDetails.map((item) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="scroll-mt-32 border-b border-border pb-24 last:border-0"
            >
              <motion.div variants={fadeUp} className="max-w-4xl">
                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-gold">
                  {item.tag} Case Study
                </span>
                <h2 className="font-display text-4xl lg:text-5xl text-text-primary mt-4 mb-2">
                  {item.title}
                </h2>
                <p className="font-display text-gold-light text-2xl mb-12">Outcome: {item.subtitle}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-1">
                    <h4 className="font-accent text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-4">
                      The Challenge
                    </h4>
                    <p className="text-sm text-text-primary leading-relaxed">
                      {item.background}
                    </p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-accent text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-4">
                      Our Strategy
                    </h4>
                    <p className="text-sm text-text-primary leading-relaxed">
                      {item.strategy}
                    </p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-accent text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-4">
                      The Result
                    </h4>
                    <p className="text-sm text-text-primary leading-relaxed font-medium">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
