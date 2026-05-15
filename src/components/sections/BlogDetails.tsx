import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const blogArticles = [
  {
    id: "sec-rules",
    tag: "Corporate",
    title: "What the New SEC Disclosure Rules Mean for Mid-Market Boards",
    date: "May 2026",
    author: "James Harrington",
    content: (
      <div className="space-y-6">
        <p>
          The Securities and Exchange Commission (SEC) has recently finalized a series of disclosure
          requirements that will fundamentally alter how mid-market corporations report their
          operational and governance data starting in the 2026 fiscal year.
        </p>
        <h3 className="text-xl font-display text-text-primary">ESG Metrics and Transparency</h3>
        <p>
          Moving beyond voluntary reporting, the new rules mandate specific disclosures regarding
          environmental impact, workforce diversity, and executive compensation alignment. Mid-market
          boards must now implement robust internal controls to capture and verify this data with the
          same rigor applied to financial statements.
        </p>
        <h3 className="text-xl font-display text-text-primary">Cybersecurity Risk Management</h3>
        <p>
          Perhaps the most critical addition is the requirement for immediate disclosure of "material
          cybersecurity incidents" and annual reporting on the board's role in overseeing digital
          risks. This necessitates a clear, documented process for incident response and board-level
          expertise in cybersecurity.
        </p>
        <p>
          Our recommendation for leadership is to begin a "gap analysis" of current reporting
          capabilities immediately. The transition period is shorter than it appears, and the
          penalties for non-compliance are substantial.
        </p>
      </div>
    ),
  },
  {
    id: "visa-pathways",
    tag: "Immigration",
    title: "Updated Visa Pathways for Skilled Workers in 2026",
    date: "April 2026",
    author: "Amara Osei",
    content: (
      <div className="space-y-6">
        <p>
          The landscape of U.S. immigration is undergoing a significant transformation in 2026, with a
          particular focus on attracting and retaining global talent in emerging technology and
          renewable energy sectors.
        </p>
        <h3 className="text-xl font-display text-text-primary">Streamlined H1-B Extensions</h3>
        <p>
          The new framework introduces an automated extension process for H1-B holders working in
          "critical technology fields." This reduces the administrative burden on both employers and
          employees, providing much-needed stability for long-term projects.
        </p>
        <h3 className="text-xl font-display text-text-primary">New Merit-Based Categories</h3>
        <p>
          A new visa category specifically for specialists in "Green Technology" has been established.
          This category prioritizes individuals with proven expertise in battery technology, carbon
          capture, and sustainable agricultural practices, offering a direct path to permanent
          residency.
        </p>
        <p>
          For U.S. employers, these changes represent a strategic advantage. However, navigating the
          new documentation requirements remains complex. We advise companies to review their talent
          acquisition strategies to leverage these new pathways effectively.
        </p>
      </div>
    ),
  },
  {
    id: "ai-evidence",
    tag: "Litigation",
    title: "AI Evidence in Federal Court: A Practitioner's Guide",
    date: "March 2026",
    author: "Robert Sterling",
    content: (
      <div className="space-y-6">
        <p>
          The integration of Artificial Intelligence into professional and daily life has brought a
          new challenge to the courtroom: the admissibility and authentication of AI-generated
          evidence.
        </p>
        <h3 className="text-xl font-display text-text-primary">The Authentication Challenge</h3>
        <p>
          Federal courts are increasingly applying a heightened standard of authentication for digital
          records produced or modified by AI. Practitioners must be prepared to demonstrate the
          "reliability of the process" rather than just the integrity of the file.
        </p>
        <h3 className="text-xl font-display text-text-primary">Cross-Examining Algorithms</h3>
        <p>
          When an algorithmic output is used as evidence, the opposing counsel has the right to
          challenge the data sets and logic underlying that algorithm. This requires legal teams to
          work closely with technical experts to identify potential biases or flaws in the AI's
          reasoning.
        </p>
        <p>
          As we move forward, the "Black Box" defense—claiming the AI's logic is proprietary and
          therefore unexaminable—is being systematically rejected by judges. Transparency is becoming
          the new standard for admissibility.
        </p>
      </div>
    ),
  },
];

export function BlogDetails() {
  return (
    <section className="py-32 bg-bg-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="space-y-40">
          {blogArticles.map((article) => (
            <div key={article.id} id={article.id} className="scroll-mt-40 border-b border-border pb-32 last:border-0">
              <motion.div
                initial="visible"
                animate="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="max-w-4xl"
              >
                <motion.div variants={fadeUp}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-bg-secondary border border-gold/30 font-accent text-[10px] uppercase tracking-[0.2em] text-gold">
                      {article.tag}
                    </span>
                    <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                      {article.date} · By {article.author}
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-10 leading-tight">
                    {article.title}
                  </h2>
                  <div className="max-w-none text-text-secondary leading-relaxed text-lg space-y-6">
                    {article.content}
                  </div>                  <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
                    <div className="font-accent text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                      © 2026 Veritas Law Journal
                    </div>
                    <div className="flex gap-4">
                      {/* Placeholder for share links */}
                      <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-gold hover:text-gold-light cursor-pointer">
                        Share
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
